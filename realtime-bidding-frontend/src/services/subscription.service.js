// Importing base class
import { HttpService } from "./base.service";

class SubscriptionService extends HttpService {
  prefix = "subscription";

  getPlans = () => this.get(`${this.prefix}/get-plans`);
  createPaymentSession = (data) => this.post(`${this.prefix}/create-payment-session`, data);
}
export const subscriptionService = new SubscriptionService();