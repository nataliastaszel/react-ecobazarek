import { createSlice } from "@reduxjs/toolkit";
import { InitialStoreState } from "../types/types";

const initialState: InitialStoreState = {
  isAuthenticated: false,
  userProfileToken: null,
  userData: {
    id: "",
    city: "",
    country: "",
    county: "",
    district: "",
    email: "",
    farmDesc: "",
    farmName: "",
    firstName: "",
    flatNumber: "",
    lastName: "",
    phone: "",
    postCode: "",
    street: "",
    streetNumber: "",
    voivodeship: "",
  },
  userProducts: [],
};

const userProfileSlice = createSlice({
  name: "userProfile",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true;
      state.userProfileToken = action.payload.token;
      state.userData = action.payload.user;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.userData = initialState.userData;
    },
    register(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    setUserData(state, action) {
      state.isAuthenticated = true;
      state.userData = action.payload;
    },
    setUserProducts(state, action) {
      state.userProducts = action.payload;
    },
  },
});

export const userProfileActions = userProfileSlice.actions;

export default userProfileSlice.reducer;
