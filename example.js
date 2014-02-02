var http = require('http');
var HypermediaType = require('./');

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
