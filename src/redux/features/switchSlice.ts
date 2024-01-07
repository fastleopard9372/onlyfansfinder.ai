/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
export interface ISwitch {
  data: boolean;
}
const initialState: ISwitch = {
  data: true
};

export const switchSlice = createSlice({
  name: "switchState",
  initialState,
  reducers: {
    setState: (state: ISwitch, action) => {
      state.data = action.payload;
    }
  }
});
export const { setState } = switchSlice.actions;
export const getState = (state: RootState) => state.switchState.data;

export default switchSlice.reducer;
