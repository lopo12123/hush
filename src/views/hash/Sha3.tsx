import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha3, sha3Note, sha3Addition } from "../../desc.json"
import { EncodeType, hashString } from "../../scripts/hash";

export default () => {
    return <WorkspaceTemplate
        title="SHA-3"
        desc={ [ sha3, sha3Note, sha3Addition ] }
        hashList={ [
            {
                name: 'sha3 (256)',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha3_256', encode)
                }
            },
            {
                name: 'sha3 (512)',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha3_512', encode)
                }
            },
            {
                name: 'sha3 (224)',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha3_224', encode)
                }
            },
            {
                name: 'sha3 (384)',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'sha3_384', encode)
                }
            },
        ] }
    />
}