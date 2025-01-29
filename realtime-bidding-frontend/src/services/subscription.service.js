// Importing base class
import { ICreatePaymentSession } from "@/interfaces/subscription.interface";
import { HttpService } from "./base.service";

// Importing interfaces
import { IResponse } from "@/interfaces/response";

class SubscriptionService extends HttpService {
  private readonly prefix: string = "subscription";

  getPlans = (): Promise<IResponse<any>> => this.get(`${this.prefix}/get-plans`);
  createPaymentSession = (data: ICreatePaymentSession): Promise<IResponse<any>> => this.post(`${this.prefix}/create-payment-session`, data);
}
export const subscriptionService = new SubscriptionService();