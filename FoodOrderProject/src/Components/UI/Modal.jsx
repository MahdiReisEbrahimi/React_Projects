import { Fragment, useRef, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import AuthContext from "../../Context/Auth-context";
import classes from "./Modal.module.css";

const Backdrop = () => {
  const ctx = useContext(AuthContext);

  return <div className={classes.backdrop} onClick={ctx.onSpaceClick} />;
};

const ModalOverlay = (props) => {
  const modalRef = useRef(null);
  const ctx = useContext(AuthContext);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        ctx.onSpaceClick();
      }
    };

    // با هر کلیک موس یکبار تابع بالا رو اجرا کن
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ctx]);

  return (
    <div ref={modalRef} className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default Modal;
