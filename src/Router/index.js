import { createBrowserRouter } from "react-router-dom";
import Shop from "../Pages/Shop";
import ShopDetail from "../Pages/ShopDetail";
import Contact from "../Pages/Contact";
import Cart from "../Pages/Cart";
import Chackout from "../Pages/Chackout";
import ErrorPage from "../Pages/ErrorPage";
import Admin from "../AdminPanel/Admin";
import AddProduct from "../AdminPanel/AddProduct";
import Home from "../Pages/Home";


const router = createBrowserRouter([
    {path:'/',element:<Home/>},
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


