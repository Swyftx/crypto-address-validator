
// builtin
var crypto = require('crypto');

// local
var base58 = require('./base58');

var address_types = {
    bitcoin: '00', 		//  0 Decimal 1 prefix
    bitcoinTestnet: '6f', 	//111 Decimal mn prefix
    litecoin: '30', 		// 48 Decimal L prefix
    litecoinTestnet: '6f',	//111 Decimal mn prefix
    peercoin: '37', 		// 55 Decimal P prefix
    peercoinTestnet: '6f', 	//111 Decimal mn prefix
    dogecoin: '1e', 		// 30 Decimal D prefix
    dogecoinTestnet: '71', 	//113 Decimal n prefix
    beavercoin: '19', 		// 25 Decimal B prefix
    beavercoinTestnet: '6f',	//111 Decimal mn prefix
    freicoin: '00', 		//  0 Decimal 1 prefix
    freicoinTestnet: '6f',	//111 Decimal mn prefix
    protoshares: '38',		// 56 Decimal P prefix
    protosharesTestnet: '6f', //111 Decimal mn prefix
    megacoin: '32',		// 50 Decimal M prefix
    megacoinTestnet: '6f',	//111 Decimal mn prefix
    primecoin: '17', 		// 23 Decimal A prefix
    primecoinTestnet: '6f',	//111 Decimal mn prefix
    auroracoin: '17',		// 23 Decimal A prefix
    auroracoinTestnet: '6f',	//111 Decimal mn prefix
    namecoin: '34'
    //namecoinTestnet: ''	//TODO
    //That's all for now, to add more just send a pull request
};

var p2sh_types = {
    bitcoin: '05', 		//  5 Decimal 3 prefix
    bitcoinTestnet: 'c4', 	//196 Decimal 2 prefix
    litecoin: '05',		//  5 Decimal 3 prefix
    litecoinTestnet: 'c4',	//196 Decimal 2 prefix
    peercoin: '75',		//117 Decimal p prefix
    peercoinTestnet: 'c4',	//196 Decimal 2 prefix
    dogecoin: '16',		//22 Decimal 9A prefix
    dogecoinTestnet: 'c4',	//196 Decimal 2 prefix
    beavercoin: '05',		//  5 Decimal 3 prefix
    beavercoinTestnet: 'c4',	//196 Decimal 2 prefix
    freicoin: '05',		//  5 Decimal 3 prefix
    freicoinTestnet: 'c4', 	//196 Decimal 2 prefix
    protoshares: '05',		//  5 Decimal 3 prefix
    protosharesTestnet: 'c4',//196 Decimal 2 prefix
    megacoin: '05',		//  5 Decimal 3 prefix
    megacoinTestnet: 'c4', 	//196 Decimal 2 prefix
    primecoin: '53',		// 83 Decimal a prefix
    primecoinTestnet: 'c4',  //196 Decimal 2 prefix
    auroracoin: '05',	 	// 83 Decimal a prefix
    auroracoinTestnet: 'c4'	//196 Decimal 2 prefix
    //namecoin: '',		//TODO
    //namecoinTestnet: ''	//TODO
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
    address_type = address_type || 'bitcoin';

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
