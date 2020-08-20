// Exposes ipcRenderer to the renderer-process via contextBridge
// See https://www.electronjs.org/docs/api/context-bridge
// and e.g. https://github.com/electron/electron/issues/9920
const { contextBridge, ipcRenderer } = require('electron')



process.once('loaded', () => {

  contextBridge.exposeInMainWorld(
    'api',
    {
      loadFile: filepath => ipcRenderer.invoke('read-file-content',filepath),
      sendRowsToBeWrittenToFile: data => ipcRenderer.invoke('write-rows-to-file', data),
      sendRowsToBeWrittenToSQLite: data => ipcRenderer.invoke('request-write-to-sqlite',data)
    }
  )
})