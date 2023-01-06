const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|svg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'build'),
        clean: true,
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Blank App',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.posix.join(
                        path.resolve(__dirname, 'assets').replace(/\\/g, '/'),
                        '*'
                    ),
                    to: path.resolve(__dirname, 'build'),
                }
            ]
        })
    ],
    devServer: {
        static: path.join(__dirname, 'build'),
        compress: true,
        port: 4000,
    },
};