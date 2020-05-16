const fs = require('fs')

module.exports = (mode = 'serverless', filePath = false) =>  async (projectRoot) => {
    const _path = filePath ? '/.serverless/state.js' : filePath
    const path = projectRoot + _path
    try {
        fs.unlinkSync(path)
    } catch (err) {
        console.error(err)
    }
}
