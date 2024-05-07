import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";

import CityList from "./CityList";
import City from "./City";
import CountryList from "./CountryList";
import Form from "./Form";
import { CitiesProvider } from "../contexts/CitiesContext";
import { AuthProvider } from "../contexts/FakeAuthContext";
import ProtectedRoute from "../pages/ProtectedRoute";
import FullPageLoader from "./FullPageLoader";

const Homepage = lazy(() => import("../pages/HomePage"));
const AppPage = lazy(() => import("../pages/AppPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const PricingPage = lazy(() => import("../pages/PricingPage"));
const PageNotFound = lazy(() => import("../pages/PageNotFound"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

function App() {
  return (
    <CitiesProvider>
      <AuthProvider>
        <BrowserRouter>
          <Suspense fallback={<FullPageLoader />}>
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppPage />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate to="cities" replace />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="product" element={<ProductPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </AuthProvider>
    </CitiesProvider>
  );
}

export default App;
