import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/layout";
import { Cart } from "./pages/cart/cart";
import { Home } from "./pages/home/home";
import { ProductDetail } from "./detail/ProductDetail";



const router = createBrowserRouter([ 
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/products/:id",
        element: <ProductDetail />
      }
    ]
  },

]);

export { router };