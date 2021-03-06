# load-google-maps [![Build Status](https://travis-ci.org/bendrucker/load-google-maps.svg?branch=master)](https://travis-ci.org/bendrucker/load-google-maps) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/load-google-maps.svg)](https://greenkeeper.io/)

> Load the Google Maps JS API


## Install

```
$ npm install --save load-google-maps
```


## Usage

```js
var Google = require('load-google-maps')

Google({libraries: ['places']}, function (err, google) {
  //=> google.maps...  
})
```

## API

#### `Google([options], callback)` -> `undefined`

##### options

Type: `object`  
Default: `{}`

All supported Google options, including:

* key
* libraries (array)
* client
* version
* channel
* language
* region

##### callback

*Required*  
Type: `function`  
Arguments: `err, google`

A callback called with the Google Maps library once loaded.

## See Also

* [load-script-global](https://github.com/bendrucker/load-script-global)

## License

MIT © [Ben Drucker](http://bendrucker.me)
