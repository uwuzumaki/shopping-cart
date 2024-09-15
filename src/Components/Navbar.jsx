import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import { useState, useContext } from "react";
import { UserCartContext } from "./ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ebebeb;
  color: #000000;
  height: 10vh;
  width: 100%;
`;

const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  font-size: 2rem;
  margin: 1rem;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

const NavItem = styled.li`
  margin: 1rem;
  font-size: 1.5rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;

  &:visited {
    color: #000000;
  }
`;

const NavCartIcon = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 1rem 3rem 1rem 1rem;
  border: 1px solid black;
  border-radius: 25px;
  cursor: pointer;

  display: flex;
`;

const IconWrapper = styled.div`
  margin: 0.5rem;
`;

const CartNumber = styled.div`
  margin: 0.5rem;
`;

//Displays a navbar that allows for navigation between home page, shop page, and the modal for current shopping cart.
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useContext(UserCartContext);

  return (
    <>
      <NavContainer>
        <NavTitle>
          <NavLink to="/">Style Haven</NavLink>
        </NavTitle>
        <NavMenu>
          <NavItem>
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/shop">Shop</NavLink>
          </NavItem>
          <NavCartIcon onClick={() => setIsOpen(true)}>
            <IconWrapper>
              <FontAwesomeIcon icon={faBagShopping} />
            </IconWrapper>
            <CartNumber>{cart.length}</CartNumber>
          </NavCartIcon>
        </NavMenu>
      </NavContainer>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Navbar;
