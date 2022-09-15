import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { md5 } from "../../desc.json"
import MD5 from "crypto-js/md5";

export default () => {
    return <WorkspaceTemplate
        desc={ md5 }
        hashList={ [
            {
                name: 'MD5',
                fn: (t) => {
                    return MD5(t) + ''
                }
            }
        ] }
    />
}