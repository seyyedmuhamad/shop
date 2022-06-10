import ICoupon from "src/components/coupon/model/ICoupon";
import IUser from "src/components/users/model/IUser";
import AbstractCouponHandler from "../AbstractCouponHandler";

class UserHandler extends AbstractCouponHandler{
    public process(user: IUser, coupon: ICoupon): ICoupon | null {
        const { userConstraint }  = coupon.constraints;
        if ( user.id !== userConstraint ) {
            throw new Error('این کد تخفیف برای کاربری شما نامعتبر است');
        }
        return super.process(user, coupon);
    }
}

export default UserHandler;