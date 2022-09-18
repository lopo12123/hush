import Styles from "./App.module.scss";
import { Suspense, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { hashRoutes } from "./router/hash";
import PageIsLoading from "./router/PageIsLoading";
import MenuItem from "./components/MenuItem";

export default () => {
    const navigator = useNavigate()
    const location = useLocation()

    const [ activePath, setActivePath ] = useState(location.pathname.slice(1))

    return (
        <div className={ Styles.app }>
            <Toaster/>
            <div className={ Styles.menu }>
                {
                    hashRoutes.map((route, idx) => {
                        // 重定向不用渲染菜单
                        if(route.path === '') return;

                        // 一个子页面一个菜单项
                        return <MenuItem
                            key={ idx } detail={ route }
                            active={ activePath === route.path }
                            onClick={ () => {
                                setActivePath(route.path!)
                                navigator(route.path!)
                            } }/>
                    })
                }
            </div>
            <div className={ Styles.workspace }>
                <Suspense fallback={ <PageIsLoading/> }>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}
