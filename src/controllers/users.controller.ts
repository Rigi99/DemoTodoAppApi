import express from 'express'
import {deleteUserById, getUserById, getUsers} from '../models/user.model'

export const getAllUsers = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(400).send({error: 'Something went wrong'})
    }
}

export const deleteUser = async (req: express.Request, res: express.Response) => {
    try {
        const {id} = req.params;
        const deletedUser = await deleteUserById(id);
        return res.status(200).send(deletedUser);
    } catch (error) {
        console.error(error);
        res.status(500).send({error: 'Something went wrong'})
    }
}

export const updateUser = async (req: express.Request, res: express.Response) => {
    try{
        const {id} = req.body;
        const { username } = req.body;
        if(!username) {
            return res.status(400).send({error: "No username!"});
        }
        const user = await getUserById(id);
        if(!user){
            return res.status(400).send({error: "No such user!"});
        }
        user.username = username;
        await user.save();
        return res.status(200).json(user).end();
    } catch (error){
        console.error(error);
        return res.status(400).send({error: 'Something went wrong'})
    }
}
