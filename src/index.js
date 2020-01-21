// //npmを使ってインストール
// npm i -D webpack webpack-cli
//
// i  ⇒ installの略
// -D ⇒ インストール先をdevDependenciesにするための指定

// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";

// sub.jsに定義されたJavaScriptを実行する。
hello();