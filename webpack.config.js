var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');


module.exports = {
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, "./../egenoor.github.io"),
        filename:  './app.bundle.js',
        publicPath: "/"
    },
    module: {
        rules:[
            {
                test: /\.svg$/,
                loader: 'svg-react-loader',
            },
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
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(pdf|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    devServer:{
        contentBase: path.join(__dirname, "./../egenoor.github.io"),
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