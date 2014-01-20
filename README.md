# bitcoin-address [![Build Status](https://secure.travis-ci.org/defunctzombie/bitcoin-address.png)](http://travis-ci.org/defunctzombie/bitcoin-address) #

Functions for working with bitcoin addresses

## install ##

```
npm install bitcoin-address
```

## API ##

### validate (address [, type]) ###

> returns true if the address (string) is a valid bitcoin address
> optionally, you can specify 'prod' or 'testnet' for the type to limit validation that that subset of addresses

### get_address_type (address) ###

> returns address type if valid base58 address, otherwise null