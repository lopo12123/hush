import Styles from "./App.module.scss";
import { Toaster } from "react-hot-toast";

export default () => {
    return (
        <div className={ Styles.app }>
            <Toaster/>
            <div className={ Styles.menu }>
                123
            </div>
            <div className={ Styles.workspace }>
                123
            </div>
        </div>
    )
}
