const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        
        path: path.resolve(__dirname,'build'),
        filename: 'main.js',
        // publicPath: '/build/'
    },

    // devServer:{
    //     contentBase: '/build/'
    // },

    module:{
        rules:[
            {
                test:/\.(js|jsx|ts)$/,
                use:'babel-loader'
            },
            {
                test: /\.scss$/,
                use:['style-loader','css-loader','sass-loader']
            },
            {
                test:/\.css$/i,
                use:['style-loader','css-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },

    resolve: {
        alias: {
          src: path.resolve(__dirname, 'src/')
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json','.scss']
    },
    plugins: [
    new HtmlWebpackPlugin({
        hash: true,
        title: 'My Awesome application',
        template: './public/index.html',
        filename: 'index.html' //relative to root of the application
    })
   ]
}