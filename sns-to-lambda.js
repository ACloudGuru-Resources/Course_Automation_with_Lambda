const AWS = require('aws-sdk')
const SNS = new AWS.SNS()
AWS.config.update({region: 'us-east-1'});

module.exports = {
    handler: function (event, context) {
        return new Promise((resolve, reject) => {
            console.log(event)
            console.log(event.Records.map((record) => {
                console.log(record.Sns.Message)
                return record.Sns.Message * 2
            }))
            return resolve()
        })
    }
}
