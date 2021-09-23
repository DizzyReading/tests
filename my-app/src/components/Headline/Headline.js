/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import { Container, Paragraph, Title } from "./HeadLineStyles";
import PropTypes from "prop-types";

class Headline extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, description, tempArr } = this.props;

    if (!header) {
      return null;
    }

    return (
      <Container data-test="headlineComponent">
        <Title data-test="header">{header}</Title>
        <Paragraph data-test="description" {...tempArr}>
          {description}
        </Paragraph>
      </Container>
    );
  }
}

Headline.propTypes = {
  header: PropTypes.string,
  description: PropTypes.string,
  tempArr: PropTypes.arrayOf(
    PropTypes.shape({
      fName: PropTypes.string,
      lName: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      onlineStatus: PropTypes.bool,
    })
  ),
};

export default Headline;
