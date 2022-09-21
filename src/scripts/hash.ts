import { enc } from "crypto-js";
import WordArray from "crypto-js/lib-typedarrays";

// region hash及输出编码
// hash类型
export type HashType = 'Md5' | 'sha1'
    | 'sha256' | 'sha512' | 'sha224' | 'sha384'
    | 'sha3_256' | 'sha3_512' | 'sha3_224' | 'sha3_384'
    | 'ripemd160'

// 编码类型
export type EncodeType =
    'Base64' | 'Base64Url' | 'Hex' | 'Latin1' |
    'Utf8' | 'Utf16' | 'Utf16BE' | 'Utf16LE'
// 编码器
export const ResultEncoder: { [k in EncodeType]: any } = {
    Base64: enc.Base64,
    Base64Url: enc.Base64url,
    Hex: enc.Hex,
    Latin1: enc.Latin1,
    Utf8: enc.Utf8,
    Utf16: enc.Utf16,
    Utf16BE: enc.Utf16BE,
    Utf16LE: enc.Utf16LE,
}
// endregion

// region 读取文件为指定格式
export type TargetType = 'ArrayBuffer' | 'BinaryString' | 'DataURL' | 'Text'

export function readFileToType(target: 'ArrayBuffer'): Promise<ArrayBuffer>
export function readFileToType(target: 'BinaryString' | 'DataURL' | 'Text'): Promise<string>
export function readFileToType(target: TargetType): Promise<ArrayBuffer | string> {
    return new Promise((resolve, reject) => {
        const _ipt = document.createElement('input')
        _ipt.type = 'file'
        _ipt.onchange = () => {
            const file = _ipt.files?.[0]
            if(!file) reject('No File!')
            else {
                const reader = new FileReader()
                reader.onload = () => {
                    resolve(reader.result!)
                }
                reader[`readAs${ target }`](file)
            }
        }
        _ipt.click()
    })
}

// endregion

// region 文件(ArrayBuffer)哈希
// 文件(ArrayBuffer)哈希
export const hashFile = (file: ArrayBuffer, hash: HashType, encode: EncodeType = 'Hex',) => {
    // @ts-ignore
    const _wa = WordArray.create(file)

    // todo do-hash

    return _wa.toString(ResultEncoder[encode])
}
// endregion