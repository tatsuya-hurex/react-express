import React from "react";
//Todo: css ファイル (BookList.css) のインポートを行う。

export default class BookList extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            books:[
                {title:"坊っちゃん", author:"夏目漱石", overview:"ぼっちゃんが先生になって頑張ったけど結局ダメでした。"}
                ,{title:"吾輩は猫である", author:"夏目漱石", overview:"吾輩は猫ですが失恋してから人間の前足の使い方が不思議に思えました。"}
                ,{title:"走れメロス", author:"太宰治", overview:"激怒して走ったら結構速かったので友人と殴り合いました。"}
                ] ,
        }
    }
    render(){
        const { books } = this.state;
        return (
        <div>
            <div className="bookListMain">
                <div className="bookListHeader">
                    ここに新規追加を予定
                    <button>追加</button>
                </div>
                <div className="bookListBody">
                    <table>
                        <tr>
                            <th>タイトル</th>
                            <th>著者</th>
                            <th>概要</th>
                            <th>操作</th>
                        </tr>
                        {books.map((book,index) => 
                        <tr class="bookrow">
                            {{/* Todo:ここに表示したい内容を記述 */ }}
                            <td class="action">
                            <button>編集</button>
                            <button>削除</button>
                            </td>
                        </tr>
                    )}
                    </table>
                </div>
            </div>
        </div>
        );
    }
}