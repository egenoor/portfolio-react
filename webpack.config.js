var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename:  './app.bundle.js',
        publicPath: "/"
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: '/dist'
                })
            },
            {
                test: /\.js$/,
                exclude: path.resolve(__dirname, "/node_modules/"),
                use: 'babel-loader'
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "dist"),
        compress: false,
        publicPath: "/",
        historyApiFallback: true,
        port: 3000,
        stats: 'errors-only',
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Portfolio",
            minify:{
                collapseWhitespace: false
            },
            hash: true,
            template: "./src/index.html"
            }),
        new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
    ]
};