# crypto-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

Forked from [ognus/wallet-address-validator](https://github.com/ognus/wallet-address-validator) which was forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

Did you know? This package is under active development by Swyftx. Swyftx allows you to buy and sell Bitcoin, Etherium, Ripple and many more assets using Australian Dollars. [Buy Bitcoin in Australia](https://swyftx.com.au)

**File size is ~{{minGzSize}} (minifed and gzipped - ~{{minGzReduction}}% smaller)**.

## Installation

### NPM
```
npm install wallet-address-validator
```

### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod' [, addressType = ['all']]])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.
* addressType - Optional. Specifies what version of the address should be validated. Defaults to `'legacy'`, but can be changed on a per asset basis.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Supported crypto currencies

{{supportedAssets}}

### Usage example

#### Node
```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC');
if(valid)
	console.log('This is a valid address');
else
	console.log('Address INVALID');

// This will log 'This is a valid address' to the console.
```

```javascript
var WAValidator = require('wallet-address-validator');

var valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet');
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
