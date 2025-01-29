// user.service.ts

import { HttpService } from "./base.service";

// Importing interfaces
import { IResponse } from "@/interfaces/response";

class UserService extends HttpService {
  private readonly prefix: string = "profile";

  getUserProfile = (): Promise<IResponse<any>> => this.get(`${this.prefix}`);
}
export const userService = new UserService();