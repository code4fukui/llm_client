# llm_client

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

`llm_client` is a client-side application for interacting with the [llm_server](https://github.com/code4fukui/llm_server) project, which provides a language model-based conversational interface.

## Features
- Enables console-based and web-based usage of the `llm_server`
- Provides a simple example of how to interact with the `llm_server` API
- Includes a script for testing the API with multiple requests

## Requirements
- [llm_server](https://github.com/code4fukui/llm_server) running on a local or remote server
- Deno runtime for running the console-based examples

## Usage

### Console
1. Run the [llm_server](https://github.com/code4fukui/llm_server)
2. Execute `deno run -A example.js` to see a basic example of interacting with the `llm_server`.

### Web
1. Run the [llm_server](https://github.com/code4fukui/llm_server)
2. Open `index.html` with a web server to use the web-based interface.

## Settings
- Create an `endpoint.js` file (sample provided) to specify the `llm_server` endpoint URL.

## Related
- [llm_server](https://github.com/code4fukui/llm_server)

## License
MIT License — see [LICENSE](LICENSE).