import React from "react";
import { Container, Wrap, Logo, Image } from "./HeaderStyles";
import logo from "../../assets/graphics/logo.png";
const Header = () => {
  return (
    <Container data-test="headerComponent">
      <Wrap>
        <Logo>
          <Image data-test="logoImg" src={logo} />
        </Logo>
      </Wrap>
    </Container>
  );
};

export default Header;
