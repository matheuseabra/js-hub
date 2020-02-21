import React, { useContext } from "react";
import { Pane, Spinner } from "evergreen-ui";
import { ThemeContext } from "styled-components";

const Loader: React.FC = () => {
  const { colors } = useContext(ThemeContext);
  return (
    <Pane
      display="flex"
      alignItems="center"
      justifyContent="center"
      height={400}
    >
      <Spinner theme={colors} />
    </Pane>
  );
};

export default Loader;
