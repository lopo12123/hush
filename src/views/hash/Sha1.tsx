import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha1 } from "../../desc.json"
import SHA1 from "crypto-js/sha1";

export default () => {
    return <WorkspaceTemplate
        title="SHA-1"
        desc={ [ sha1 ] }
        hashList={ [
            {
                name: 'sha1',
                fn: (t, encoder: any) => {
                    return SHA1(t).toString(encoder)
                }
            }
        ] }
    />
}