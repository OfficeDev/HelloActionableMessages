var validation = require('../outlook-actionable-messages-node-token-validation/ActionableMessageTokenValidator');

class ActionProcessor{
    static process(headers, body, cb, logFun = null){
        var auth = headers['authorization'].trim().split(' ');
        if (auth.length == 2 && auth[0].toLowerCase() == 'bearer') {
            var token = auth[1];
        }else{
            cb({
                status: 401,
                body: "Invalid auth header"
            });
            return;
        }

        var validator = new validation.ActionableMessageTokenValidator();
        
        // Set targetUrl with your service domain URL.
        // For example, if the service URL is https://api.xyz.com/finance/expense?id=1234,
        // then set it to https://api.xyz.com
        var targetUrl = null;

        // validateToken will verify the following
        // 1. The token is issued by Microsoft and its digital signature is valid.
        // 2. The token has not expired.
        // 3. The audience claim matches the service domain URL.
        validator.validateToken(
            token, 
            null,
            function (err, result) {
                if (err) {
                    logFun('error: ' + err.message);
                    cb({
                        status: 401,
                        body: err.message
                    });
                    return;
                }
                // We have a valid token. We will verify the sender and the action performer. 
                // You should replace the code below with your own validation logic.
                // In this example, we verify that the email is sent by expense@contoso.com
                // and the action performer is someone with a @contoso.com email address.
                //
                // You should also return the CARD-ACTION-STATUS header in the response.
                // The value of the header will be displayed to the user.

                var card = {
                    "@type": "MessageCard",
                    "@context": "http://schema.org/extensions",
                    "summary": "Hello " + result.actionPerformer + ". Your action email was from " + result.sender,
                    "title": "Hello " + result.actionPerformer,
                    "themeColor": "009F9C"
                }

                cb({
                    status: 200,
                    headers: {'CARD-UPDATE-IN-BODY': 'true'},
                    body: card
                })
        });

    }
}

exports.ActionProcessor = ActionProcessor;