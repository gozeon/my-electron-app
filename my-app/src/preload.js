// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { contextBridge } = require('electron')
const qs = require('qs')

contextBridge.exposeInMainWorld('versions', {
    chrome: process.versions['chrome'],
    node: process.versions['node'],
    electron: process.versions['electron'],
})

contextBridge.exposeInMainWorld('actions', {
    ping: payload => fetch(`myapp://ping?${qs.stringify(payload)}`).then(res => res.json())
})