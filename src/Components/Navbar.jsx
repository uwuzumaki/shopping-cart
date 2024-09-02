import styled from "styled-components";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
  color: white;
  height: 10vh;
  width: 100%;
`;

const NavTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 20px;
`;

const NavCartIcon = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Navbar = () => {
  return (
    <NavContainer>
      <NavTitle>Shopping</NavTitle>
      <NavMenu>
        <NavItem>Home</NavItem>
        <NavItem>Shop</NavItem>
        <NavCartIcon>Placeholder</NavCartIcon>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
