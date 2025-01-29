import { Title } from "@/components/atoms";
import { PlanCard } from "@/components/molecules";
import { getPlans } from "@/redux/slices/subscription/subscription.actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SubscriptionModule = () => {
    const dispatch: any = useDispatch();

    const { plans } = useSelector((state: any) => state.subscription);

    console.log('plans', plans);

    useEffect(() => {
        dispatch(getPlans());
    }, [])
    return (
        <div className="login-layout w-full h-full relative flex items-center gap-4 pt-[230px] pb-[50px] overflow-y-scroll no-scrollbar overflow-x-hidden">
            <Title size="h5">Choose your plan</Title>

            <div id="plans" className="w-full flex flex-col items-center gap-6">
                {plans && plans?.map((plan: any) => (
                    plan.title !== 'Trial' && (<PlanCard plan={plan} />)
                ))}
            </div>
        </div>
    )
}
export default SubscriptionModule;