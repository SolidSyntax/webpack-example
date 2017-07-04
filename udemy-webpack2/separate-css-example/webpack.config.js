const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'), // Generate a fully qualified path, which is required
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                use: 'babel-loader',
                test:/\.js$/,
            },
            {
                loader:ExtractTextPlugin.extract({
                    loader:'css-loader'
                }),
                test: /\.css$/
            }
        ]
    },
    plugins:[new ExtractTextPlugin('style.css')]
};

module.exports = config;