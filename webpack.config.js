//const UglifyEsPlugin = require('uglify-es-webpack-plugin');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "main.js",
        //sourceMapFilename: "test.js",
    },

    //監視の有効化
    //watch: true,


    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    //mode: "production",
    //mode: "development",


    //圧縮設定(本番ではコメントアウト)
    optimization: {
        minimize: false,
        // minimizer: [new TerserPlugin({
        //     terserOptions: {
        //         ecma: 6,
        //         compress: true,
        //         output: {
        //             comments: false,
        //             beautify: false
        //         }
        //     }
        // })]
    },


    // //ソースマップは、トランスパイル後と前のコードの内容を紐付けしてデバッグしやするするもの。
    devtool: 'inline-source-map',

    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    devServer: {
        contentBase: "dist",
        open: true
    },


    module: {
        rules: [
            {
                // 拡張子 .js の場合
                test: /\.js$/,
                use: [
                    {
                        // Babel を利用する
                        loader: "babel-loader",
                        // Babel のオプションを指定する
                        options: {
                            // プリセットを指定することで、ES2019 を ES5 に変換
                            presets: ["@babel/preset-env"]
                            //presets: [['@babel/preset-env', { modules: false }]]

                        }
                    }
                ]
            }
        ]
    }
};