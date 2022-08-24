const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");

// Defining usesfull variables
// Get the directory of the app
const appDirectory = __dirname;

// // Function for getting absolute path
// const resolveAppPath = relativePath => path.resolve(appDirectory, relativePath);

// // Enviroment host name
// const host = process.env.HOST || "localhost";

// Required for babel-preset-react-app
process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.join(appDirectory, "public"),
    filename: "bundle.min.js",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ["ts-loader"],
        exclude: /node_modules/,
      },
      {
        test: /\.jsx?$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
        include: path.join(appDirectory, "src"),
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.less$|\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
};