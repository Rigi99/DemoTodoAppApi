import { Request, Response } from 'express';

export interface IAuthenticationService {
    register(req: Request, res: Response): Promise<Response>;
    login(req: Request, res: Response): Promise<Response>;
    logout(req: Request, res: Response): Promise<Response>;
}
