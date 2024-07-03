import express from 'express'
import {deleteUserById, getUserById, getUsers, updateUserById} from '../models/user.model'

export const getAllUsers = async (_req: express.Request, res: express.Response, _next: express.NextFunction) => {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(400).send({error: 'Something went wrong'})
    }
}

export const getUser = async (req: express.Request, res: express.Response, _next: express.NextFunction) => {
    const {id} = req.params;
    try {
        const user = await getUserById(id);
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        }
        return res.status(200).send({user: user});
    } catch (error) {
        console.error(error);
        res.status(400).send({ error: 'Something went wrong' });
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
        const {id} = req.params;
        const user = await getUserById(id);
        if(!user){
            return res.status(400).send({error: "No such user!"});
        }
        await updateUserById(id, req.body);
        const updatedUser = await updateUserById(id, req.body);
        return res.status(200).json(updatedUser).end();
    } catch (error){
        console.error(error);
        return res.status(400).send({error: 'Something went wrong'})
    }
}
