import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Layout from "../Layout.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
    },
]);

export const MainRouterProvider = () => <RouterProvider router={router}/>;