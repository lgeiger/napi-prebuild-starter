# N-API Prebuild Starter

[![Build Status](https://dev.azure.com/lgeiger/napi-prebuild-starter/_apis/build/status/lgeiger.napi-prebuild-starter)](https://dev.azure.com/lgeiger/napi-prebuild-starter/_build/latest?definitionId=1)

This is a small sample repository that uses [`prebuildify`](https://github.com/mafintosh/prebuildify) and [Azure Pipelines](https://azure.microsoft.com/en-us/services/devops/pipelines/) to automatically build and publish a fully contained N-API hello world app.

It can be installed without the need for setting up a complete [`node-gyp`](https://github.com/nodejs/node-gyp) build toolchain. It ships with prebuilt binaries for the following platforms:
- Windows (`x64` and `ia32`) 
- macOS (`x64`)
- Linux (`x64`, `ARM` and `ARM64`)

Install it just like any other `npm` module not containing any native C++ code:
```shell
npm i @lgeiger/napi-prebuild-starter
```

## Further reading:
- https://www.nearform.com/blog/the-future-of-native-modules-in-node-js/
- https://github.com/mafintosh/prebuildify
- https://azure.microsoft.com/en-us/services/devops/pipelines/
- https://nodejs.org/api/n-api.html
- https://github.com/nodejs/node-addon-examples/tree/master/1_hello_world
- https://github.com/nodejs/node-addon-api
