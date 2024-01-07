/* eslint-disable import/no-cycle */
/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

import { ROLES } from "@/utils/constants";
import { RootState } from "@/redux/store";
import { forEach } from "lodash";
import { IArticle } from "@/types/interfaces";

const initialState: IArticle[] = [
  {
    _id: "one",
    id: 0,
    avatar: "/images/avatar.jfif",
    name: "Sofia Parker",
    item: ["💪", "🍑"],
    include: ["onlyfans.com", "sofiaaparker"],
    like: 1281,
    show: 111,
    camera: 89,
    kind: "free",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in... ",
    share: [
      {
        icon: "/images/skill-icons_instagram.svg",
        path: "https://instagram"
      },
      {
        icon: "/images/skill-icons_twitter.svg",
        path: "https://twitter"
      }
    ]
  },
  {
    _id: "one",
    id: 0,
    avatar: "/images/avatar.jfif",
    name: "Sofia Parker",
    item: ["💪", "🍑"],
    include: ["onlyfans.com", "sofiaaparker"],
    like: 1281,
    show: 111,
    camera: 89,
    kind: "free",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in... ",
    share: [
      {
        icon: "/images/skill-icons_instagram.svg",
        path: "https://instagram"
      },
      {
        icon: "/images/skill-icons_twitter.svg",
        path: "https://twitter"
      }
    ]
  },
  {
    _id: "one",
    id: 0,
    avatar: "/images/avatar.jfif",
    name: "Sofia Parker",
    item: ["💪", "🍑"],
    include: ["onlyfans.com", "sofiaaparker"],
    like: 1281,
    show: 111,
    camera: 89,
    kind: "free",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in... ",
    share: [
      {
        icon: "/images/skill-icons_instagram.svg",
        path: "https://instagram"
      },
      {
        icon: "/images/skill-icons_twitter.svg",
        path: "https://twitter"
      }
    ]
  }
];
export const articleSlice = createSlice({
  name: "Article",
  initialState,
  reducers: {
    setData: (state: IArticle[], action) => {
      state = { ...state };
    }
  }
});

export const { setData } = articleSlice.actions;
export const getData = (state: RootState) => state.Article;

export default articleSlice.reducer;
