'use strict';

const { Consumer } = require('sqs-consumer');
 
const app = Consumer.create({
  queueUrl: 'https://sqs.us-west-1.amazonaws.com/911954577811/vendor1',
  handleMessage: async (message) => {
    console.log(message.Body);
  }
});

app.start();