const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development",
    entry: path.join(__dirname, "src", "index"),
    output: {
        path: path.join(__dirname, "public"),
        filename: "app.js"
    },
    
    devtool: "source-map",

    devServer: {
        port: 3000,
        contentBase: "./public",
        historyApiFallback: true,
        hot: true
    },

    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: "appStyle.css" })
    ],

    module: {
        rules: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            use: [{ 
                loader: "babel-loader",
                options: {
                    presets: ["stage-0", "es2015", "react"],
                    plugins: ["transform-object-rest-spread"]
                }
            }]
        },

        {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, "css-loader"]
        },

        {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            exclude: /node_modules/,
            use: ["file-loader"]
        }
    ]
    }
}