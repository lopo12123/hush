import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import { md5 } from "../../desc.json"
import MD5 from "crypto-js/md5";

export default () => {
    return <WorkspaceTemplate
        title="MD5"
        desc={ [ md5 ] }
        hashList={ [
            {
                name: 'MD5',
                fn: (t: string, encoder: any) => {
                    return MD5(t).toString(encoder)
                }
            }
        ] }
    />
}