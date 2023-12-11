import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ProductDetailPage from "./components/Pages/ProductDetailPage/ProductDetailPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:for", element: <ProductPage /> },
  { path: "/:for/:slug", element: <ProductDetailPage /> },
  { path: "/all-product", element: <HomePage /> },
  { path: "/", element: <HomePage /> },
]);
export default router;
