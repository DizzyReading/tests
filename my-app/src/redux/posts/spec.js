import {
  fetchPosts,
  getPostsFailure,
  getPostsRequest,
  getPostsSuccess,
} from "./postsSlice";

import postsReducer from "./postsSlice";

describe("Posts Reducer", () => {
  it("Should return default state", () => {
    const newState = postsReducer(undefined, {});

    expect(newState).toEqual({});
  });

  it("Should return a new state if receiving correct type", () => {
    const posts = [
      { title: "Test 1" },
      { title: "Test 2" },
      { title: "Test 3" },
    ];
    const newState = postsReducer(undefined, fetchPosts(posts));

    expect(newState).toEqual(posts);
  });
});
