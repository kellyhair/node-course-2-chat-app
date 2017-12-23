const expect = require('expect');
const {generateMessage,generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Jen';
    var text = 'Some message';
    var message = generateMessage(from, text);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, text});
  });

});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = "Deb";
    var latitude = 10;
    var longitude = 20;
    var url = "https://www.google.com/maps?q=10,20";
    var message = generateLocationMessage(from, latitude, longitude);

    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from, url});
  });

});
