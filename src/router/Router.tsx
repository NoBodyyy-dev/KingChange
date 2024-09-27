import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "../Layout.tsx";
import Main from "../pages/main/Main.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {path: "/", element: <Main/>},
            {path: "/work", element: <Main/>},
            {path: "/rules", element: <Main/>},
            {path: "/faq", element: <Main/>},
            {path: "/change", element: <Main/>},
            {path: "/dashboard", element: <Main/>},
            {path: "/ref", element: <Main/>},
            {path: "/login", element: <Main/>},
            {path: "/register", element: <Main/>},
        ]
    },
]);

export const MainRouterProvider = () => <RouterProvider router={router}/>;