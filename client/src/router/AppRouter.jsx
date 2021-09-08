import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import PageLoader from "@/components/PageLoader";

const Dashboard = lazy(() =>
  import(/*webpackChunkName:'DashboardPage'*/ "@/pages/Dashboard")
);
const Brand = lazy(() =>
  import(/*webpackChunkName:'BrandPage'*/ "@/pages/Brand")
);

const Customer = lazy(() =>
  import(/*webpackChunkName:'CustomerPage'*/ "@/pages/Customer")
);

const Category = lazy(() => import(/*webpackChunkName:'CategoryPage'*/ "@/pages/Category"));
const Product = lazy(() =>
  import(/*webpackChunkName:'ProductPage'*/ "@/pages/Product")
);

const Logout = lazy(() =>
  import(/*webpackChunkName:'LogoutPage'*/ "@/pages/Logout")
);
const NotFound = lazy(() =>
  import(/*webpackChunkName:'NotFoundPage'*/ "@/pages/NotFound")
);
const Settings = lazy(() =>
  import(/*webpackChunkName:'SettingsPage'*/ "@/pages/Settings")
);

export default function AppRouter() {
  const location = useLocation();
  return (
    <Suspense fallback={<PageLoader />}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Switch location={location} key={location.pathname}>
          <PrivateRoute path="/admin/" component={Dashboard} exact />
          <PrivateRoute component={Customer} path="/admin/customer" exact />
          <PrivateRoute component={Category} path="/admin/category" exact />
          <PrivateRoute component={Product} path="/admin/product" exact />
          <PrivateRoute component={Brand} path="/admin/brand" exact />
          <PrivateRoute component={Settings} path="/admin/settings" exact />

          <PrivateRoute component={Logout} path="/admin/logout" exact />
          <PublicRoute path="/admin/login" render={() => <Redirect to="/" />} />
          <Route
            path="*"
            component={NotFound}
            render={() => <Redirect to="/notfound" />}
          />
        </Switch>
      </AnimatePresence>
    </Suspense>
  );
}
