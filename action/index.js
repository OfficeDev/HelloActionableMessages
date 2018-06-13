var processor = require('./ActionProcessor');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.body) {

        processor.ActionProcessor.process(req.headers, req.body, function(res){
            context.res = res;
            context.done();
        }, context.log)
    }
    else {

        var fs = require('fs');
        fs.readFile(__dirname +'/instruction.html', 'utf8', function (err, data) {
            if (err) {
                context.log(err);
            }
            context.res = {
                status: 200,
                isRaw: true,
                headers: {"content-type": "text/html"},
                body: data
            };
            context.done();
        });
    }
};