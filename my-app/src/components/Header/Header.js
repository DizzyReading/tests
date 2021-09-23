/* eslint-disable no-unused-vars */
import React from "react";
import { Container, Wrap, Logo, Image } from "./HeaderStyles";
import logo from "../../assets/graphics/logo.png";
import PropTypes from "prop-types";
const Header = ({ theme, ...props }) => {
  return (
    <Container theme={theme} data-test="headerComponent">
      <Wrap>
        <Logo>
          <Image data-test="logoImg" src={logo} />
        </Logo>
      </Wrap>
    </Container>
  );
};

Header.propTypes = {
  theme: PropTypes.object,
};

export default Header;
