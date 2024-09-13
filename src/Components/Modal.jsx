/* eslint-disable react/prop-types */
import { createPortal } from "react-dom";
import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  from {
    transform: translateX(100%)
  } to {
    transform: translateX(0%)
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0%)
  } to {
    transform: translateX(100%);
  }
`;

const ModalBase = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1000;
  animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.3s forwards;
`;

const CartBase = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: white;
  z-index: 1000;
  width: 30%;
  max-width: 450px;
  height: 100%;
`;

const Modal = ({ isOpen, setIsOpen }) => {
  if (!isOpen) return null;

  const closeModal = () => {
    setIsOpen(false);
  };

  const propStop = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <>
      <ModalBase onClick={closeModal} isOpen={isOpen}>
        <CartBase onClick={(e) => propStop(e)}></CartBase>
      </ModalBase>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
