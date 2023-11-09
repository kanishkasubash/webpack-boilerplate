const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // Set to mode wether "development" or "production"
    entry: {
        bundle: path.resolve(__dirname, 'src/indx.js'), // Entry point of your application
    },
    output: {
        path: path.resolve(__dirname, 'dist'), // Output directory
        filename: '[name][contenthash].js', // Output bundle filename
        clean: true,
        assetModuleFilename: 'assets/[name][ext]',
    },
    module: {
        rules: [
            {
                test: /\.s?css$/i, // Match CSS, SCSS files
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'], // Use for CSS file per JS file which contains CSS
            },
            {
                test: /\.js$/, // Match .js files
                exclude: /node_modules/, // Exclude node_modules
                use: {
                    loader: 'babel-loader', // Use Babel for JavaScript files
                    options: {
                        presets: [
                            '@babel/preset-env'
                        ],
                    },
                },
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
                type: 'asset/resource',
            },
        ],
    },
    resolve: {
        extensions: ['.js'], // Allow importing .js files without specifying the extension
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: './favicon.ico',
            title: 'Webpack Starter Template',            
            filename: 'index.html',
            template: './index.html',
        }),
    ],
    devtool: 'source-map', // Source maps for debugging
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'), // Serve content from the 'dist' directory
        },
        port: 3000, // Port for development server
        open: true, // Open in web browser
        hot: true, // Enable webpack's Hot Module Replacement feature
        compress: true,
        historyApiFallback: true,        
    },
};
