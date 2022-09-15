import { RouteObject } from "react-router-dom";
import Styles from "./MenuItem.module.scss";
import { MouseEventHandler } from "react";

export type MenuItemConfig = {
    detail: RouteObject
    active: boolean
    onClick: MouseEventHandler<HTMLDivElement>
}

export default (props: MenuItemConfig) => {
    return (
        <div className={ Styles.menuitem }
             onClick={ props.onClick }>
            <div className={ props.active ? Styles.bubble_active : Styles.bubble_default }/>
            <div className="menutitle">{ props.detail.path }</div>
        </div>
    )
}