import { fileURLToPath } from "url";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const production = process.env.NODE_ENV === "production";

export default {
  mode: production ? "production" : "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: production
      ? "assets/js/[name].[contenthash:8].js"
      : "assets/js/[name].js",
    assetModuleFilename: "assets/media/[name].[hash][ext][query]",
    clean: true,
  },
  devtool: production ? "source-map" : "eval-cheap-module-source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    hot: true,
    port: 5173,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
          },
        },
      },
      {
        test: /\.(css|scss|sass)$/,
        use: [
          production ? MiniCssExtractPlugin.loader : "style-loader",
          {
            loader: "css-loader",
            options: { importLoaders: 2, sourceMap: !production },
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: { plugins: ["autoprefixer"] },
              sourceMap: !production,
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: !production },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: { maxSize: 8 * 1024 },
        },
      },
      {
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      inject: "body",
      minify: production
        ? {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
          }
        : false,
    }),
    ...(production
      ? [
          new MiniCssExtractPlugin({
            filename: "assets/css/[name].[contenthash:8].css",
          }),
        ]
      : []),
  ],
  optimization: {
    splitChunks: { chunks: "all" },
    runtimeChunk: "single",
  },
  resolve: {
    extensions: [".js"],
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
};
