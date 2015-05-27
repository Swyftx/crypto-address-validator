# wallet-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**. 

Forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

I forked it to remove all Node.js dependencies (crypro, Buffer etc.) to make it usable in the browser as well. I didn't use browserify to achieve smaller footprint, **file size is 3.9 kB (minifed and gzipped)**.

## Installation

### Node
```
npm install wallet-address-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

#### Using bower
```
bower install wallet-address-validator
```


## API

### validate (address [, currency])

> returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.
>
> if no options are specified it defaults to bitcoin

### getAddressType (address)

> returns address type (as 2 character hex string) if valid base58 address, otherwise null

### Supported crypto currencies

* Bitcoin/BTC, `'bitcoin'`
* Litecoin/LTC, `'litecoin'`
* Peercoin/PPCoin/PPC, `'peercoin'`
* Dogecoin/DOGE, `'dogecoin'`
* BeaverCoin/BVC, `'beavercoin'`
* Freicoin/FRC, `'freicoin'`
* Protoshares/PTS, `'protoshares'`
* Megacoin/MEC, `'megacoin'`
* Primecoin/XPM, `'primecoin'`
* Auroracoin/AUR, `'auroracoin'`
* Namecoin/NMC, `'namecoin'`

### Usage example

#### Node
```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoinTestnet');
if(valid)
      console.log('This is a valid address');
else
      console.log('Address INVALID');

// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin');
if(valid)
    alert('This is a valid address');
else
    alert('Address INVALID');

// This should show a pop up with text 'This is a valid address'.
```
