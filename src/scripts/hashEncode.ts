import { enc } from "crypto-js";

export type HashType = 'Base64' | 'Base64Url' | 'Hex' | 'Utf8'
export const HashEncode: { [k in HashType]: any } = {
    Base64: enc.Base64,
    Base64Url: enc.Base64url,
    Hex: enc.Hex,
    Utf8: enc.Utf8,
}