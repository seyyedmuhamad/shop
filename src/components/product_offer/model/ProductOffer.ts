import { model, Schema } from 'mongoose';
import IProductOffer from './IProductOffer';
import productOfferItemSchema from './ProductOfferItem';

const productOfferSchema: Schema = new Schema({
    products: { type: [productOfferItemSchema], required: true },
    start_date: { type: Date, default: Date.now },
    end_date: { type: Date, default: Date.now },
    created_at: {type: Date, default: Date.now}
})

export default model<IProductOffer>('productOffer', productOfferSchema);