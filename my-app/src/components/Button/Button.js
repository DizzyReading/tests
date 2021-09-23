/* eslint-disable no-unused-vars */

import React from "react";
import Button from "../../styles/GlobalComps/Button";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const SharedButton = ({ buttonText, emitEvent }) => {
  const dispatch = useDispatch();

  const submitEvent = () => {
    if (emitEvent) {
      dispatch(emitEvent());
    }
  };

  return (
    <Button onClick={submitEvent} data-test="buttonComponent">
      {buttonText}
    </Button>
  );
};

SharedButton.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};

export default SharedButton;
