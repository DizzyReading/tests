import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Header from "./Header";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Header {...props}></Header>);
  return component;
};

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("It should render without errors", () => {
    // console.log(component.debug());
    const container = findByTestAttr(component, "headerComponent");
    expect(container.length).toBe(1);
  });

  it("It should render a logo", () => {
    // console.log(component.debug());
    const logo = findByTestAttr(component, "logoImg");
    expect(logo.length).toBe(1);
  });
});
