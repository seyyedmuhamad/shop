import {model, Schema} from 'mongoose';
import IProductCategory from './IProductCategory';

const productcategorySchema: Schema = new Schema({
    title:{ type: String, required: true },
    total_products: {type: Number, default: 0 },
    attributes: { type: [Object] }
});

export default model<IProductCategory>('Product',  productcategorySchema)