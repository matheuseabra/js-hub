import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,
*::after,
*::before {
  outline: 0;
  box-sizing: border-box;
}

:root {
  --primary: #ffee1f;
  --primary-light: #f8f19d;
  --primary-dark: #ebd808;

  --white: #fff;
  --black: #111;
  --grey: #777;
  --light-grey: #f7f7f7;

  --font: "Source Code Pro", monospace;
  --font-light: 300;
  --font-bold: 700;
}

body { 
  background: ${props => props.theme.colors.body};
  color: ${props => props.theme.colors.text};
  padding: 0;
  margin: 0;

  font-family: var(--font);
  font-weight: var(--font-light);
}

i {
  position: relative;
  bottom: 0px;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Keyframes */

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  0% {
    transform: translateY(15px);
    transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 0;
  }

  50% {
    
  }

  100% {
    transform: translateY(0px);
    transition: all 0.15s cubic-bezier(0.25, 0.8, 0.25, 1);
    opacity: 1;
  }
}
`;
