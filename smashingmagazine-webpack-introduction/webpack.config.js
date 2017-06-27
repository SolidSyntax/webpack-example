const HtmlwebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
	{	test: /\.jsx?$/,
        	loader: 'babel-loader',
		exclude: /node_modules/,
        	options: {
            		plugins: ['transform-runtime'],
            		presets: ['es2015']
        	}       
	},
	{
		test: /\.hbs$/,loader:'handlebars-loader'
	} ]
    },
    plugins: [
        new HtmlwebpackPlugin({
		title: 'Intro to webpack',
		template: 'src/index.html'
	})
    ]
};
