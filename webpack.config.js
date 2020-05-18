const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");


module.exports = {
    mode: "development",
    entry: {
        react: "./src/scripts/index.jsx",
        checkRare: "./src/scripts/checkRare.js",
        checkLength: "./src/scripts/checkLength.js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader","css-loader"]
            },
            {
                test: /\.jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react"],
                        plugins:[ "@babel/plugin-proposal-class-properties"]
                    }
                },
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader",
                ],
            }
        ]
    },

    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "src/dist"),
    },
    plugins: [
        new CleanWebpackPlugin(),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "lodash": "_",
        "axios": "axios",
    }
};