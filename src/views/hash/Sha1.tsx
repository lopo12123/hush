import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { sha1 } from "../../desc.json"
import SHA1 from "crypto-js/sha1";

export default () => {
    return <WorkspaceTemplate
        desc={ [ sha1 ] }
        hashList={ [
            {
                name: 'sha1',
                fn: (t) => {
                    return SHA1(t) + ''
                }
            }
        ] }
    />
}