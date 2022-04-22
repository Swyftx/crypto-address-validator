# @@ramp-network/crypto-address-validator
Simple wallet address validator for multiple cryptocurrencies working in Node.js and the browser.

Forked from [Swyftx/crypto-address-validator](https://github.com/Swyftx/crypto-address-validator) which was forked from [ognus/wallet-address-validator](https://github.com/ognus/wallet-address-validator) which was forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

## Installation

#### Yarn
```bash
yarn add @ramp-network/crypto-address-validator
```

#### NPM
```bash
npm install @@ramp-network/crypto-address-validator
```

## API

##### validate (address [, currency = 'bitcoin'[, networkType = 'prod' [, addressType = ['all']]])

###### Parameters
* address - Wallet address to validate.
* currency - Optional. Currency name or symbol, e.g. `'bitcoin'` (default), `'litecoin'` or `'LTC'`
* networkType - Optional. Use `'prod'` (default) to enforce standard address, `'testnet'` to enforce testnet address and `'both'` to enforce nothing.
* addressType - Optional. Specifies what version of the address should be validated. Defaults to `'legacy'`, but can be changed on a per asset basis.

> Returns true if the address (string) is a valid wallet address for the crypto currency specified, see below for supported currencies.

### Usage example

#### Node
```javascript
const WAValidator = require('@ramp-network/crypto-address-validator')

const valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'BTC')

if (valid) {
  console.log('This is a valid address')
} else {
  console.log('Address INVALID')
}
// This will log 'This is a valid address' to the console.
```

```javascript
const WAValidator = require('@ramp-network/crypto-address-validator')

const valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'litecoin', 'testnet')

if (valid) {
  console.log('This is a valid address')
} else {
  console.log('Address INVALID')
}
// As this is a invalid litecoin address 'Address INVALID' will be logged to console.
```

#### Browser
```html
<script src="wallet-address-validator.min.js"></script>
```

```javascript
// WAValidator is exposed as a global (window.WAValidator)
const valid = WAValidator.validate('1KFzzGtDdnq5hrwxXGjwVnKzRbvf8WVxck', 'bitcoin')

if (valid) {
  alert('This is a valid address')
} else {
  alert('Address INVALID')
}
// This should show a pop up with text 'This is a valid address'.
```
