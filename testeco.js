var http = require('http');
function getLoginDetails(callback) {
return http.get({
        host: 'https://restapi.e-conomic.com',
        path: '/customers'
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
// Data received, let us parse it using JSON!
            var parsed = JSON.parse(body);
            callback({
                userDetail: parsed.name,
                userId: parsed.Id
            });
        });
    });
}
getLoginDetails();
