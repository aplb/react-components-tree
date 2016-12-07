export type ReactHook = {
    _renderers: {[key: string]: {
        ComponentTree: Object,
        Mount: Object,
        Reconciler: Object,
    }}
}

export type ReactTree = {
    name: string,
    children: Array<?typeof ReactTree>,
}
