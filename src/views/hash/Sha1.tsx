import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha1 } from "../../desc.json"
import { EncodeType, hashString } from "../../scripts/hash";

export default () => {
    return <WorkspaceTemplate
        title="SHA-1"
        desc={ [ sha1 ] }
        hashList={ [
            {
                name: 'sha1',
                fn: (t, encode: EncodeType) => {
                    return hashString(t, 'sha1', encode)
                }
            }
        ] }
    />
}