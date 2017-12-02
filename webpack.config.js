var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var MergeFilesPlugin = require('merge-files-webpack-plugin');

module.exports = {
    entry: [
        "./components/modals/corgie-modals.js",
        "./components/dropdowns/corgie-dropdowns.js",
        "./corgie-all.css"
    ],
    output: {
        filename: 'corgie-bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                }),
                test: /\.css$/,
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].style.css'
        }),
        new MergeFilesPlugin({
            filename: 'corgie-bundle.css',
            test: /style\.css/, // it could also be a string
            deleteSourceFiles: true
        })
    ]
};