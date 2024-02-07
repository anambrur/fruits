import { createBrowserRouter } from "react-router-dom";
import Shop from "../Pages/Shop";
import App from "../App";
import ShopDetail from "../Pages/ShopDetail";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Chackout from "../Pages/Chackout";
import ErrorPage from "../Pages/ErrorPage";
import Admin from "../AdminPanel/Admin";
import AddProduct from "../AdminPanel/AddProduct";


const router = createBrowserRouter([
    {path:'/',element:<App/>},
    {path:'/shop',element:<Shop/>},
    {path:'/shop-details/:id',element:<ShopDetail/>},
    {path:'/contact',element:<Contact/>},
    {path:'/cart',element:<Cart/>},
    {path:'/chackout',element:<Chackout/>},
    {path:'*',element:<ErrorPage/>},
    {path:'admin',element:<Admin/>},
    {path:'add-product',element:<AddProduct/>},
    
])
export default router


