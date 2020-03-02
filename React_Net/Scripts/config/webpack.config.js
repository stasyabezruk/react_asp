const path = require("path");

module.exports = {
    entry: "./Scripts/src/index.jsx",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "[name].js"
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};