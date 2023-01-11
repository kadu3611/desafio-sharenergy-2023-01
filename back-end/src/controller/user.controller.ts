import express, { Request, Response} from 'express';
import userModel from '../database/user';

const userController = {
    async find(req:Request, res: Response): Promise<Response>{
        const users = await userModel.find();

        return res.json(users);

    },

    async findById(req:Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const userId = await userModel.findById(id);

        return res.json(userId);

    },

    async create(req:Request, res: Response): Promise<Response>{
  
        const newUser = await userModel.create(req.body);

        return res.json(newUser);

    },
    async update(req:Request, res: Response): Promise<Response>{

        const { id } = req.params;
  
        const deleteUser = await userModel.findByIdAndUpdate(id, req.body);

        return res.json(deleteUser);

    },

    async delete(req:Request, res: Response): Promise<Response>{

        const { id } = req.params;
  
        const deleteUser = await userModel.findByIdAndDelete(id);

        return res.json(deleteUser);

    },


}

export default userController;