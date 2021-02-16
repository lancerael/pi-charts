import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

export default {
  entry: path.resolve(__dirname, 'src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'pi-c.min.js',
    library: 'pic',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      title: 'pi-charts',
      template: './demo/index.html',
      minify: false
    })
  ],
  mode: 'production',
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    hot: true
  }
}
