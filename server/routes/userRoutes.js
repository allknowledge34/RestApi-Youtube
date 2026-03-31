import express from "express";
import { deleteUserProfile, getUserProfile, loginUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import authUser from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/profile', authUser, getUserProfile)
userRouter.put('/update', authUser, updateUserProfile)
userRouter.delete('/delete', authUser, deleteUserProfile)

export default userRouter
