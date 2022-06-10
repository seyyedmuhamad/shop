import ICoupon from "src/components/coupon/model/ICoupon";
import IUser from "src/components/users/model/IUser";
import AbstractCouponHandler from "../AbstractCouponHandler";

class ExpireHandler extends AbstractCouponHandler{
    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        const now = new Date();
        if ( now > coupon.expires_at ) {
            throw new Error('تاریخ انقضا کد تخفیف به پایان رسیده است');
        }
        return super.process(user, coupon);
    }
    
}

export default ExpireHandler;