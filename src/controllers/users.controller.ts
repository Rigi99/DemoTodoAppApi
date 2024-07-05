import UserService from '../services/user.service';
import { Request, Response } from 'express';


export const getAllUsers = async (req: Request, res: Response) => {
    return UserService.getAllUsers(req, res);
}

export const getUser = async (req: Request, res: Response) => {
    return UserService.getUser(req, res);
}

export const deleteUser = async (req: Request, res: Response) => {
    return UserService.deleteUser(req, res);
}

export const updateUser = async (req: Request, res: Response) => {
    return UserService.updateUser(req, res);
}
