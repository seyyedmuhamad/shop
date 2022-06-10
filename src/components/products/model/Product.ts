import {model, Schema} from 'mongoose';
import IProduct from './Iproduct';
import ProductStatus from './productStatus';

const productSchema: Schema = new Schema({
    title: { type: String, required: true},
    price: { type: Number, required: true},
    sale_price: { type: Number, default: 0},
    thumbnail: { type: String, required: true},
    gallery: [{ type: [String]}],
    created_at: { type: Date, default: Date.now},
    updated_at: { type: Date, default: Date.now},
    product_category: { type: Schema.Types.ObjectId, ref: 'ProductCategory'},
    status: {type: ProductStatus, default: ProductStatus.INIT},
    attributes: { type: [Object], required: true}
});

export default model<IProduct>('Product', productSchema)