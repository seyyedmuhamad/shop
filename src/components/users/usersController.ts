import {Request, Response} from "express";
import User from "./model/User";

class UsersController {

    public async index(req:Request, res:Response) {
        const users = await User.find();
        res.send({users});
    }

    public async create(req:Request, res:Response) {
        const newUser = await User.create({
            first_name: 'mahdi',
            last_name: 'khan',
            email: 'a@a.com',
            mobile: '09124500347',
        });
        newUser.addresses.push({
            title: 'home',
            state: 'tehran',
            city: 'tehran',
            address: 'tehran ebrahimi jonobi',
            zip_code: '12345',
            full_name: 'mahdi khan',
            mobile: '09124500347',
        });
        await newUser.save();
        res.send({ newUser });
    }
}
export default UsersController;