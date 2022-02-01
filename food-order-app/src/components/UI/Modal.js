import React, { Fragment } from "react";
import ReactDom from "react-dom";

import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.modalHandler} />;
};

const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalHelper = document.getElementById("overlay-root");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop modalHandler={props.modalHandler} />,
        portalHelper
      )}
      {ReactDom.createPortal(
        <ModalOverlay >
          {props.children}
        </ModalOverlay>,
        portalHelper
      )}
    </Fragment>
  );
};

export default Modal;
