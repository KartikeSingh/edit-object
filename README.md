# Installations
```
npm i edit-object
```

# What ?
With this module you can edit nested object with keys like "name.first" etc

# How ?
```js
const editObject = require('edit-object');

// import editObject from "./" // for typescript

const ob = {
    name: {
        first: "Shisui",
        last: "Uchiha",
    }
}

console.log(editObject(ob,"name.first","Itachi")); // output => { name: { first: 'Itachi', last: 'Uchiha' } }
```

# Supports
For support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh), If you find any bug create a issue [here](https://github.com/KartikeSingh/edit-object/issues).