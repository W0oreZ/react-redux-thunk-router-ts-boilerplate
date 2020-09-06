import React from "react";
import { Route } from "react-router-dom";
import BlankLayout from "../layouts/Blank.layout";

const DefaultRoute = ({ component: Component, ...rest }: any) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <BlankLayout {...props}>
          <Component {...props} />
        </BlankLayout>
      )}
    />
  );
};

export default DefaultRoute;
