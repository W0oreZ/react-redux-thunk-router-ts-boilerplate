import React from "react";
import { Route } from "react-router";
import MainLayout from "../layouts/Main.layout";

function MainRoute({ component: Component, ...rest }: any) {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout {...props}>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
}

export default MainRoute;
