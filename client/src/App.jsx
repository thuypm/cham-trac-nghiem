import PublicLayout from "layouts/PubliceLayout";
import { Route, Routes } from "react-router-dom";
import { publicRoutes } from "routers/routes";
function App() {
  return (
    <>
      <Routes>
        {publicRoutes.map((route) => (
          <Route
            key={route.key}
            path={route.path}
            element={<PublicLayout>{route.element}</PublicLayout>}></Route>
        ))}
      </Routes>
    </>
  );
}

export default App;
