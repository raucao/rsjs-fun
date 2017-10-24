const RemoteStorage = require('remotestoragejs')

const remoteStorage = new RemoteStorage({logging: true})

remoteStorage.on('ready',         () => console.log('READY'))
remoteStorage.on('connected',     () => console.log('CONNECTED'))
remoteStorage.on('not-connected', () => console.log('NOT CONNECTED'))

setTimeout(() => { console.log('good bye') }, 3000)
