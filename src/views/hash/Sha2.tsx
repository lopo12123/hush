import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha256, sha512, sha224_384 } from "../../desc.json"
import SHA256 from "crypto-js/sha256";
import SHA512 from "crypto-js/sha512";
import SHA224 from "crypto-js/sha224";
import SHA384 from "crypto-js/sha384";

export default () => {
    return <WorkspaceTemplate
        title="SHA-2"
        desc={ [ sha256, sha512, sha224_384 ] }
        hashList={ [
            {
                name: 'sha256',
                fn: (t: string, encoder: any) => {
                    return SHA256(t).toString(encoder)
                }
            },
            {
                name: 'sha512',
                fn: (t: string, encoder: any) => {
                    return SHA512(t).toString(encoder)
                }
            },
            {
                name: 'sha224',
                fn: (t: string, encoder: any) => {
                    return SHA224(t).toString(encoder)
                }
            },
            {
                name: 'sha384',
                fn: (t: string, encoder: any) => {
                    return SHA384(t).toString(encoder)
                }
            },
        ] }
    />
}