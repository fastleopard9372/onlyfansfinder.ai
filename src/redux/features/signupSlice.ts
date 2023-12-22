/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { ROLES } from "@/utils/constants";
import { RootState } from "@/redux/store";

export interface ISignup {
  stage: number;
  totalStage: number;

  data: {
    role: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    address: string;

    qa: Array<{
      question: string;
      answers: Array<string>;
    }>;

    characteristics: Array<string>;
    subscriptionId: number;

    password: string;
  };
}

const initialState: ISignup = {
  stage: 1,
  totalStage: 3,

  data: {
    role: ROLES.CREATOR,
    name: "",
    email: "",
    phone: "",
    age: 0,
    address: "",

    qa: [],

    characteristics: [],
    subscriptionId: -1,

    password: ""
  }
};

export const signupSlice = createSlice({
  name: "Signup",
  initialState,
  reducers: {
    setStage: (state: ISignup, action) => {
      state.stage = action.payload;
    },

    setRole: (state: ISignup, action) => {
      state.data.role = action.payload;

      if (action.payload === ROLES.CUSTOMER) {
        state.totalStage = 3;
      } else {
        state.totalStage = 4;
      }
    },

    setData: (state: ISignup, action) => {
      state.data = { ...state.data, ...action.payload };
    }
  }
});

export const { setRole, setStage, setData } = signupSlice.actions;
export const getSignup = (state: RootState) => state.Signup;

export default signupSlice.reducer;
