const path = require("path")
module.exports = {
    entry: __dirname + "/app/main.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },

    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        inline: true,
        port: 8888
    }
}