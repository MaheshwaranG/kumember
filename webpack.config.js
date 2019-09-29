const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public', 'scripts'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"],
                        plugins: ['@babel/plugin-proposal-object-rest-spread', "@babel/plugin-proposal-class-properties"]
                    }
                }
            },
            {
                test: [/\.scss$|\.css/],
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    devtool: "cheap-module-eval-source-map",
    devServer: {
        contentBase: path.join(__dirname, 'public/'),
        publicPath: '/scripts/',
        compress: true,
        port: 9000,
        historyApiFallback: true
    }
}