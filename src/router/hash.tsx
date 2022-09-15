import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Md5 = lazy(() => import("../views/hash/Md5"))
const Sha256 = lazy(() => import("../views/hash/Sha256"))

export const hashRoutes: RouteObject[] = [
    {
        path: 'md5',
        element: <Md5/>
    },
    {
        path: 'sha256',
        element: <Sha256/>
    },
    {
        // 进入页面的默认跳转
        path: "",
        element: <Navigate to="md5" replace/>
    }
]