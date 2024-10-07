const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // ลบไฟล์เก่าใน dist
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.css$/, // ตรวจสอบไฟล์ CSS
        use: ['style-loader', 'css-loader'], // ใช้ style-loader และ css-loader
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
