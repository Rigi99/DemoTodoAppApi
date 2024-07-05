import express from 'express'
import {deleteUser, getAllUsers, getUser, updateUser} from "../controllers/users.controller";
import {isAuthenticated, isOwner} from "../middlewares/authentication.middleware";

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.get('/users/:id', isAuthenticated, getUser);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.put('/users/:id', isAuthenticated, isOwner, updateUser);
}
