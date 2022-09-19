import WorkspaceTemplate from "../../layouts/WorkspaceTemplate";
import RIPEMD160 from "crypto-js/ripemd160";

export default () => {
    return <WorkspaceTemplate
        title="RIPEMD-160"
        desc={ [ '<empty>' ] }
        hashList={ [
            {
                name: 'ripemd160',
                fn: (t, encoder: any) => {
                    return RIPEMD160(t).toString(encoder)
                }
            }
        ] }
    />
}