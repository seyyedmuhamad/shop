import {Request, Response} from "express";

class productsController {
    constructor() {
        
     }
    public index(req:Request, res:Response) {

        res.send({allproducts:[]});

    }
}
export default productsController;