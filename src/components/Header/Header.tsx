import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "styled-components";
// import { SidebarContext } from "../../context/SidebarContext";
import { Icon } from "evergreen-ui";
import {
  Container,
  Logotype,
  Menu,
  Nav,
  NavItem,
} from "../Header/Header.styles";

interface HeaderProps {
  toggleTheme: Function;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext);
  // const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  const logotype = "js.hub();";

  return (
    <Container>
      <Logotype>
        <Link to="/">{logotype}</Link>
      </Logotype>
      <Menu>
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
      </Menu>
      <Nav>
        <NavItem onClick={() => toggleTheme()}>
          {title === "dark" ? (
            <Icon icon="lightbulb" color={colors.text} />
          ) : (
            <Icon icon="moon" color={colors.text} />
          )}
        </NavItem>
        {/* <NavItem onClick={() => setShowSidebar(!showSidebar)}>
          <Icon icon="search" color={colors.text} />
        </NavItem> */}
      </Nav>
    </Container>
  );
};

export default Header;
