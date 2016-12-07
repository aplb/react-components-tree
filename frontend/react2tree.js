// @flow
import { ReactHook } from './types'
const tree = {}

const getReactTree = (hook: ReactHook) => {
    const renderers = hook._renderers
    const keys = Object.keys(renderers)

    return keys.length > 0 ? walkTree(renderers[keys[0]]) : {}
}

const walkTree = (renderer) => {
    const roots = renderer.Mount._instancesByReactRootID
    // eslint-disable-next-line prefer-const
    for(let name in roots){
        walkNode(roots[name], tree)
    }

    return tree
}

const walkNode = (component, subTree) => {
    // smth with dom names
    if(component){
        subTree.name = component.getName && component.getName() || component._tag || component._currentElement
        if(!subTree.name){
            subTree.name = 'Unknown'
        }

        if(component._renderedComponent && component._currentElement){
            const children = [component._renderedComponent]
            subTree.children = children.map(child => walkNode(child, {}))
        }
        if(component._renderedChildren){
            subTree.children = Object.keys(component._renderedChildren).map(key => walkNode(component._renderedChildren[key], {}))
        }
    }
    return subTree
}

export default getReactTree
