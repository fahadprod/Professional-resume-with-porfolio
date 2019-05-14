const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: [`${__dirname}/src/index.jsx`,`${__dirname}/src/style.scss`],
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    watch: true,

    module:{
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react'],
                        plugins: [
                            "transform-class-properties",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            },
            {
                test: /\.jsx$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env',"react"],
                        plugins: [
                            "transform-class-properties",
                            "transform-object-rest-spread"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use:ExtractTextPlugin.extract({
                    use: {
                        loader: "css-loader",
                        options: {
                            url:false,
                        }
                    }
                })
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use:
                    [
                        {
                            loader: "css-loader",
                            options: {
                                    url:false,
                                },
                        },
                        {
                            loader: "sass-loader",
                            
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
        filename: './css/style.css',
        })
    ], 
}