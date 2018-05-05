var path = require('path')
var webpack = require('webpack')

module.exports = {
    devtool: 'eval',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './demo/index'
    ],
    output: {
        path: path.join(__dirname, 'bundle'),
        filename: 'bundle.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ['react-hot-loader/webpack', 'babel-loader'],
                include: [
                    path.join(__dirname, 'demo'),
                    path.join(__dirname, 'src')
                ]
            },
        ]
    }
}
