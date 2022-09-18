import Styles from "./PageIsLoading.module.scss";

export default () => {
    return <div className={ Styles.pageIsLoading }>
        <div className={ Styles.flipCard }/>
        <div className={ Styles.loadingText }>
            加载中...
        </div>
    </div>
}