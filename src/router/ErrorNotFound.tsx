import { IconError } from "../icons";
import Styles from "./ErrorNotFound.module.scss";
import { useNavigate, useRouteError } from "react-router-dom";

export default () => {
    const navigator = useNavigate()
    const error = useRouteError() as any
    console.error(error)
    return <div className={ Styles.errorNotFound }>
        <IconError className={ Styles.spin }/>
        <div className={ Styles.errorMsg }>
            Error: { error.statusText || error.message || '查看控制台获取错误信息!' }
        </div>
        <div className={ Styles.operations }>
            <div title="返回上一页"
                 onClick={ () => {
                     navigator(-1)
                 } }>
                Previous
            </div>
            <div title="返回首页"
                 onClick={ () => {
                     navigator('/')
                 } }>
                HomePage
            </div>
        </div>
    </div>
}