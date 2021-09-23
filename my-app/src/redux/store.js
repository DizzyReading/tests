import { configureStore } from "@reduxjs/toolkit";
// import reducer from "../redux/posts/postsSlice";
import postsReducer from "../redux/posts/postsSlice";

const preloadedState = {
  posts: {
    loading: false,
    posts: [],
    error: "",
  },
};

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
  preloadedState,
});
