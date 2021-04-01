const webpack = require('webpack')
const MiniCssExtractOlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './src/principal.js', 
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    plugins: [
        new MiniCssExtractOlugin({
            filename: "estilo.css"
        })
    ],
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractOlugin.loader,
                //'style-loader',
                'css-loader',
                'sass-loader',
            ]
        }]
    }
}