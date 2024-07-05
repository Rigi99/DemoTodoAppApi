import { IUserService } from './interfaces/iuser.service';
import { deleteUserById, getUserById, getUsers, updateUserById } from '../models/user.model';
import { Request, Response } from 'express';

class UserService implements IUserService {
    async getAllUsers(_req: Request, res: Response): Promise<Response> {
        try {
            const users = await getUsers();
            return res.status(200).json(users);
        } catch (error) {
            console.error(error);
            return res.status(400).send({error: 'Something went wrong'});
        }
    }

    async getUser(req: Request, res: Response): Promise<Response> {
        const {id} = req.params;
        try {
            const user = await getUserById(id);
            return res.status(200).send({user});
        } catch (error) {
            console.error(error);
            return res.status(404).send({error: 'User not found'});
        }
    }

    async deleteUser(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            const deletedUser = await deleteUserById(id);
            return res.status(200).send(deletedUser);
        } catch (error) {
            console.error(error);
            return res.status(500).send({error: 'Something went wrong'});
        }
    }

    async updateUser(req: Request, res: Response): Promise<Response> {
        try {
            const {id} = req.params;
            const updatedUser = await updateUserById(id, req.body);
            return res.status(200).json(updatedUser).end();
        } catch (error) {
            console.error(error);
            return res.status(400).send({error: 'Something went wrong'});
        }
    }
}

export default new UserService();

