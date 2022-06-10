import { model, Schema } from "mongoose";
import orderStatus from "./OrderStatus";
import IOrder from "./IOrder";
import orderLineSchema from "./OrderLine";

const OrderSchema: Schema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: "User" },
    total_price: { type: Number, required: true },
    coupon: { type: Object, default: null },
    final_price: { type: Number, required: true },
    order_lines: { type: [orderLineSchema] },
    status: { type: orderStatus, required: true, default: orderStatus.INIT },
    delivery_address: { type: Object, default: null },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
});
export default model<IOrder>("Order", OrderSchema);