import { Link } from "react-router-dom";
import styled from "styled-components";

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
  margin: 1rem;
`;

const Navbar = () => {
  return (
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
        <NavCartIcon>Placeholder</NavCartIcon>
      </NavMenu>
    </NavContainer>
  );
};

export default Navbar;
