import { enc } from "crypto-js";

export type HashType =
    'Base64' | 'Base64Url' | 'Hex' | 'Latin1' |
    'Utf8' | 'Utf16' | 'Utf16BE' | 'Utf16LE'
export const HashEncode: { [k in HashType]: any } = {
    Base64: enc.Base64,
    Base64Url: enc.Base64url,
    Hex: enc.Hex,
    Latin1: enc.Latin1,
    Utf8: enc.Utf8,
    Utf16: enc.Utf16,
    Utf16BE: enc.Utf16BE,
    Utf16LE: enc.Utf16LE,
}