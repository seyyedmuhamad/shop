import { Document } from "mongoose";
import orderStatus from "./OrderStatus";

export default interface IOrder extends Document {
    user: object;
    total_price: number;
    coupon: object;
    final_price: number;
    status: orderStatus;
    created_at: Date;
    order_lines: [object];
    delivery_address: object;
    updated_at: Date;
}