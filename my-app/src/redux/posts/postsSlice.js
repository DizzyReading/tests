/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import axios from "axios";

export const getPosts = createAsyncThunk(
  "posts/getPosts",
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );

      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

export const getPostsRequest = getPosts.pending;
export const getPostsSuccess = getPosts.fulfilled;
export const getPostsFailure = getPosts.rejected;

const initialState = {};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPosts: (state, action) => {
      return action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = true;
    },

    [getPosts.rejected]: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    [getPosts.fulfilled]: (state, action) => {
      // state.loading = false;
      state.posts = action.payload;
    },
  },
});
export const { fetchPosts } = postsSlice.actions;
export default postsSlice.reducer;
