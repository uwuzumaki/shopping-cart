/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { StoreDataContext, UserCartContext } from "./ContextProvider";
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
  animation: ${({ $isOpen }) => ($isOpen ? slideIn : slideOut)} 0.3s forwards;
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

  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.ul`
  list-style: none;
`;

const ItemWrapper = styled.li`
  background-color: black;
`;

const Modal = ({ isOpen, setIsOpen }) => {
  const { store } = useContext(StoreDataContext);
  const { cart } = useContext(UserCartContext);

  if (!isOpen) return null;

  const closeModal = () => {
    setIsOpen(false);
  };

  const propStop = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <>
      <ModalBase onClick={closeModal} $isOpen={isOpen}>
        <CartBase onClick={(e) => propStop(e)}>
          <ListWrapper>
            {cart.map((cartItem) => {
              const matching = store.find((storeItem) =>
                storeItem.id === cartItem.id ? storeItem : null
              );
              return matching ? (
                <ItemWrapper key={matching.id}>
                  {matching.title} {"\n"}
                  {"\n"}
                  {matching.price}
                  {"\n"}
                  {"\n"}
                  {matching.price * cartItem.quantity}
                  {"\n"}
                </ItemWrapper>
              ) : null;
            })}
          </ListWrapper>
        </CartBase>
      </ModalBase>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
