import express from 'express';
import { AuthenticationService } from '../services/authentication.service';

const authenticationService = new AuthenticationService();

export const register = (req: express.Request, res: express.Response) => {
    return authenticationService.register(req, res);
}

export const login = (req: express.Request, res: express.Response) => {
    return authenticationService.login(req, res);
}

export const logout = (req: express.Request, res: express.Response) => {
    return authenticationService.logout(req, res);
}
