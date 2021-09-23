import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import { checkProps, findByTestAtrr } from "../../../utils/utils";
import ListItem from "./ListItem";

configure({ adapter: new Adapter() });

describe("ListItem Component", () => {
  describe("Checking PropTypes", () => {
    it("Should NOT thorw a warning", () => {
      const expectedProps = {
        title: "Example Title",
        desc: "Some Text",
      };
      const propError = checkProps(ListItem, expectedProps);
      expect(propError).toBeUndefined();
    });
  });

  describe("Component Renders", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        title: "Example Title",
        desc: "Some Text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Should Render without errors", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(1);
    });

    it("Should Render a Title", () => {
      const title = findByTestAtrr(wrapper, "componentTitle");
      expect(title.length).toBe(1);
    });

    it("Should Render a Description", () => {
      const desc = findByTestAtrr(wrapper, "componentDesc");
      expect(desc.length).toBe(1);
    });
  });

  describe("Should NOT Render", () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        desc: "Some Text",
      };
      wrapper = shallow(<ListItem {...props} />);
    });

    it("Component is not rendered", () => {
      const component = findByTestAtrr(wrapper, "listItemComponent");
      expect(component.length).toBe(0);
    });
  });
});
