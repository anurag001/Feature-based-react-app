const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'recipe.js',
        path: path.join(__dirname, '../../build_js')
    },
    resolve: {
        extensions: ['.js', '.jsx','.css'],
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    mode: 'development'
};

