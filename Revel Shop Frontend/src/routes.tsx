import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ProductDetailPage from "./components/Pages/ProductDetailPage/ProductDetailPage";
import ProductAllPage from "./components/Pages/ProductAllPage/ProductAllPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:for", element: <ProductPage /> },
  { path: "/:for/:slug", element: <ProductDetailPage /> },
  { path: "/all-products", element: <ProductAllPage /> },
  { path: "/add_to_cart", element: <HomePage /> },
]);
export default router;
