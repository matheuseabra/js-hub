import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
import { Icon } from "evergreen-ui";
import { Container, Logotype, Nav, NavItem } from "../Header/Header.styles";

interface HeaderProps {
  toggleTheme: Function;
  setShowSearch: Function;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, setShowSearch }) => {
  const { title, colors } = useContext(ThemeContext);

  return (
    <Container>
      <Logotype>
        <Link to="/">JS Stack</Link>
      </Logotype>
      <Nav>
        <NavItem>
          <Link to="/node">Node</Link>
        </NavItem>
        <NavItem>
          <Link to="/react">React</Link>
        </NavItem>
        <NavItem>
          <Link to="/vue">Vue</Link>
        </NavItem>
        <NavItem>
          <Link to="/typescript">TypeScript</Link>
        </NavItem>
        <NavItem>
          <Link to="/angular">Angular</Link>
        </NavItem>
      </Nav>
      <Nav>
        <NavItem onClick={() => toggleTheme()}>
          {title === "dark" ? (
            <Icon icon="lightbulb" color={colors.text} />
          ) : (
            <Icon icon="moon" color={colors.text} />
          )}
        </NavItem>
        <NavItem onClick={() => setShowSearch(true)}>
          <Icon icon="search" color={colors.text} />
        </NavItem>
      </Nav>
    </Container>
  );
};

export default Header;
