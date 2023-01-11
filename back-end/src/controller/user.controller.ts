import express, { Request, Response} from 'express';
import userModel from '../database/user';

const userController = {
    async find(req:Request, res: Response): Promise<Response>{
        const users = await userModel.find();

        return res.json(users);

    }
}

export default userController;