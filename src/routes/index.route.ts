import {Router} from 'express';
import authentication from './authentication.route';
import user from './user.route'

const router = Router();

export default (): Router => {
    authentication(router);
    user(router);
    return router;
}
