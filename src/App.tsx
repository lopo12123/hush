import Styles from "./App.module.scss";
import { Suspense, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { hashRoutes } from "./router/hash";
import MenuItem from "./components/MenuItem";

export default () => {
    const navigator = useNavigate()
    const [ activeIdx, setActiveIdx ] = useState(0)

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
                            active={ activeIdx === idx }
                            onClick={ () => {
                                setActiveIdx(idx)
                                navigator(route.path!)
                            } }/>
                    })
                }
            </div>
            <div className={ Styles.workspace }>
                <Suspense fallback={ <div>加载中</div> }>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}
