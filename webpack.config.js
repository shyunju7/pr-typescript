const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx", // 진입점
  output: {
    // 출력
    filename: "[hash].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
    clean: true,
  },
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
  },
};
