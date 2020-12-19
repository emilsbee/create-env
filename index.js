const fs = require('fs');
var _ = require('lodash');
const chalk = require('chalk');


const keyPreface = "REACT_APP_" // Preface or leave as an empty string ""
const obj = {} // Object to convert. Keys MUST be camelCase

if (Object.keys(obj).length === 0) {
    console.log(chalk.red("Error: empty obj"))
}

// Recieves a string in camel case and converts it to a env type key in the form SOME_STRING_SEPARATED_BY_SPACES
// also it adds a REACT_APP_ preface to the key
const convertToEnvKey = (item) => {
    

    item = _.lowerCase(item) // Converts a camel case string to a string where the words are separated by spaces
    let arr = item.split(" ") // Creates an array of the strings separated by space
    let envKey = "" // The final formatted string that will be written as the env key

    envKey += `${keyPreface}` // Adds the preface REACT_APP_ to te formatted env key string
    
    // Iterates over the array of separated strings
    arr.forEach(str => {
        envKey += `${_.toUpper(str)}_` 
    })

    envKey = envKey.slice(0, -1); // Removes the last characted of the env key string because it is _ (underscore) that is not needed

    return envKey
}


// Iterates through the keys in the obj
Object.keys(obj).forEach(item => {

    fs.appendFile('.env', `${convertToEnvKey(item)}=${obj[item]}\n`, function (err) {
        if (err) throw err;
        
        console.log('Saved!');
    });
}) 



