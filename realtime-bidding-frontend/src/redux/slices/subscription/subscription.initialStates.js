interface ISubscriptionState {
  loading: boolean;
  subscription?: null;
  plans?: any[];
  token?: string | null;
  error?: string | null;
  message?: string | null;
}

const initialSubscriptionState: ISubscriptionState = {
  loading: false,
  subscription: null,
  plans: [],
  token: null,
  error: null,
  message: null,
};

export default initialSubscriptionState;