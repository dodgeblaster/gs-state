const read = require('./src/stateRead')
const remove = require('./src/stateRemove')
const write = require('./src/stateWrite')

module.exports = (mode = 'serverless', filePath = false) => {
    return {
        read: read(mode, filePath),
        remove: remove(mode, filePath),
        write: write(mode, filePath)
    }
}