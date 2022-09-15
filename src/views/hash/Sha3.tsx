import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha3, sha3Note, sha3Addition } from "../../desc.json"
import SHA3 from "crypto-js/sha3";

export default () => {
    return <WorkspaceTemplate
        title="SHA-3"
        desc={ [ sha3, sha3Note, sha3Addition ] }
        hashList={ [
            {
                name: 'sha3 (512)',
                fn: (t) => {
                    return SHA3(t, { outputLength: 512 }) + ''
                }
            },
            {
                name: 'sha3 (384)',
                fn: (t) => {
                    return SHA3(t, { outputLength: 384 }) + ''
                }
            },
            {
                name: 'sha3 (256)',
                fn: (t) => {
                    return SHA3(t, { outputLength: 256 }) + ''
                }
            },
            {
                name: 'sha3 (224)',
                fn: (t) => {
                    return SHA3(t, { outputLength: 224 }) + ''
                }
            },
        ] }
    />
}