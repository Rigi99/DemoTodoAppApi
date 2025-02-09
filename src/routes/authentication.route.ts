import {Router} from 'express'
import {login, logout, register} from "../controllers/authentication.controller";

export default (router: Router) => {
    router.post("/auth/register", register);
    router.post("/auth/login", login);
    router.post("/auth/logout/:id", logout);
};
