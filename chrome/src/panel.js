// @flow
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import Panel from '../../frontend/Panel'
import type { Props } from '../../frontend/Panel'
import inject from './inject'
import { ReactTree } from '../../frontend/types'

/* global chrome  */

var checkForReact = require('./checkForReact')

let hookReceived = false

const port = chrome.runtime.connect({
    name: '' + chrome.devtools.inspectedWindow.tabId,
})

port.onMessage.addListener(function(message){
    if(message.hook){
        hookReceived = true
        // clearInterval()
        reload(message.hook)
    }
})


const config: Props = {
    checkForReact,
    inject(){
        inject(chrome.runtime.getURL('build/backend.js'), () => {})

        if(!hookReceived){
            setTimeout(() => {
                port.postMessage({payload: 'request-app-details'})
            }, 100)
        }
    },
}

const node = document.getElementById('container')

render(
    <Panel {...config} />,
    node
)

function reload(data: ReactTree){
    unmountComponentAtNode(node)
    node.innerHTML = ''
    render(
        <Panel {...config} data = {data} />,
        node
    )
}
