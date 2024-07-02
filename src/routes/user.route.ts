import express from 'express'
import {deleteUser, getAllUsers, updateUser} from "../controllers/users.controller";
import {isAuthenticated, isOwner} from "../middlewares/index.middleware";

export default (router: express.Router) => {
    router.get('/users', isAuthenticated, getAllUsers);
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    router.put('/users/:id', isAuthenticated, isOwner, updateUser);
}
