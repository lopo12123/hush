import { createHashRouter } from "react-router-dom";
import App from "../App";
import ErrorNotFound from "./ErrorNotFound";

const router = createHashRouter([
    {
        path: '/',
        element: <App/>,
        errorElement: <ErrorNotFound/>
    }
])

export { router }