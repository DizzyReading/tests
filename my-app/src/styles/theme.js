import React from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";
import theme from "../themes/default";
import GlobalStyles from "./globals";

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Theme;
