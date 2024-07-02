import {Router} from 'express';
import authentication from './authentication.route';
import user from './user.route'
import todo from './todo.route'

const router = Router();

export default (): Router => {
    authentication(router);
    user(router);
    todo(router)
    return router;
}
