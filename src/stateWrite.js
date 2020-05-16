const fs = require('fs')

module.exports = (mode = 'serverless', filePath = false) => async (projectRoot, content) => {
    const path = !filePath ? '/.serverless/state.js' : filePath
    const loc = projectRoot + path
    const x = 'module.exports = ' + JSON.stringify(content)
    return new Promise((res, rej) => {
       
            fs.writeFile(loc, x, function (err) {
                if (err){

                    if (!filePath && err.message.includes('no such file or directory')) {
                       
                        rej('./.serverless folder does not exist')
                    } else {
                        rej(e)
                    }

                }
                res('success')
            })
        
    })
}