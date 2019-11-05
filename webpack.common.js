const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        polyfill: 'babel-polyfill',
        app: './index.tsx'
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'JQTR',
            template: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.(m?js$|jsx)/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-object-rest-spread'
                        ]
                    }
                }
            },
            {
                test: /\.scss$|\.css$/,
                use: [
                    'style-loader', // creates style nodes from JS strings
                    'css-loader', // translates CSS into CommonJS
                    'sass-loader' // compiles Sass to CSS, using Node Sass by default
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};
