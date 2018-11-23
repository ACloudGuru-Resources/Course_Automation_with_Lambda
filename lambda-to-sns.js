const AWS = require('aws-sdk')
const SNS = new AWS.SNS()
AWS.config.update({region: 'us-east-1'});

module.exports = {
    handler: function (event, context) {
        return new Promise((resolve, reject) => {
            SNS.publish({
                Message: "6",
                TopicArn: 'arn:aws:sns:us-east-1:712800520113:2018-11-11'
            }, function(error, success) {
                if (error) {
                    reject(error)
                }
                return resolve(success)
            })
        })
    }
}
