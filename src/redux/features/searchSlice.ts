/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { RootState } from "@/redux/store";

export interface IList {
  name: string;
  state: boolean;
}
export interface ISelect {
  category: string;
  list: IList[];
}
export interface ISearch {
  search: string;
  selected: string[];
  select: ISelect[];
}

const initialState: ISearch = {
  search: "",
  selected: [],
  select: [
    {
      category: "Cost",
      list: [
        {
          name: "Free",
          state: false
        },
        {
          name: "Free trial",
          state: false
        },
        {
          name: "From $1 to $5",
          state: false
        },
        {
          name: "From $6 to $10",
          state: false
        },
        {
          name: "From $11 to $20",
          state: false
        }
      ]
    },
    {
      category: "Activities",
      list: [
        {
          name: "Free",
          state: false
        },
        {
          name: "Free trial",
          state: false
        },
        {
          name: "From $1 to $5",
          state: false
        },
        {
          name: "From $6 to $10",
          state: false
        },
        {
          name: "From $11 to $20",
          state: false
        }
      ]
    },
    {
      category: "Most",
      list: [
        {
          name: "Free",
          state: false
        },
        {
          name: "Free trial",
          state: false
        },
        {
          name: "From $1 to $5",
          state: false
        },
        {
          name: "From $6 to $10",
          state: false
        },
        {
          name: "From $11 to $20",
          state: false
        }
      ]
    },
    {
      category: "Most",
      list: [
        {
          name: "Free",
          state: false
        },
        {
          name: "Free trial",
          state: false
        },
        {
          name: "From $1 to $5",
          state: false
        },
        {
          name: "From $6 to $10",
          state: false
        },
        {
          name: "From $11 to $20",
          state: false
        }
      ]
    },
    {
      category: "Most",
      list: [
        {
          name: "Free",
          state: false
        },
        {
          name: "Free trial",
          state: false
        },
        {
          name: "From $1 to $5",
          state: false
        },
        {
          name: "From $6 to $10",
          state: false
        },
        {
          name: "From $11 to $20",
          state: false
        }
      ]
    }
  ]
};
export const searchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setData: (state: ISearch, action) => {
      const cat_no = action.payload.cat_no;
      const list_no = action.payload.list_no;
      state.select[cat_no].list[list_no].state =
        !state.select[cat_no].list[list_no].state;
      state.selected = [];
      state.select.forEach((element) => {
        element.list.forEach((ele) => {
          if (ele.state === true) state.selected.push(ele.name);
        });
      });
      state = { ...state };
    },
    setSearch: (state: ISearch, action) => {
      state.search = action.payload;
    }
  }
});

export const { setData, setSearch } = searchSlice.actions;
export const getData = (state: RootState) => state.Search;
export const getSelect = (state: RootState) => state.Search.select;
export const getSelected = (state: RootState) => state.Search.selected;
export const getSearch = (state: RootState) => state.Search.search;

export default searchSlice.reducer;
