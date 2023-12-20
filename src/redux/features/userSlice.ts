/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { ROLES } from "@/utils/constants";
import { RootState } from "@/redux/store";

export interface IUser {
  loading: boolean;
  data: {
    role: string;
  };
}

const initialState: IUser = {
  loading: false,
  data: {
    role: ROLES.CUSTOMER
  }
};

export const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    setRole: (state: IUser, action) => {
      state.data.role = action.payload;
      state.loading = false;
    },

    setUser: (state: IUser, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    setLoading: (state, action) => {
      state.loading = action.payload;
    }
  }
});

export const { setRole, setUser, setLoading } = userSlice.actions;
export const getUser = (state: RootState) => state.User;

export default userSlice.reducer;
