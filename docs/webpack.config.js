const path = require('path');

module.exports = {
    context: __dirname,

    entry: './src/app.js',

    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.js',
        publicPath: '/',
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.scss$/,
                loaders: [
                     'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: false
                        }
                    },
                    'sass-loader'
                ],
            }
        ]
    },

    resolve: {
        alias: {
            vue: 'vue/dist/vue.js',
        },
        extensions: ['.js', '.vue'],
    },
};
