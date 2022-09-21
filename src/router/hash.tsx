import { lazy } from "react";
import { Navigate, RouteObject } from "react-router-dom";
import PageIsLoading from "./PageIsLoading";
import ErrorNotFound from "./ErrorNotFound";

const Md5 = lazy(() => import("../views/hash/Md5"))
const Sha1 = lazy(() => import("../views/hash/Sha1"))
const Sha2 = lazy(() => import("../views/hash/Sha2"))
const Sha3 = lazy(() => import("../views/hash/Sha3"))
const Ripemd160 = lazy(() => import("../views/hash/Ripemd160"))
const FileHash = lazy(() => import("../views/hash/FileHash"))

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
        path: 'sha3',
        element: <Sha3/>
    },
    {
        path: 'ripemd160',
        element: <Ripemd160/>
    },
    {
        path: 'file-hash',
        element: <FileHash/>
    },
    {
        path: 'loading',
        element: <PageIsLoading/>,
        errorElement: <ErrorNotFound/>
    },
    {
        // 进入页面的默认跳转
        path: "",
        element: <Navigate to="md5" replace/>
    }
]