import mongoose from 'mongoose';
import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import {JWT_EXPIRES_IN, JWT_SECRET} from "../config/env.js";



export const signUp = (req, res, next) => {
    const session = await mongoose.startSession()
    session.startTransaction()
    try {
        const { email, password, name } = req.body;

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            const error = new Error('User already exists');
            error.status = 400;
            throw error;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            email,
            password: hashedPassword,
            name
        });

        const newUsers = await user.create([{ name, email, password:hashedPassword }], { session });
        const token = jwt.sign( { userId: newUsers[0]._id, }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN } );


        res.status(201).json({ token, userId: newUsers[0]._id });

       await session.commitTransaction();
        session.endSession();
        res.status(201).json({
            success: true,
            message: 'User successfully created!',
            data : {token, user: newUsers[0]._id}
        });
    } catch(error) {
        await session.abortTransaction();
        session.endSession();
        next(error);
    }

}
export const signIn = (req, res) => {}
export const signOut = (req, res) => {}