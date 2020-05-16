# gj-state

## Installation
In order to add this package to your service, make sure you are logged in to your npm account. Inside your project folder run the following command:
```
npm i gs-fs
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
This module will format a person retrieved from the Starwars API into card details .
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