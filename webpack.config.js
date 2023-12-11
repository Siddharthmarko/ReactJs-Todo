// "build": "react-scripts build --publicPath=./src"
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
    // template: './src/index.html',
    template: './public/index.html', // Public folder mein index.html hai
    filename: './index.html',
    // publicPath: './src',
});

module.exports = {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/', // Assets ko root se serve karne ke liye
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }, 
 },
  {
    test: /\.css$/,
        use: ['style-loader', 'css-loader']
}
]},
plugins: [htmlPlugin]
};