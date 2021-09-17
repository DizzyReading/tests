import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";
import Headline from "./Headline";
import { checkProps, findByTestAtrr } from "../../../utils/utils";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<Headline {...props} />);

  return component;
};

describe("Headline Component", () => {
  describe("Checking PropTypes", () => {
    it("Should not throw a warning", () => {
      const expectedProps = {
        header: "Test Header",
        description: "Test Desc",
        tempArr: [
          {
            fName: "Test fName",
            lName: "Test lName",
            email: "test@email.com",
            age: 23,
            onlineStatus: false,
          },
        ],
      };
      const propsErr = checkProps(Headline, expectedProps);

      expect(propsErr).toBeUndefined();
    });
  });

  describe("Have props", () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        header: "Test Header",
        desc: "Test Description",
      };
      wrapper = setUp(props);
    });

    it("Should render without errors", () => {
      const container = findByTestAtrr(wrapper, "headlineComponent");
      expect(container.length).toBe(1);
    });

    it("Should render h1", () => {
      const h1 = findByTestAtrr(wrapper, "header");
      expect(h1.length).toBe(1);
    });

    it("Should render a description", () => {
      const paragraph = findByTestAtrr(wrapper, "description");
      expect(paragraph.length).toBe(1);
    });
  });

  describe("Have NO props", () => {
    let wrapper;

    beforeEach(() => {
      wrapper = setUp();
    });

    it("Should not render", () => {
      const container = findByTestAtrr(wrapper, "headlineComponent");
      expect(container.length).toBe(0);
    });
  });
});
