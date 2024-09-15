import { useContext, useRef } from "react";
import { StoreDataContext, UserCartContext } from "./ContextProvider";
import styled from "styled-components";

const PageWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background-color: white;
`;

const ListArea = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-y: auto;

  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
`;

const Item = styled.li`
  max-width: 80%;
  margin: 7%;
  max-height: 100%;
  list-style: none;
  background-color: white;
  color: black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const TextTitle = styled.p`
  height: 75px;
  margin: 0 0 10px 0;
`;

const ImageWrapper = styled.div`
  min-width: 200px;
  height: auto;
  min-height: 200px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProductImage = styled.img`
  max-width: 200px;
  height: auto;
  max-height: 200px;
  /* object-fit: cover; */
`;

const TextCost = styled.p`
  margin: 20px;
`;

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const QuantityButton = styled.button`
  padding: 5px 10px;
`;

const Quantity = styled.input`
  background-color: white;
  color: black;
  width: 30px;
  pointer-events: none;
  appearance: none;
  -moz-appearance: textfield;
`;

const Shop = () => {
  const { store } = useContext(StoreDataContext);
  const { cart, setCart } = useContext(UserCartContext);
  const inputRefs = useRef([]);
  const buttonRefs = useRef([]);
  const submitRefs = useRef([]);

  const handleAddQuantity = (index) => {
    const inputValue = inputRefs.current[index].value;
    inputRefs.current[index].value = +inputValue + 1;
  };

  const handleMinusQuantity = (index) => {
    const inputValue = inputRefs.current[index].value;
    if (inputValue > 0) {
      inputRefs.current[index].value = +inputValue - 1;
    }
  };

  const addToCart = (index, item) => {
    const inputValue = inputRefs.current[index].value;
    let isUnique = true;

    const product = {};
    if (inputValue != 0) {
      product.quantity = +inputValue;
      product.id = item.id;
    }

    if (cart.length === 0 && inputValue != 0) {
      setCart((old) => [...old, product]);
    } else if (inputValue != 0) {
      const newCart = cart.map((oldProducts) => {
        if (item.id === oldProducts.id) {
          oldProducts.quantity = oldProducts.quantity + +inputValue;
          isUnique = false;
          return oldProducts;
        } else {
          return oldProducts;
        }
      });
      if (isUnique) {
        setCart([...newCart, product]);
      }
    }
  };

  return (
    <PageWrapper>
      <ListArea>
        {store.map((item, index) => (
          <Item key={item.id} data-testid="card">
            <TextTitle>{item.title}</TextTitle>
            <ImageWrapper>
              <ProductImage src={item.image} alt="product image" />
            </ImageWrapper>
            <TextCost>${item.price}</TextCost>
            <QuantityWrapper>
              <QuantityButton
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => handleMinusQuantity(index)}
              >
                -
              </QuantityButton>
              <Quantity
                type="number"
                placeholder="0"
                min="0"
                ref={(el) => (inputRefs.current[index] = el)}
              />
              <QuantityButton
                ref={(el) => (buttonRefs.current[index] = el)}
                onClick={() => handleAddQuantity(index)}
              >
                +
              </QuantityButton>
              <QuantityButton
                ref={(el) => (submitRefs.current[index] = el)}
                onClick={() => addToCart(index, item)}
              >
                Add
              </QuantityButton>
            </QuantityWrapper>
          </Item>
        ))}
      </ListArea>
    </PageWrapper>
  );
};

export default Shop;
