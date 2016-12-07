// @flow
// executed in Window of inspected page
import react2Tree from '../../frontend/react2tree'
import { ReactTree } from '../../frontend/types'

const welcome = (e) => {
    if(e.data && e.data.source === 'react-tree-content-script'){
        const reactTree: ReactTree = react2Tree(window.__REACT_DEVTOOLS_GLOBAL_HOOK__)

        window.removeEventListener('message', welcome)
        window.postMessage({
            source: 'react-backend',
            payload: {
                hook: reactTree,
            },
        }, '*')
    }
}

window.addEventListener('message', welcome)
