# kintone/rest-api-spec

[![CI](https://github.com/kintone/rest-api-spec/actions/workflows/ci.yaml/badge.svg)](https://github.com/kintone/rest-api-spec/actions/workflows/ci.yaml)

[OpenAPI](https://www.openapis.org/) Description for the kintone REST API.

> [!WARNING]
> Experimental: This repository is still under early development.

- [Concept](#concept)
- [Usage](#usage)
  - [OpenAPI Description (OAD)](#openapi-description-oad)
  - [Website](#website)
- [Releases](#releases)
- [Limitations](#limitations)
- [License](#license)

## Concept

This repository provides the [OpenAPI](https://www.openapis.org/) Description (OAD) for the [kintone REST API](https://kintone.dev/en/docs/kintone/rest-api/).

OpenAPI is a specification for describing REST API interfaces. It is both human- and machine-readable.

It is widely supported by API-related tools and services, enabling tasks such as inspecting REST API responses using Postman or automatically generating REST API clients.

## Usage

The specification for the kintone REST API is available in two formats: OAD files (for tools) and an interactive website (for humans).

### OpenAPI Description (OAD)

OAD files are located in the `kintone/${timestamp}` directory, where `${timestamp}` represents the publication date and time.

| File | Description                                                                                               |
|---|-----------------------------------------------------------------------------------------------------------|
|`kintone/${timestamp}/openapi.yaml`| A multi-file version of the API description using the `$ref` keyword.                                        |
|`kintone/${timestamp}/bundled/openapi.yaml`| A bundled, single-file version of the API description for tools that do not support the `$ref` keyword. |

### Website

We host an interactive website that provides the API specification at:
**https://kintone.github.io/rest-api-spec/**

You can browse the list of kintone REST APIs, view their request and response formats, and try out API calls by setting an authorization header.

## Releases

- The version for the following month will be released in the middle of each month.
- Outdated versions may be removed periodically.

## Limitations

- The API interface is based on the kintone REST API in the [Current Channel](https://jp.cybozu.help/k/en/admin/new_feature/new_feature_overview.html#new_feature_new_feature_overview_10), with all [Update Options](https://jp.cybozu.help/k/en/admin/new_feature/new_feature_overview.html) checkboxes left unchecked.

## License

- [Apache 2.0](LICENSE)
