import { Button, Text } from "@/components/atoms";
import { subscriptionService } from "@/services/subscription.service";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";

export default function PlanCard({ plan }) {
    const { _id, title, price, description, period } = plan;
    const { user } = useSelector((state) => state.user);

    const [loadingStripe, setLoadingStripe] = useState(false);

    const handlePlanClick = async () => {
        if (loadingStripe) return;
        try {
          setLoadingStripe(true);
          const response = await subscriptionService.createPaymentSession({
            planId: plan?._id
          });
          if (response?.success && response?.data?.data?.sessionUrl) {
            window.location.href = response?.data?.data?.sessionUrl;
          }
        } finally {
          setLoadingStripe(false);
        }
    }

    const isCurrentPlan = useMemo(() => {
      return user?.plan?._id == _id;
    }, [_id, user]);

    return (
        <div className="plan-card relative w-[80%] flex flex-col gap-2 pt-6 pb-6 pl-4 border border-[#333333] rounded-xl cursor-pointer hover:bg-[#131313]">
            <Text size="l" className="font-bold text-white text-[18px] text-gray-900">{title}</Text>
            <Text size="xxs" className="font-console text-gray-600">{description}</Text>
            <div className="price flex flex-col mt-[10px]">
                <Text size="l" className="text-[30px] text-gray-800 font-bold">{price}$ <span className="font-bold text-gray-400">/ {period}</span></Text>
            </div>
            <Button title={isCurrentPlan ? 'Current' : 'Activate'} disabled={isCurrentPlan} onClick={handlePlanClick} />
        </div>
    )
}
