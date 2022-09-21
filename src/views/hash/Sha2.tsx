import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha256, sha512, sha224_384 } from "../../desc.json"
import { EncodeType, hashString } from "../../scripts/hash";

export default () => {
    return <WorkspaceTemplate
        title="SHA-2"
        desc={ [ sha256, sha512, sha224_384 ] }
        hashList={ [
            {
                name: 'sha256',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha256', encode)
                }
            },
            {
                name: 'sha512',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha512', encode)
                }
            },
            {
                name: 'sha224',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha224', encode)
                }
            },
            {
                name: 'sha384',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha384', encode)
                }
            },
        ] }
    />
}