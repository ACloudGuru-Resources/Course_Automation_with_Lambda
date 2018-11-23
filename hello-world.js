module.exports = {
    handler: function (event, context) {
        return new Promise((resolve, reject) => {
            console.log("Hello world!")
            return resolve("Hello world!")
        })
    }
}
