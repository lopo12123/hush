import { useState } from "react";
import Styles from "./FileHash.module.scss";
import { EncodeType, hashFile, HashType, readFileToType } from "../../scripts/hash";
import { SelectButton } from "primereact/selectbutton";
import toast from "react-hot-toast";

const hashTypeList: { value: HashType, label: string }[] = [
    { value: 'md5', label: 'md5' },
    { value: 'sha1', label: 'sha1' },
    { value: 'sha256', label: 'sha256' },
    { value: 'sha512', label: 'sha512' },
    { value: 'sha224', label: 'sha224' },
    { value: 'sha384', label: 'sha384' },
    { value: 'sha3_256', label: 'sha3(256)' },
    { value: 'sha3_512', label: 'sha3(512)' },
    { value: 'sha3_224', label: 'sha3(224)' },
    { value: 'sha3_384', label: 'sha3(384)' },
    { value: 'ripemd160', label: 'ripemd160' },
]
const encodeTypeList = [
    'Base64', 'Base64Url', 'Hex',
    'Latin1', 'Utf8', 'Utf16',
    'Utf16BE', 'Utf16LE'
]

export default () => {
    const [ file, setFile ] = useState<File | null>(null)
    const [ hashType, setHashType ] = useState<HashType>('md5')
    const [ encodeType, setEncodeType ] = useState<EncodeType>('Base64')
    const [ hashResult, setHashResult ] = useState<string>('')

    const selectFile = () => {
        const _ipt = document.createElement('input')
        _ipt.type = 'file'
        _ipt.onchange = () => {
            const _file = _ipt.files?.[0] ?? null
            setFile(_file)
            console.log(_file)
        }
        _ipt.click()
    }
    const doHash = () => {
        if(file === null) toast.error('请选择文件')
        else {
            const task = readFileToType(file, 'ArrayBuffer')
                .then(fileBuffer => {
                    setHashResult(hashFile(fileBuffer, hashType, encodeType))
                })
                .catch(err => {
                    console.log(err)
                })
            toast.promise(task, {
                loading: '计算中',
                success: <span>Get <b>{ encodeType }</b> result using <b>{ hashType.toUpperCase() }</b>.</span>,
                error: arg => {
                    return arg
                }
            })
        }
    }

    return <div className={ Styles.fileHash }>
        <div className={ Styles.workspaceTitle }>File Hash</div>
        <div className={ Styles.blockTitle }>Input</div>
        <div className={ Styles.fileInfoLine }>
            <div className={ Styles.fileInfoLabel }>filename</div>
            <div className={ Styles.fileInfoValue }>{ file?.name ?? '<empty>' }</div>
        </div>
        <div className={ Styles.fileInfoLine }>
            <div className={ Styles.fileInfoLabel }>filetype</div>
            <div className={ Styles.fileInfoValue }>{ file?.type ?? '<empty>' }</div>
        </div>
        <div className={ Styles.fileInfoLine }>
            <div className={ Styles.fileInfoLabel }>filesize</div>
            <div className={ Styles.fileInfoValue }>{ file?.size ? `${ file.size } B` : '<empty>' }</div>
        </div>
        <div className={ Styles.fileInfoLine }>
            <div className={ Styles.fileInfoBtn }
                 onClick={ () => {
                     setFile(null)
                 } }>清除
            </div>
            <div className={ Styles.fileInfoBtn }
                 onClick={ selectFile }>选择
            </div>
        </div>
        <div className={ Styles.blockTitle }>Output Type</div>
        <div className={ Styles.optionContainerBox }>
            <SelectButton
                value={ hashType }
                options={ hashTypeList }
                optionDisabled={ (val) => {
                    return val === 'Utf8'
                } }
                onChange={ (e) => {
                    setHashType(e.value)
                } }/>
        </div>
        <div className={ Styles.blockTitle }>Encode Type</div>
        <div className={ Styles.optionContainerBox }>
            <SelectButton
                value={ encodeType }
                options={ encodeTypeList }
                onChange={ (e) => {
                    setEncodeType(e.value)
                } }/>
        </div>
        <div className={ Styles.blockTitle }>Execute</div>
        <div className={ Styles.operationButton }
             onClick={ doHash }>Hash it!
        </div>
        <div className={ Styles.blockTitle }>Output</div>
        <textarea
            className={ Styles.sourceBox }
            value={ hashResult } readOnly
            placeholder="哈希结果展示在此处"/>
    </div>
}