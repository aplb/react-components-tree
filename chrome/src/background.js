// @flow

'use strict';

/* global chrome */

const ports = {}

chrome.runtime.onConnect.addListener(function(port){
    let name
    let tab

    if(isNumeric(port.name)){
        installContentScript(+port.name)
        name = 'devtools'
        tab = port.name
    } else {
        name = 'react-tree-content-script'
        tab = port.sender.tab.id
    }

    if(!ports[tab]){
        ports[tab] = {
            devtools: null,
            'react-tree-content-script': null,
        }
    }

    ports[tab][name] = port

    if(ports[tab].devtools && ports[tab]['react-tree-content-script']){
        doublePipe(ports[tab].devtools, ports[tab]['react-tree-content-script'])
    }
})



function doublePipe(devtools, contentScript){
    contentScript.onMessage.addListener(onMsgOne)
    devtools.onMessage.addListener(onMsgTwo)
    function onMsgOne(message){
        devtools.postMessage(message)
    }
    function onMsgTwo(message){
        contentScript.postMessage(message)
    }
    function shutdown(){
        devtools.onMessage.removeListener(onMsgTwo)
        contentScript.onMessage.removeListener(onMsgOne)
        devtools.disconnect()
        contentScript.disconnect()
    }

    devtools.onDisconnect.addListener(shutdown)
    contentScript.onDisconnect.addListener(shutdown)
}

function installContentScript(tabId: number){
    chrome.tabs.executeScript(tabId, {file: '/build/contentScript.js'}, function(){})
}

function isNumeric(str: string): boolean {
    return +str + '' === str
}
