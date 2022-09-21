import { enc } from "crypto-js";
import WordArray from "crypto-js/lib-typedarrays";
import MD5 from "crypto-js/md5";
import SHA1 from "crypto-js/sha1";
import SHA256 from "crypto-js/sha256";
import SHA224 from "crypto-js/sha224";
import SHA384 from "crypto-js/sha384";
import SHA512 from "crypto-js/sha512";
import SHA3 from "crypto-js/sha3";
import RIPEMD160 from "crypto-js/ripemd160";

// region hash及输出编码
// hash类型
export type HashType = 'md5' | 'sha1'
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

// region 哈希// 输入 => WordArray
const Source2Hash: { [k in HashType]: (message: WordArray | string) => WordArray } = {
    md5: MD5,
    sha1: SHA1,
    sha256: SHA256,
    sha512: SHA512,
    sha224: SHA224,
    sha384: SHA384,
    sha3_256: message => SHA3(message, { outputLength: 256 }),
    sha3_512: message => SHA3(message, { outputLength: 512 }),
    sha3_224: message => SHA3(message, { outputLength: 224 }),
    sha3_384: message => SHA3(message, { outputLength: 384 }),
    ripemd160: RIPEMD160
}
// WordArray => 输出字符串
const Hash2Result: { [k in EncodeType]: (wa: WordArray) => string } = {
    Base64: wa => wa.toString(ResultEncoder['Base64']),
    Base64Url: wa => wa.toString(ResultEncoder['Base64Url']),
    Hex: wa => wa.toString(ResultEncoder['Hex']),
    Latin1: wa => wa.toString(ResultEncoder['Latin1']),
    Utf8: wa => wa.toString(ResultEncoder['Utf8']),
    Utf16: wa => wa.toString(ResultEncoder['Utf16']),
    Utf16BE: wa => wa.toString(ResultEncoder['Utf16BE']),
    Utf16LE: wa => wa.toString(ResultEncoder['Utf16LE']),
}
// 文件(ArrayBuffer)哈希
export const hashFile = (file: ArrayBuffer, type: HashType, encode: EncodeType = 'Hex',) => {
    // @ts-ignore
    const _wa = WordArray.create(file)

    return Hash2Result[encode](Source2Hash[type](_wa))
}
// 字符串(string)哈希
export const hashString = (str: string, type: HashType, encode: EncodeType = 'Hex') => {
    return Hash2Result[encode](Source2Hash[type](str))
}
// endregion