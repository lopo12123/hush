import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { EncodeType, hashString } from "../../scripts/hash";

export default () => {
    return <WorkspaceTemplate
        title="RIPEMD-160"
        desc={ [ '<empty>' ] }
        hashList={ [
            {
                name: 'ripemd160',
                fn: (t, encode: EncodeType) => {
                    return hashString(t, 'ripemd160', encode)
                }
            }
        ] }
    />
}