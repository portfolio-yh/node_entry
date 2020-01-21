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

//jQueryの読み込み
import jQuery from 'jquery';

// ドルマークに参照を代入(慣習的な $ を使うため)
const $ = jQuery;

// テキストを取得
const text = $('#myText').text();
$('#myText')
    .empty() // 一旦、空にする
    .show(); // 表示する

const arr = text.split(''); // 一文字ずつ、配列に格納
const elements = [];

// 一文字ずつ、spanタグで包む
arr.map((str, index) => {
    elements[index] = $(`<span>${str}</span>`);
    $('#myText').append(elements[index]); // 元の場所に挿入
});

// エフェクトの適用
elements.map((element, index) => {
    element
        .delay(40 * index)
        .queue(function () {
            $(this).addClass('motion');
        });
});