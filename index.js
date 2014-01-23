
// builtin
var crypto = require('crypto');

// local
var base58 = require('./base58');

var address_types = {
    bitcoin: '00', 		//  0 Decimal 1 prefix
    bitcoin-testnet: '6f', 	//111 Decimal m-n prefix
    litecoin: '30', 		// 48 Decimal L prefix
    litecoin-testnet: '6f' 	//111 Decimal m-n prefix
    peercoin: '37', 		// 55 Decimal P prefix
    peercoin-testnet: '6f' 	//111 Decimal m-n prefix
    dogecoin: '1e', 		// 30 Decimal D prefix
    dogecoin-testnet: '71' 	//113 Decimal n prefix
    freicoin: '00', 		//  0 Decimal 1 prefix
    freicoin-testnet: '6f'	//111 Decimal m-n prefix
    protoshares: '38',		// 56 Decimal P prefix
    protoshares-testnet: '6f' //111 Decimal m-n prefix
    megacoin: '32',		// 50 Decimal M prefix
    megacoin-testnet: '6f',	//111 Decimal m-n prefix
    primecoin: '17', 		// 23 Decimal A prefix
    primecoin-testnet: '6f',	//111 Decimal m-n prefix
    feathercoin: '0E' 		// 14 Decimal 5-6 prefix
    feathercoin-testnet: '6f' //111 Decimal m-n prefix
    //That's all for now, to add more just send a pull request
};

var p2sh_types = {
    bitcoin: '05', 		//  5 Decimal 3 prefix
    bitcoin-testnet: 'c4', 	//196 Decimal 2 prefix
    litecoin: '05',		//  5 Decimal 3 prefix
    litecoin-testnet: 'c4',	//196 Decimal 2 prefix
    peercoin: '75',		//117 Decimal p prefix
    peercoin-testnet: 'c4',	//196 Decimal 2 prefix
    dogecoin: '16',		//22 Decimal 9-A prefix
    dogecoin-testnet: 'c4',	//196 Decimal 2 prefix
    freicoin: '05',		//  5 Decimal 3 prefix
    freicoin-testnet: 'c4', 	//196 Decimal 2 prefix
    protoshares: '05',		//  5 Decimal 3 prefix
    protoshares-testnet: 'c4',//196 Decimal 2 prefix
    megacoin: '05',		//  5 Decimal 3 prefix
    megacoin-testnet: 'c4', 	//196 Decimal 2 prefix
    primecoin: '53',		// 83 Decimal a prefix
    primecoin-testnet: 'c4',  //196 Decimal 2 prefix
    feathercoin: '05',		//  5 Decimal 3 prefix
    feathercoin-testnet: 'c4' //196 Decimal 2 prefix
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
    address_type = address_type || 'btc';

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
