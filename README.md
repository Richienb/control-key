# Control key [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/control-key/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/control-key)

Get the control key based on the current platform.

[![NPM Badge](https://nodei.co/npm/control-key.png)](https://npmjs.com/package/control-key)

## Install

```sh
npm install control-key
```

## Usage

```js
const controlKey = require("control-key")

const shortcut = `${controlKey()} + shift + t`
```

## API

### currentKey()
