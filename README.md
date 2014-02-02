# hypermedia-types

A Node.js module for finding IANA registered named for common hypermedia types.

## Install

`$ npm install hypermedia-types`

## Usage

```javascript
var http = require('http');
var HypermediaTypes = require('hypermedia-types');

http.createServer(function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', HypermediaTypes.SIREN);

  var entity = {
    "class": [ "order" ],
    "properties": { 
        "orderNumber": 42, 
        "itemCount": 3,
        "status": "pending"
    },
    "links": [
      { "rel": [ "self" ], "href": "http://api.x.io/orders/42" },
      { "rel": [ "next" ], "href": "http://api.x.io/orders/43" }
    ]
  };

  res.end(entity);
}).listen(1337);
```

## License

MIT
