import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";

const Md5 = lazy(() => import("../views/hash/Md5"))
const Sha1 = lazy(() => import("../views/hash/Sha1"))
const Sha2 = lazy(() => import("../views/hash/Sha2"))

export const hashRoutes: RouteObject[] = [
    {
        path: 'md5',
        element: <Md5/>
    },
    {
        path: 'sha1',
        element: <Sha1/>
    },
    {
        path: 'sha2',
        element: <Sha2/>
    },
    {
        // 进入页面的默认跳转
        path: "",
        element: <Navigate to="md5" replace/>
    }
]