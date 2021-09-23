import "jest-styled-components";
import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Header from "./Header";
import toJson from "enzyme-to-json";
import theme from "../../themes/default";
import { findByTestAtrr, renderWithTheme } from "../../../utils/utils";
import { Container, Image, Logo, Wrap } from "./HeaderStyles";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Header theme={theme} {...props}></Header>);

  return component;
};

describe("Header Component", () => {
  let component;

  beforeEach(() => {
    component = setUp();
  });

  it("It should render without errors and default theme", () => {
    const container = findByTestAtrr(component, "headerComponent");
    expect(container.length).toBe(1);
    expect(toJson(container)).toMatchSnapshot();
  });

  it("It should render a logo", () => {
    // console.log(component.debug());
    const logo = findByTestAtrr(component, "logoImg");
    expect(logo.length).toBe(1);
    expect(toJson(logo)).toMatchSnapshot();
  });
});

describe("Container Block", () => {
  it("It should render correctly with given css", () => {
    const tree = renderWithTheme(<Container></Container>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
