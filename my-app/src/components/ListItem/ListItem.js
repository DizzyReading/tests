/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Container, Description, Title } from "./ListItemStyles";

const ListItem = ({ title, description }) => {
  if (!title) {
    return null;
  }
  return (
    <Container data-test="listItemComponent">
      <Title data-test="componentTitle">{title}</Title>
      <Description data-test="componentDesc">{description} </Description>
    </Container>
  );
};

ListItem.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default ListItem;
