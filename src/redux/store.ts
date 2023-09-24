import { configureStore } from "@reduxjs/toolkit";

import userProfileReducer from "./userProfile";

export type RootState = ReturnType<typeof STORE.getState>;

export const STORE = configureStore({
  reducer: { userProfile: userProfileReducer },
});
