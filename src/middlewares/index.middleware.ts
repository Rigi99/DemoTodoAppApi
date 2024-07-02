import express from 'express';
import { get, merge } from 'lodash';
import { getUserBySessionToken } from '../models/user.model';

export const isOwner = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const { id } = req.params;
        const currentUserId: string | undefined = get(req, 'identity._id');

        if (!currentUserId) {
            return res.status(401).send({ error: 'You are not logged in as an owner.' });
        }

        if (currentUserId !== id) {
            return res.status(403).send({ error: 'You are not logged in as an owner.' });
        }

        next();
    } catch (error) {
        console.log(error);
        return res.status(401).send({ error: 'Not owner!' });
    }
};

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try {
        const sessionToken = req.cookies['DEMO-TODO-APP-API-AUTH'];
        if (!sessionToken) {
            return res.status(401).send({ error: 'Authentication failed' });
        }
        const existingUser = await getUserBySessionToken(sessionToken);
        if (!existingUser) {
            return res.status(401).send({ error: 'Authentication failed' });
        }
        merge(req, { identity: existingUser });
        return next();
    } catch (error) {
        console.error(error);
        return res.status(500).send({ error: 'Internal Server Error' });
    }
};
