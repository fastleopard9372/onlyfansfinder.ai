/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/redux/store";
export interface ISwitch {
  state: boolean;
  page: string;
}
const initialState: ISwitch = {
  state: true,
  page:'/search'
};

export const switchSlice = createSlice({
  name: "switchState",
  initialState,
  reducers: {
    setState: (state: ISwitch, action) => {
      state.state = action.payload;
      if (!state.state)
        state.page = '/swipe';
      else {
        if (state.page === '/swipe')
          state.page = '/search';
      }
    },
    setPage: (state: ISwitch, action) => {
      state.page = action.payload;
    }
  }
});
export const { setState,setPage } = switchSlice.actions;
export const getState = (state: RootState) => state.switchState.state;
export const getPage = (state: RootState) => state.switchState.page;

export default switchSlice.reducer;
