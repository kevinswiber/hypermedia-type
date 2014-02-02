# hypermedia-type

A Node.js module for finding IANA registered names for common hypermedia types.

See also:

* [`data-media-type`](https://github.com/kevinswiber/data-media-type) - contains common data media types (JSON, XML, x-form-urlencoded, etc.)
* [`api-media-type`](https://github.com/kevinswiber/api-media-type) - combines data-media-type and hypermedia-type

## Install

`$ npm install hypermedia-type`

## Usage

```javascript
var http = require('http');
var HypermediaType = require('hypermedia-type');

http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', HypermediaType.SIREN);

  var entity = {
    class: [ 'order' ],
    properties: { 
        orderNumber: 42, 
        itemCount: 3,
        status: 'pending'
    },
    links: [
      { rel: [ 'self' ], href: 'http://api.x.io/orders/42' },
      { rel: [ 'next' ], href: 'http://api.x.io/orders/43' }
    ]
  };

  res.end(JSON.stringify(entity));
}).listen(1337);
```

## Supported Media Types

* `HypermediaType.ATOM` => application/atom+xml
* `HypermediaType.COLLECTION` => application/vnd.collection+json
* `HypermediaType.HAL` => application/hal+json
* `HypermediaType.HAL_XML` => application/hal+xml
* `HypermediaType.HTML` => text/html
* `HypermediaType.JSON_LD` => application/ld+json
* `HypermediaType.SIREN` => application/vnd.siren+json
* `HypermediaType.XHTML` => application/xhtml+xml



## License

MIT
