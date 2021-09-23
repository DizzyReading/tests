import React from "react";
import App from "./App";
import { shallow } from "enzyme";
import { findByTestAtrr, testStore } from "../utils/utils";
import theme from "./themes/default";
import toJson from "enzyme-to-json";

const setUp = (initialState = {}) => {
  let store = testStore(initialState);
  let wrapper = shallow(<App></App>);

  return wrapper;
};

describe("App Component", () => {
  let component;

  beforeEach(() => {
    const initialState = {
      posts: [
        {
          title: "Example Title 1",
          body: "Some Text",
        },
        {
          title: "Example Title 2",
          body: "Some Text",
        },
        {
          title: "Example Title 3",
          body: "Some Text",
        },
      ],
    };

    component = setUp(initialState);
  });

  it("Should render without errors", () => {
    const app = findByTestAtrr(component, "appComponent");
    expect(app.length).toBe(1);
    expect(toJson(app)).toMatchSnapshot();
  });
});
