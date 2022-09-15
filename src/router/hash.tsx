import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const Sha256 = lazy(() => import("../views/hash/Sha256"))

export const hashRoutes: RouteObject[] = [
    {
        path: 'sha256',
        element: <Sha256/>
    }
]