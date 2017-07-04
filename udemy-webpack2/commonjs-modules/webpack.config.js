const path = require('path');

const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'build'), // Generate a fully qualified path, which is required
        filename: 'bundle.js'
    }
};

module.exports = config;