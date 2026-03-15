# llm_client

LLM (Large Language Model) サーバー `llm_server` のクライアントです。

## デモ
ブラウザでのデモは[こちら](https://code4fukui.github.io/llm_client/)。

## 機能
- LLMサーバーへのリクエストを行い、レスポンスを表示する
- コマンドラインからの使用も可能

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

- `endpoint.js`を作成する (サンプル)
```js
export const endpoint = "http://[::1]:5050/";
```

## 関連リポジトリ
- [llm_server](https://github.com/code4fukui/llm_server)