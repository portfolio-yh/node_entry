module.exports = {
    // webpack.config.jsファイルを用意することで、webpackの挙動を調整できます。
    // よく使う設定として、エントリーポイントを指定するentryと、出力フォルダーをカスタマイズするoutputがあります。
    // 必須ではないもの、よく使うオプションのため必ずおさえておきましょう。次のように指定します。

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.js`,

    // ファイルの出力設定
    output: {
        //  出力ファイルのディレクトリ名
        path: `${__dirname}/dist`,
        // 出力ファイル名
        filename: "main.js"
    },
    // モード値を production に設定すると最適化された状態で、
    // development に設定するとソースマップ有効でJSファイルが出力される
    mode: "development",

    // ローカル開発用環境を立ち上げる
    // 実行時にブラウザが自動的に localhost を開く
    // npm run startで起動
    devServer: {
        contentBase: "dist",
        open: true
    }





};