# kintone/rest-api-spec

[![CI](https://github.com/kintone/rest-api-spec/actions/workflows/ci.yaml/badge.svg)](https://github.com/kintone/rest-api-spec/actions/workflows/ci.yaml)

[OpenAPI](https://www.openapis.org/) Description for kintone REST API

## Concept

This repository provides [OpenAPI](https://www.openapis.org/) Description (OAD) for [kintone REST API](https://kintone.dev/en/docs/kintone/rest-api/).

OpenAPI is a standard for defining API interfaces, which is easy to understand for both humans and computers.

OpenAPI is widely supported by API related services and tools to make your API experience better, for example inspecting API using Postman, automatically generate API clients, etc.

## Usage

We provide our API specification in two formats, OAD files for computers and website for humans.

### OpenAPI Description (OAD)

OAD files can be found in the `kintone/${timestamp}` directory. The `${timestamp}` is the date and time of publication.

### Website

We host interactive API specification at https://stunning-adventure-6kmjr8r.pages.github.io/ .

You can browse the list of kintone REST APIs, API Request and Responses. You can also try calling APIs By setting authorization header.

## Releases

- The version for the next month will be released mid-month.
- Versions that are outdated will be removed.

## Limitations

- The interface is based on the kintone REST API in [Current Channel](https://jp.cybozu.help/k/en/admin/new_feature/new_feature_overview.html#new_feature_new_feature_overview_10) with all [Update Options](https://jp.cybozu.help/k/en/admin/new_feature/new_feature_overview.html) unselected.
## License

- [Apache 2.0](LICENSE)
