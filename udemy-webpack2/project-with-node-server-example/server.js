const express = require('express');
const path = require('path');

const app = express();

// Additional routes must be added before the webpack configuration
app.get('/api/hello', (req, res) => res.send({hi: 'there'}));


// Webpack configuration
if (process.env.NODE_ENV !== 'production') {
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
}else{
    app.use(express.static('dist'));
    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname, 'dist/index.html'));
    })
}


// Start the server

const port = process.env.PORT || 3050;
app.listen(port, () => console.log('Listening on port ' + port));