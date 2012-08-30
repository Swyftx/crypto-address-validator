# bitcoin-address [![Build Status](https://secure.travis-ci.org/shtylman/bitcoin-address.png)](http://travis-ci.org/shtylman/bitcoin-address) #

Functions for working with bitcoin addresses

## install ##

```
npm install bitcoin-address
```

## API ##

### validate (address [, type]) ###

> returns true if the address (string) is a valid bitcoin address
> optionally, you can specify 'prod' or 'testnet' for the type to limit validation that that subset of addresses
