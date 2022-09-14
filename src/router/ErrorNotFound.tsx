import { IconError } from "../icons";
import "./ErrorNotFound.scss";
import { useRouteError } from "react-router-dom";

export default () => {
    const error = useRouteError() as any
    console.error(error)
    return <div className="error-not-found">
        <IconError className="spin"/>
        <div className="error-msg">
            Error: { error.statusText || error.message || '查看控制台获取错误信息!' }
        </div>
    </div>
}