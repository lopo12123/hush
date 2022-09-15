/// <reference types="vite/client" />

declare module "*.module.scss" {
    const classes: { readonly [k: string]: string }
    export default classes
}