import { createHashRouter } from "react-router-dom";
import App from "../App";
import ErrorNotFound from "./ErrorNotFound";
import IconPreview from "../icons/IconPreview";

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorNotFound/>,
        children: []
    },
    {
        path: '/icons',
        element: <IconPreview/>,
        errorElement: <ErrorNotFound/>,
    }
])

export { router }