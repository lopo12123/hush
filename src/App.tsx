import Styles from "./App.module.scss";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

export default () => {
    return (
        <div className={ Styles.app }>
            <Toaster/>
            <div className={ Styles.menu }>

            </div>
            <div className={ Styles.workspace }>
                <Suspense fallback={ <div>加载中</div> }>
                    <Outlet/>
                </Suspense>
            </div>
        </div>
    )
}
