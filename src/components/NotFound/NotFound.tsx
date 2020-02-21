import React from "react";
import { Link } from "react-router-dom";
import { Pane } from "evergreen-ui";

const NotFound = () => (
  <Pane display="flex" alignItems="center" justifyContent="center" height={400}>
    <h2>Oops! 404 not found :(</h2>
    <p>
      Try navigating back to the <Link to="/">homepage</Link>
    </p>
  </Pane>
);

export default NotFound;
