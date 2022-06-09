import {Request, Response} from "express";
import User from "./model/User";

class UsersController {

    public index(req:Request, res:Response) {
        res.send({allusers:[]});
    }

    public async create(req:Request, res:Response) {
        const newUser = await User.create({
            first_name: 'mahdi',
            last_name: 'khan',
            email: 'a@a.com',
            mobile: '09124500347',
        });
        res.send({ newUser });
    }
}
export default UsersController;