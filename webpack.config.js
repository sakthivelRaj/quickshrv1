var path = require('path');

module.exports = {
    entry : './quickshare/frontend/src/index.js',
    output : {
        path : path.resolve(__dirname , 'quickshare/frontend/static/frontend'),
        filename: 'base.js'
    },
    module : {
        rules : [
            {test : /\.(js)$/, use:'babel-loader'},
            {test : /\.css$/, use:['style-loader', 'css-loader']}
        ]
    },
    mode:'development'
    
}