import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from './slices/user/user.slice';
import subscriptionReducer from './slices/subscription/subscription.slice';

const persistConfig = {
  key: "root",
  storage,
//   whitelist: ["auth"],
};

const rootReducer = combineReducers({
  user: userReducer,
  subscription: subscriptionReducer,
});

export default persistReducer(persistConfig, rootReducer);