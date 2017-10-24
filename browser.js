import RemoteStorage from 'remotestoragejs'

const remoteStorage = new RemoteStorage()

remoteStorage.on('ready',         () => console.log('READY'))
remoteStorage.on('connected',     () => console.log('CONNECTED'))
remoteStorage.on('not-connected', () => console.log('NOT CONNECTED'))

console.log('ohai from bundled JS')
