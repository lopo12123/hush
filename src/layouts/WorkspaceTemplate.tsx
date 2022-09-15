import Styles from "./WorkspaceTemplate.module.scss";
import { useState } from "react";

export type WorkspaceTemplateConfig = {
    // 描述
    desc: string[]
    // 哈希方法(列表)
    hashList: {
        name: string
        fn: (t: string) => string
    }[]
}

export default (props: WorkspaceTemplateConfig) => {
    const [ text, setText ] = useState('')
    const [ result, setResult ] = useState('')

    return (
        <div className={ Styles.workspaceTemplate }>
            <div className={ Styles.blockTitle }>Description</div>
            <div className={ Styles.desc }>
                {
                    props.desc.map(descPart => {
                        return <div style={ {
                            margin: '8px 0'
                        } }>{ descPart }</div>
                    })
                }
            </div>
            <div className={ Styles.blockTitle }>Operation</div>
            <div className={ Styles.operationTitle }>Input</div>
            <textarea
                className={ Styles.sourceBox }
                value={ text } placeholder="在此输入源字符串"
                onChange={ (e) => setText(e.target.value) }/>
            <div className={ Styles.operationTitle }>Hash</div>
            <div className={ Styles.operationGroup }>
                {
                    props.hashList
                        .map((hashItem, idx) => {
                            return (
                                <div className={ Styles.operationBtn }
                                     role="button" key={ idx }
                                     onClick={ () => {
                                         setResult(hashItem.fn(text))
                                     } }>{ hashItem.name }</div>
                            )
                        })
                }
            </div>
            <div className={ Styles.operationTitle }>Output</div>
            <textarea
                className={ Styles.sourceBox }
                value={ result } readOnly
                placeholder="哈希结果展示在此处"/>
        </div>
    )
}