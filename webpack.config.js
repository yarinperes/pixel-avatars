// @ts-check

import { StylableWebpackPlugin } from '@stylable/webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

/** @type {import('webpack').Configuration} */
export default {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true,
                },
            },
            {
                test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2)$/,
                type: 'asset',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json'],
    },
    plugins: [
        new StylableWebpackPlugin({ stcConfig: true }),
        new HtmlWebpackPlugin({ title: 'Avatar Generator' }),
    ],
    cache: { type: 'filesystem' },
};
