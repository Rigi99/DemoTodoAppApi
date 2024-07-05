import AuthenticationService from '../services/authentication.service';
import { Request, Response } from 'express';


export const register = (req: Request, res: Response) => {
    return AuthenticationService.register(req, res);
}

export const login = (req: Request, res: Response) => {
    return AuthenticationService.login(req, res);
}

export const logout = (req: Request, res: Response) => {
    return AuthenticationService.logout(req, res);
}
