# llm_client

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A client-side application for interacting with the [llm_server](https://github.com/code4fukui/llm_server), a language model-based conversational API. This repository provides both a web interface and command-line tools.

## Features

-   **Simple Web Interface**: A basic HTML page (`index.html`) for sending prompts and viewing responses directly in your browser.
-   **Console Scripts**: Deno-based scripts for interacting with the server from the command line.
-   **Single Prompt Example**: `example.js` demonstrates a fundamental API call.
-   **Batch Request Testing**: `many_request_test.js` shows how to send multiple, concurrent requests to the server, using data fetched from an external CSV file.
-   **Configurable Endpoint**: Easily change the target `llm_server` URL by creating an `endpoint.js` file.

## Requirements

-   A running instance of [llm_server](https://github.com/code4fukui/llm_server).
-   [Deno](https://deno.land/) runtime (for running the console scripts).
-   A local web server (for using the web interface).

## Setup

To connect to an `llm_server` instance not running on `http://localhost:5050/`, create a file named `endpoint.js` in the root directory with the following content, replacing the URL with your server's address:

```javascript
export const endpoint = "http://your-llm-server-url:port/";
```

This file is ignored by Git. If it doesn't exist, the client will default to `http://localhost:5050/`.

## Usage

First, ensure your [llm_server](https://github.com/code4fukui/llm_server) is running.

### Web Interface

1.  Serve the project directory using a web server. A simple option using Deno is:
    ```sh
    deno run -A https://deno.land/std/http/file_server.ts .
    ```
2.  Open `index.html` in your web browser (e.g., `http://localhost:8000`).
3.  Type a prompt into the input field and click "send" to interact with the model.

### Console Scripts

#### Basic Example

To send a single, hardcoded prompt and print the response to the console, run:

```sh
deno run -A example.js
```

#### Batch Request Test

This script fetches tourist spot names from a remote CSV, generates a prompt for each, sends them concurrently to the API, and saves each response to the `log/` directory.

```sh
deno run -A many_request_test.js
```

## Related Projects

-   [llm_server](https://github.com/code4fukui/llm_server): The server-side application that this client connects to.

## License

[MIT](LICENSE)