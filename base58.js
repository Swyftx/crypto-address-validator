
// 3rd party
var int = require('int');

// prep position lookup table
var vals = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
var positions = {};
for (var i=0 ; i < vals.length ; ++i) {
    positions[vals[i]] = i;
}

/// decode a base58 string payload into a hex representation
function decode(payload) {
    var base = 58;

    var length = payload.length;
    var num = int(0);
    var leading_zero = 0;
    var seen_other = false;
    for (var i=0; i<length ; ++i) {
        var char = payload[i];
        var p = positions[char];

        // if we encounter an invalid character, decoding fails
        if (p === undefined) {
            throw new Error('invalid base58 string: ' + payload);
        }

        num = num.mul(base).add(p);

        if (char == '1' && !seen_other) {
            ++leading_zero;
        }
        else {
            seen_other = true;
        }
    }

    var hex = num.toString(16);

    // num.toString(16) does not have leading 0
    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }

    // strings starting with only ones need to be adjusted
    // e.g. '1' should map to '00' and not '0000'
    if (leading_zero && !seen_other) {
      --leading_zero;
    }

    while (leading_zero-- > 0) {
        hex = '00' + hex;
    }

    return hex;
}

module.exports.decode = decode;
