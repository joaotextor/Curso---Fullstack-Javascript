/*
TODO 1: Create a function that returns a Promise
TODO: 10 seconds to be resolved with method resolve
TODO: resolve with 'ok, Promise resolvida'
TODO: Show the text on console


*/

const showConsole = (data) => {
    console.log(data)
} 

const newFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const response = 'ok, Promise resolvida'
            resolve(response)
    }, 10000)
})

}

newFunction()
    .then(showConsole)