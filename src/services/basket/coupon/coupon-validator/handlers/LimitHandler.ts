import ICoupon from "src/components/coupon/model/ICoupon";
import IUser from "src/components/users/model/IUser";
import AbstractCouponHandler from "../AbstractCouponHandler";

class LimitHandler extends AbstractCouponHandler{
    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        const now = new Date();
        if ( coupon.used >= coupon.limit ) {
            throw new Error('کد تخفیف معتبر نیست');
        }
        return super.process(user, coupon);
    }
}

export default LimitHandler;