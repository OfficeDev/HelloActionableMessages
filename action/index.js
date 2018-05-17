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
        context.res = {
            status: 400,
            body: "Invalid request"
        };
        context.done();
    }
};