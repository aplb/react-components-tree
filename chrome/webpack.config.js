'use strict';

var webpack = require('webpack');
var __DEV__ = process.env.NODE_ENV !== 'production';

module.exports = {
    devtool: __DEV__ ? 'cheap-module-eval-source-map' : false,
    entry: {
        main: './src/main.js',
        backend: './src/backend.js',
        background: './src/background.js',
        contentScript: './src/contentScript.js',
        panel: './src/panel.js',
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].js',
    },
    plugins: __DEV__ ? [] : [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"',
        }),
        new webpack.optimize.UglifyJsPlugin({
            mangle: false,
            beautify: true,
        }),
    ],
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/,
        }],
    },
};

