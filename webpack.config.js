'use strict'
const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            loader: 'babel-loader'
        }]
    },
    plugins: [
        new CopyPlugin(
            [
                
                {context: './public', from: '*.*'}
                
            ]
        ),
    ],
    devServer: {
        contentBase: './public',
        host: 'localhost',
        port: 8080
    }
}
