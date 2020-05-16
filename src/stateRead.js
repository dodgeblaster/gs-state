module.exports = (mode = 'serverless', filePath = false) => async (projectRoot) => {
    const path = filePath ? '/.serverless/state.js' : filePath

    try {
        return require(projectRoot + path)
    } catch (e) {
        return 'EMPTY'
    }
}

