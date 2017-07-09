const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR_LIBS = [
    'faker',
    'lodash',
    'react',
    'react-dom',
    'react-input-range',
    'react-redux',
    'react-router',
    'redux',
    'redux-form',
    'redux-thunk'
];

module.exports = {
    entry: {
        bundle: './src/index.js',  // Create a bundle.js starting from index
        vendor: VENDOR_LIBS // Create a vendor.js based on the given modules in node_modules
    },
    output: {
        path: path.join(__dirname, 'dist'),
        /*
            output should be the name of the bundle
            add a hash to enable Cache busting
         */
        filename: '[name].[chunkhash].js'
    },
    module: {
        rules: [
            {
                use: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/,
            }
        ]
    },
    plugins: [
        /*
            CommonsChunkPlugin detects duplicate code in bundles.
            All duplicate code is stored in vendor.js.
            Without this plugin both the vendor.js and bundle.js bundles would be 3+ Mb large
         */
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // The manifest is used to detect if 'vendor' has changed
        }),

        /*
            HtmlWebpackPlugin build an index.html based on a template.
            This eliminates the need to manually add bundle files to the index.html
         */
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
};
