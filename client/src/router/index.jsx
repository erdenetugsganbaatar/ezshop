// export { default as AuthRouter } from "./AuthRouter";
// export { default as AppRouter } from "./AppRouter";
import React from "react";

import AdminRouter from "./AdminRouter";
import IndexRouter from "./IndexRouter";

import { Layout } from "antd";


import { Redirect, Route, Switch, useLocation } from "react-router-dom";

export default function Router() {



    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Switch>
          <Route path="/admin" component={AdminRouter}/>
          <Route path="/" component={IndexRouter}/>
        </Switch>
      </Layout>
    );
}

// export default App;
