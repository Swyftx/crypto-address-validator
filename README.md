# altcoin-address #
Functions for working with altcoin addresses, forked from defunctzombie

## API ##

### validate (address [, type]) ###

> returns true if the address (string) is a valid altcoin address for the type specified
>
> if no options are specified it defaults to bitcoin

### get_address_type (address) ###

> returns address type if valid base58 address, otherwise null

### Address types ###

* BTC  (bitcoin)
* LTC  (litecoin)
* PPC  (peercoin)
* DOGE (dogecoin)
* FRC  (freicoin)
* PTS  (protoshares)
* MEC  (megacoin)
* XPM  (primecoin)

I intend to update this to include more currencies in the future. If you would like a new currency added quickly please send a pull request including tests.

>This will work for both BIP-0016 P2SH addresses and regular addresses.
>
>To check the validity of a testnet address for any of the listed coins just append 'Testnet'

### Example

```javascript
var altcoin = require('altcoin-address');

var valid = altcoin.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');


//This should return that 'This is a valid address'
```

```javascript
var altcoin = require('altcoin-address');

var valid = altcoin.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoinTestnet');
if(valid)
      console.log('This is a valid address');
else
      console.log('Address INVALID');


//As this is a invalid litecoin address response will be 'Address INVALID'
```

###Donations

If you've found this useful feel free to send me a tip
>1E3s7YjGVWrnhxTYkjkBKtTX3c673CCm3w
