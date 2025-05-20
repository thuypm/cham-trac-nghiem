import "App.css";
import PublicLayout from "layouts/PubliceLayout";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "routers/routes";
function App() {
  const getRouteComponent = (route) => {
    return route.children ? (
      <Fragment key={route.key}>
        <Route
          key={route.key}
          path={route.path}
          element={<>{route.element}</>}
          index></Route>
        <Route key={route.key} path={route.path}>
          {route.children?.length ? (
            route.children.map((child) => getRouteComponent(child))
          ) : (
            <>{route.element}</>
          )}
        </Route>
        <Route path="*" element={<></>}></Route>
      </Fragment>
    ) : (
      <Route
        key={route.key}
        path={route.path}
        element={<>{route.element}</>}
        index></Route>
    );
  };
  return (
    <>
      <PublicLayout>
        <Routes>{publicRoutes.map((route) => getRouteComponent(route))}</Routes>
      </PublicLayout>
    </>
  );
}

export default App;
