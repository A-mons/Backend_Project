import {Router}  from 'express';
import {getUser, getUsers} from "../controllers/user.controller.js";


const userRouter = Router();

userRouter.get('/', getUsers );

userRouter.get('/:id', getUser );

userRouter.post('/', ( req, res )=> res.send({title : ' Create user'}) );

userRouter.put('/:id', ( req, res )=> res.send({title : 'Update all users'}) );

userRouter.delete('/:id', ( req, res )=> res.send({title : 'delete user'}) );

export default userRouter;