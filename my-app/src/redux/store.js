import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/posts/postsSlice";

const preloadedState = {
  loading: false,
  posts: [],
  error: "",
};

export const store = configureStore({
  reducer,
  preloadedState,
});
