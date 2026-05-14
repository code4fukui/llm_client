# llm_client

言語モデルベースの対話型APIである[llm_server](https://github.com/code4fukui/llm_server)と対話するためのクライアントサイドアプリケーションです。本リポジトリでは、Webインターフェースとコマンドラインツールの両方を提供します。

## 機能

-   **シンプルなWebインターフェース**: 基本的なHTMLページ (`index.html`) を使用して、ブラウザから直接プロンプトを送信し、応答を表示できます。
-   **コンソールスクリプト**: コマンドラインからサーバーと対話するためのDenoベースのスクリプトです。
-   **単一プロンプトの例**: `example.js` は基本的なAPI呼び出しの例を示しています。
-   **バッチリクエストテスト**: `many_request_test.js` は、外部のCSVファイルから取得したデータを使用して、サーバーに複数のリクエストを並行して送信する方法を示しています。
-   **設定可能なエンドポイント**: `endpoint.js` ファイルを作成することで、接続先の `llm_server` のURLを簡単に変更できます。

## 必要条件

-   実行中の [llm_server](https://github.com/code4fukui/llm_server) インスタンス。
-   [Deno](https://deno.land/) ランタイム（コンソールスクリプトの実行用）。
-   ローカルWebサーバー（Webインターフェースの利用用）。

## セットアップ

`http://localhost:5050/` 以外で実行されている `llm_server` インスタンスに接続するには、ルートディレクトリに以下の内容で `endpoint.js` という名前のファイルを作成し、URLをサーバーのアドレスに置き換えてください。

```javascript
export const endpoint = "http://your-llm-server-url:port/";
```

このファイルはGitの管理対象外となります。このファイルが存在しない場合、クライアントはデフォルトで `http://localhost:5050/` を使用します。

## 使い方

まず、[llm_server](https://github.com/code4fukui/llm_server) が実行されていることを確認してください。

### Webインターフェース

1.  Webサーバーを使用してプロジェクトディレクトリをホストします。Denoを使用する場合の簡単な方法は以下の通りです。
    ```sh
    deno run -A https://deno.land/std/http/file_server.ts .
    ```
2.  Webブラウザで `index.html` を開きます（例: `http://localhost:8000`）。
3.  入力フィールドにプロンプトを入力し、「send」をクリックしてモデルと対話します。

### コンソールスクリプト

#### 基本的な例

ハードコードされた単一のプロンプトを送信し、コンソールに応答を出力するには、以下を実行します。

```sh
deno run -A example.js
```

#### バッチリクエストテスト

このスクリプトは、リモートのCSVから観光地名を取得し、それぞれに対してプロンプトを生成してAPIに並行送信し、各応答を `log/` ディレクトリに保存します。

```sh
deno run -A many_request_test.js
```

## 関連プロジェクト

-   [llm_server](https://github.com/code4fukui/llm_server): このクライアントが接続するサーバーサイドアプリケーション。

## ライセンス

[MIT](LICENSE)
