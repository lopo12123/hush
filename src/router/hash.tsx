import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Md5 = lazy(() => import("../views/hash/Md5"))
const Sha256 = lazy(() => import("../views/hash/Sha256"))

export const hashRoutes: RouteObject[] = [
    {
        path: 'sha256',
        element: <Sha256/>
    },
    {
        path: 'md5',
        element: <Md5/>
    }
]