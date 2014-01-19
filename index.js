
// builtin
var crypto = require('crypto');

// local
var base58 = require('./base58');

var address_types = {
    prod: '00',
    testnet: '6f'
};

var p2sh_types = {
    prod: '05',
    testnet: 'c4'
};

/// return address type if valid base58 address, otherwise null
function get_address_type(address) {
    try {
        var decoded_hex = base58.decode(address);
    } catch (e) {
        // if decoding fails, assume invalid address
        return null;
    }

    // make a usable buffer from the decoded data
    var decoded = new Buffer(decoded_hex, 'hex');

    // should be 25 bytes per btc address spec
    if (decoded.length != 25) {
        return null;
    }

    var length = decoded.length;
    var cksum = decoded.slice(length - 4, length).toString('binary');
    var body = decoded.slice(0, length - 4);

    var good_cksum = sha256_digest(sha256_digest(body)).substr(0,4);
    return (cksum === good_cksum ? decoded_hex.slice(0, 2) : null);
}

module.exports.get_address_type = get_address_type;

/// check if a wallet address is valid
/// if address_type is supplied
/// also checks that the address matches that expected version
/// return {boolean} true if valid, false otherwise
function validate(address, address_type) {
    // default is to check that address is regular production address
    address_type = address_type || 'prod';

    var type = get_address_type(address);
    if (type === null) {
        return false;
    }

    if (type !== address_types[address_type] &&
        type !== p2sh_types[address_type]) {
        return false;
    }

    return true;
}

module.exports.validate = validate;

/// private methods

// helper to perform sha256 digest
function sha256_digest(payload) {
    return crypto.createHash('sha256').update(payload).digest('binary');
}
