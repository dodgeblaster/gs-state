# gj-state

## Installation
In order to add this package to your service, make sure you are logged in to your npm account. Inside your project folder run the following command:
```
npm i gs-state
```

## API
Input:
```js

    mode: 'serverless' | 'none' // default serverless
    filePath: String | false  // default false

```

Output:
```js
{
    read(projectRoot: String),
    remove(projectRoot: String),
    write(projectRoot: String)
}

```


## Usage
```js
const setupState = require('gj-state')
const state = setupFs()

const main = async () => {
    await state.write(__dirname, {
        data: 'something
    })

    const data = await state.read(__dirname)
    await state.remove(__dirname)
   
}

```