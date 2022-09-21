import { createHashRouter } from "react-router-dom";
import App from "../App";
import ErrorNotFound from "./ErrorNotFound";
import IconPreview from "../icons/IconPreview";
import TestView from "../views/TestView";
import { hashRoutes } from "./hash";

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorNotFound/>,
        children: hashRoutes
    },
    {
        path: '/icons',
        element: <IconPreview/>,
        errorElement: <ErrorNotFound/>,
    },
    {
        path: '/test',
        element: <TestView/>,
        errorElement: <ErrorNotFound/>,
    }
])

export { router }