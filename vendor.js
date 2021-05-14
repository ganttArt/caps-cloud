'use strict';
const uuid = require('uuid').v4;
const { Producer } = require('sqs-producer');
const faker = require('faker');

const producer = Producer.create({
  queueUrl: `https://sqs.us-west-1.amazonaws.com/911954577811/vendor1`,
  region: `us-west-1`,
});

setInterval(async () => {
  let id = uuid();
  let customer = faker.name.findName();
  try {
    const message = {
      id: id,
      body: `{orderId: ${id}, customer: "${customer}", vendorId: arn:aws:sqs:us-west-1:911954577811:vendor1}`,
    };

    const response = await producer.send(message);
    console.log(response);
  } catch (e) {
    console.error(e);
  }
}, Math.floor(Math.random() * 1000));

