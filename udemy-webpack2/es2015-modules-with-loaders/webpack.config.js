const path = require('path');

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
                use: ['style-loader','css-loader'], // applied from right to left
                test:/\.css$/,
            }
        ]
    }
};

module.exports = config;