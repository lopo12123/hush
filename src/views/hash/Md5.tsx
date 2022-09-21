import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { md5 } from "../../desc.json"
import { hashString, EncodeType } from "../../scripts/hash";

export default () => {
    return <WorkspaceTemplate
        title="MD5"
        desc={ [ md5 ] }
        hashList={ [
            {
                name: 'MD5',
                fn: (t: string, encode: EncodeType) => {
                    return hashString(t, 'md5', encode)
                }
            }
        ] }
    />
}