import Styles from "./WorkspaceTemplate.module.scss";
import { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import "../scripts/hash"
import { ResultEncoder, EncodeType } from "../scripts/hash";
import toast from "react-hot-toast";

export type WorkspaceTemplateConfig = {
    // 标题
    title: string
    // 描述
    desc: string[]
    // 哈希方法(列表)
    hashList: {
        name: string
        fn: (t: string, encode: EncodeType) => string
    }[]
}

export default (props: WorkspaceTemplateConfig) => {
    const [ text, setText ] = useState('')
    const [ result, setResult ] = useState('')
    const [ outType, setOutType ] = useState<EncodeType>('Base64')

    return (
        <div className={ Styles.workspaceTemplate }>
            <div className={ Styles.workspaceTitle }>{ props.title }</div>
            <div className={ Styles.blockTitle }>Description</div>
            <div className={ Styles.desc }>
                {
                    props.desc.map((descPart, idx) => {
                        return <div key={ idx } style={ { margin: '8px 0' } }>{ descPart }</div>
                    })
                }
            </div>
            <div className={ Styles.blockTitle }>Operation</div>
            <div className={ Styles.operationTitle }>Input</div>
            <textarea
                className={ Styles.sourceBox }
                value={ text } placeholder="在此输入源字符串"
                onChange={ (e) => setText(e.target.value) }/>
            <div className={ Styles.operationTitle }>Output Type</div>
            <div className={ Styles.outTypeBox }>
                <SelectButton
                    value={ outType }
                    options={ Object.keys(ResultEncoder) }
                    optionDisabled={ (val) => {
                        return val === 'Utf8'
                    } }
                    onChange={ (e) => {
                        setOutType(e.value)
                    } }/>
            </div>
            <div className={ Styles.operationTitle }>Execute</div>
            <div className={ Styles.operationGroup }>
                {
                    props.hashList
                        .map((hashItem, idx) => {
                            return (
                                <div className={ Styles.operationBtn }
                                     role="button" key={ idx }
                                     onClick={ () => {
                                         try {
                                             const result = hashItem.fn(text, outType)
                                             setResult(result)
                                             toast.success(<span>
                                                 Get <b>{ outType }</b> result using <b>{ hashItem.name.toUpperCase() }</b>.
                                             </span>)
                                         }
                                         catch (e: any) {
                                             console.error(e)
                                             toast.error(String(e))
                                         }
                                     } }>
                                    { hashItem.name }
                                </div>
                            )
                        })
                }
            </div>
            <div className={ Styles.operationTitle }>Output String</div>
            <textarea
                className={ Styles.sourceBox }
                value={ result } readOnly
                placeholder="哈希结果展示在此处"/>
        </div>
    )
}