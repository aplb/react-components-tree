// @flow

/* global chrome */

const port = chrome.runtime.connect({
    name: 'react-tree-content-script',
})

const handleMessageFromDevtools = (message) => {
    window.postMessage({
        source: 'react-tree-content-script',
        message,
    }, '*')
}

const handleMessageFromPage = (e) => {
    if(e.data && e.data.source === 'react-backend'){
        port.postMessage(e.data.payload)
    }
}

window.addEventListener('message', handleMessageFromPage)

port.onMessage.addListener(handleMessageFromDevtools)

