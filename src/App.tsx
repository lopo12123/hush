import Styles from "./App.module.scss";
import { Suspense, useState } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { hashRoutes } from "./router/hash";
import MenuItem from "./components/MenuItem";

export default () => {
    const [ activeIdx, setActiveIdx ] = useState(0)
    return (
        <div className={ Styles.app }>
            <Toaster/>
            <div className={ Styles.menu }>
                {
                    hashRoutes.map((route, idx) => {
                        return <MenuItem
                            key={ idx } detail={ route }
                            active={ activeIdx === idx }
                            onClick={ () => {
                                setActiveIdx(idx)
                                // todo
                                window.location.hash = '#/' + route.path!
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
