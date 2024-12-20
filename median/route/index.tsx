import { createBrowserRouter } from "react-router-dom";
import  Login  from "../../store-cilent/page/login";

import Reg from "../../store-cilent/page/reg";
import Layout from "../../store-cilent/page/layout";

const router=createBrowserRouter([
    {
        path:"/",
        element: <Login />
    },
    {
        path:"/register",
        element: <Reg />
    },
    {
        path:"/layout",
        element: <Layout />
    }
])
export default router;