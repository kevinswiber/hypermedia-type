# hypermedia-type

A Node.js module for finding IANA registered names for common hypermedia types.

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

## License

MIT
