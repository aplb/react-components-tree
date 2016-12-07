/**
 * @flow
 */
'use strict';

/*  global chrome */

var panelCreated = false

function createPanelIfReactLoaded() {
    if(panelCreated) {
        return
    }

    chrome.devtools.inspectedWindow.eval(`!!(
        Object.keys(window.__REACT_DEVTOOLS_GLOBAL_HOOK__._renderers).length || window.React
    )`, function(pageHasReact, exception){
        if( !pageHasReact || panelCreated){
            return
        }

        clearInterval(loadCheckInterval)
        panelCreated = true

        chrome.devtools.panels.create('ReactTree', '', 'panel.html', function(panel){

        })
    })
}

chrome.devtools.network.onNavigated.addListener(function(){
    createPanelIfReactLoaded()
})

var loadCheckInterval = setInterval(function(){
    createPanelIfReactLoaded()
}, 1000)

createPanelIfReactLoaded()
