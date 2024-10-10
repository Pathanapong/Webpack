const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   // กำหนดหลาย entry points
   entry: {
    login: './src/login.js',
    index: './src/index.js'
  },
  output: {
    // ใช้ [name] เพื่อให้ Webpack ตั้งชื่อไฟล์ตาม entry point
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  mode: 'production',
  module: {
    rules: [
      // กฎสำหรับไฟล์ CSS
      {
        test: /\.css$/, // จับเฉพาะไฟล์ .css
        use: ['style-loader', 'css-loader'], // ใช้ style-loader และ css-loader
      },
      // กฎสำหรับไฟล์ SCSS
      {
        test: /\.scss$/, // จับเฉพาะไฟล์ .scss
        use: ['style-loader', 'css-loader', 'sass-loader'], // ใช้ style-loader, css-loader, และ sass-loader
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // ใช้ไฟล์ HTML ที่เราเพิ่งสร้าง
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
    open: true,
  },
};
