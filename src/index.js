// //npmを使ってインストール
// npm i -D webpack webpack-cli
//
// i  ⇒ installの略
// -D ⇒ インストール先をdevDependenciesにするための指定

// import 文を使って sub.js ファイルを読み込む。
import { hello } from "./sub";
hello();

//require(node.js)を使って sub.js ファイルを読み込む。
// const item = require('./sub.js');
// item.hello();