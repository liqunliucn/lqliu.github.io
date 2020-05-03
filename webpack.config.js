const path = require("path")
module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    devServer: { 
        contentBase: __dirname +"/public", 
        historyApiFallback: true,
        inline: true, 
        port: 8888 
    }
}