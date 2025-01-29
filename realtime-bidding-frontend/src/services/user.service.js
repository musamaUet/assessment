import { HttpService } from "./base.service";

class UserService extends HttpService {
prefix = "profile";

  getUserProfile = () => this.get(`${this.prefix}`);
}
export const userService = new UserService();