import React from "react";
import checkPropTypes from "check-prop-types";
import theme from "../src/themes/default";
import TestRenderer from "react-test-renderer";
import { ThemeProvider } from "styled-components";
import { configureStore } from "redux-mock-store";
import postsReducer from "../src/redux/posts/postsSlice";
import { createStoreHook } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import ReduxThunk from "redux-thunk";

export const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

export const checkProps = (component, expectedProps) => {
  const propsErr = checkPropTypes(
    component.propTypes,
    expectedProps,
    "props",
    component.name
  );

  return propsErr;
};

export const renderWithTheme = (component) => {
  return TestRenderer.create(
    <ThemeProvider theme={theme}>{component}</ThemeProvider>
  );
};

const middlewares = [ReduxThunk];

export const testStore = (initialState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(
    createStore
  );
  return createStoreWithMiddleware(postsReducer, initialState);
};
