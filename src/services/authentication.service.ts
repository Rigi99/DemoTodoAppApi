import {Request, Response} from 'express';
import {createUser, getUserByEmail, getUserById} from '../models/user.model';
import {random, authentication} from '../helpers/index.helper';
import {IAuthenticationService} from './interfaces/iauthentication.service';

export class AuthenticationService implements IAuthenticationService {
    public async register(req: Request, res: Response): Promise<Response> {
        try {
            const {email, password, username} = req.body;
            if (!email || !password || !username) {
                return res.status(400).send({error: "Username, email and password are required"});
            }

            const existingUser = await getUserByEmail(email);
            if (existingUser) {
                return res.status(400).send({error: "Username, email or password"});
            }

            const salt = random();
            await createUser({
                email: email,
                username: username,
                authentication: {
                    salt: salt,
                    password: authentication(salt, password),
                },
            });
            return this.login(req, res);
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: error});
        }
    }

    public async login(req: Request, res: Response): Promise<Response> {
        try {
            const {email, password} = req.body;
            if (!email || !password) {
                return res.status(400).send({error: "Email and password are required!"});
            }

            const user = await getUserByEmail(email).select('+authentication.salt +authentication.password');
            if (!user) {
                return res.status(400).send({error: "Email does not exist!"});
            }

            if (!user.authentication || !user.authentication.salt) {
                return res.status(400).send({error: "Invalid user authentication data"});
            }

            const expectedHash = authentication(user.authentication.salt, password);
            if (user.authentication.password !== expectedHash) {
                return res.status(403).send({error: "Wrong password"});
            }

            const salt = random();
            user.authentication.sessionToken = authentication(salt, user._id.toString());
            await user.save();

            res.cookie('DEMO-TODO-APP-API-AUTH', user.authentication.sessionToken, {domain: 'localhost', path: '/'});
            return res.status(200).send({user: user});
        } catch (error) {
            console.log(error);
            return res.status(400).send({error: "Username, email or password"});
        }
    }

    public async logout(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            const user = await getUserById(id);
            if (!user) {
                return res.status(404).send({error: "User not found"});
            }
            if (!user.authentication) {
                return res.status(400).send({error: "Invalid user authentication data"});
            }
            user.authentication.sessionToken = null;
            await user.save();
            res.clearCookie('DEMO-TODO-APP-API-AUTH', {domain: 'localhost', path: '/'});
            return res.status(200).send({user: user});
        } catch (error) {
            console.log(error);
            return res.status(500).send({error: "Server error"});
        }
    }
}
