const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

module.exports = [
    new ForkTsCheckerWebpackPlugin(),
    new webpack.LoaderOptionsPlugin({
        options: {
            jest: {
                moduleFileExtensions: ["ts", "tsx"],
                moduleDirectories: ["node_modules", "bower_components", "shared"],
                moduleNameMapper: {
                  "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
                  "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js"
                },
                transform: {
                  "\\.[jt]sx?$": "ts-jest",
                }
              } 
        }
    })
];
