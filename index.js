var http = require("https");

const yourProjectId = 'edce70cf886345f98cfbb7b5eae20f6d';

var options = {
  host: 'kovan.infura.io',
  port: 443,
  path: `/v3/${yourProjectId}`,
  method: 'POST'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.setHeader('Content-Type', 'application/json');
req.write('{"jsonrpc": "2.0", "id": 1, "method": "eth_blockNumber", "params": []}');
req.end();
