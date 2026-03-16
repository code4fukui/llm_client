# llm_client

LLM (Large Language Model) サーバー `llm_server` のクライアントアプリケーションです。このクライアントを使うことで、コマンドラインやウェブブラウザからLLMサーバーと対話することができます。

## 機能
- LLMサーバーに対してリクエストを送信し、レスポンスを表示する
- コマンドラインからの使用にも対応

## 必要環境
- [llm_server](https://github.com/code4fukui/llm_server)の起動

## 使い方

### コマンドラインから
1. [llm_server](https://github.com/code4fukui/llm_server)を起動する
2. `deno run -A example.js`を実行する

### Webから
1. [llm_server](https://github.com/code4fukui/llm_server)を起動する
2. `index.html`をウェブサーバーで開く

## 設定
- `endpoint.js`を作成し、LLMサーバーのURLを設定する

## 関連リポジトリ
- [llm_server](https://github.com/code4fukui/llm_server)

## ライセンス
このプロジェクトはMITライセンスのもとで公開されています。