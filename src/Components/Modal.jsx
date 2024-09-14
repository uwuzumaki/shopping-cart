/* eslint-disable react/prop-types */
import { useContext, Fragment } from "react";
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
  color: black;
  z-index: 1000;
  min-width: 560px;
  max-width: 560px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const ListWrapper = styled.ul`
  list-style: none;

  margin: 0;
  padding: 0;
`;

const ItemWrapper = styled.li`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);

  margin: 5% 0;
  padding: 5% 0;
`;

const ItemImage = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 200px;
  margin: auto;

  grid-row: 1/5;
  grid-column: 1/2;
`;

const ItemName = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;

  font-size: 1.2rem;
`;

const ItemPrice = styled.div`
  grid-row: 2/3;
  grid-column: 2/3;

  place-self: center start;
`;

const ItemQuantity = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
  place-self: center start;
`;

const ItemTotal = styled.div`
  grid-row: 4/5;
  grid-column: 2/3;
  place-self: center start;
`;

const ItemBreak = styled.hr`
  border: none;
  height: 2px;
  background: linear-gradient(to right, transparent, black, transparent);
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
                <Fragment key={matching.id}>
                  <ItemWrapper>
                    <ItemImage src={matching.image} />
                    <ItemName>{matching.title}</ItemName>
                    <ItemPrice>Price: ${matching.price}</ItemPrice>
                    <ItemQuantity>Quantity: {cartItem.quantity}</ItemQuantity>
                    <ItemTotal>
                      Total: ${matching.price * cartItem.quantity}
                    </ItemTotal>
                  </ItemWrapper>
                  <ItemBreak />
                </Fragment>
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
