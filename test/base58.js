var decode = require('../base58').decode;
var assert = require('assert');

test('base58', function() {
    assert.ok(decode('1') === '00');
    assert.ok(decode('11') === '0000');
    assert.ok(decode('1Kbn7siQHhtKRM7PsK5D6rBpgaKbHSjEiz') ===
              '00cc0611e210e0796e092d82437be17cb0dda66aaf6b7043f7');
});
