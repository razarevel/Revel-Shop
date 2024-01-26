import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Pages/HomePage/HomePage";
import ProductPage from "./components/Pages/ProductPage/ProductPage";
import ProductDetailPage from "./components/Pages/ProductDetailPage/ProductDetailPage";
import ProductAllPage from "./components/Pages/ProductAllPage/ProductAllPage";
import AddToCartPage from "./components/Pages/Add_To_CartPage/AddToCartPage";
import RawPage from "./components/Pages/RawPage/RawPage";
import SigninPage from "./components/Pages/SigninPage/SigninPage";
import SignUpPage from "./components/Pages/SignUpPage.tsx/SignUpPage";
import BuyPage from "./components/Pages/BuyPage/BuyPage";
import PurchasesPage from "./components/Pages/PurchasesPage.tsx/PurchasesPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:for", element: <ProductPage /> },
  { path: "/:for/:slug", element: <ProductDetailPage /> },
  { path: "/:for/:slug/buy", element: <BuyPage /> },
  { path: "/all-products", element: <ProductAllPage /> },
  { path: "/add_to_cart", element: <AddToCartPage /> },
  { path: "/purchases", element: <PurchasesPage /> },
  { path: "/profil", element: <PurchasesPage /> },

  // raw
  { path: "/help", element: <RawPage /> },
  { path: "/contact_Us", element: <RawPage /> },
  { path: "/faq", element: <RawPage /> },
  // authentication
  { path: "/signin", element: <SigninPage /> },
  { path: "/signup", element: <SignUpPage /> },
]);
export default router;
