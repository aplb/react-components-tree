// @flow

declare var chrome: {
    devtools: {
        network: {
            onNavigated: {
                addListener: (cb: (url: string) => void) => void,
                removeListener: (cb: () => void) => void
            }
        },
        inspectedWindow: {
            eval: (code: string, cb?: (res: any, err: ?Object) => any) => void,
            tabId: number
        },
        panels: {
            create: (title: string, icon: string, filename: string, cb: (panel: {
                onHidden: {
                    addListener: (cb: (window: Object) => void) => void,
                },
                onShown: {
                    addListener: (cb: (window: Object) => void) => void,
                }
            }) => void) => void
        }
    },
    tabs: {
        executeScript: (tabId: number, options: Object, fn: () => void) => void,
    },
    runtime: {
        getURL: (path: string) => string,
        connect: (config: Object) => {
            disconnect: () => void,
            onMessage: {
                addListener: (fn: (message: Object) => void) => void,
            },
            onDisconnect: {
                 addListener: (fn: (message: Object) => void) => void,
            },
            postMessage: (data: Object) => void,
        },
        onConnect: {
            addListener: (fn: (port: {
                name: string,
                sender: {
                    tab: {
                        id: number
                    }
                }
            }) => void) => void
        }
    }
}
