# crypto-address-validator
Simple wallet address validator for validating Bitcoin and other altcoins addresses in **Node.js and browser**.

Forked from [ognus/wallet-address-validator](https://github.com/ognus/wallet-address-validator) which was forked from [ryanralph/altcoin-address](https://github.com/ryanralph/altcoin-address).

Did you know? This package is under active development by Swyftx. Swyftx allows you to buy and sell Bitcoin, Etherium, Ripple and many more assets using Australian Dollars. [Buy Bitcoin in Australia](https://swyftx.com.au)

**File size is ~109 kB (minifed and gzipped - ~70.7% smaller)**.

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

* 0x/zrx `'0x'` or `'zrx'`
* AdEx/adx `'AdEx'` or `'adx'`
* aelf/ELF `'aelf'` or `'ELF'`
* Aeternity/ae `'Aeternity'` or `'ae'`
* Aragon/ant `'Aragon'` or `'ant'`
* Ardor/ardr `'Ardor'` or `'ardr'`
* Augur/rep `'Augur'` or `'rep'`
* AuroraCoin/aur `'AuroraCoin'` or `'aur'`
* Australian Dollars/aud `'Australian Dollars'` or `'aud'`
* Bancor/bnt `'Bancor'` or `'bnt'`
* Bankex/bkx `'Bankex'` or `'bkx'`
* BasicAttentionToken/bat `'BasicAttentionToken'` or `'bat'`
* BeaverCoin/bvc `'BeaverCoin'` or `'bvc'`
* BinanceCoin/bnb `'BinanceCoin'` or `'bnb'`
* BioCoin/bio `'BioCoin'` or `'bio'`
* Bitcoin/btc `'Bitcoin'` or `'btc'`
* Bitcoin Diamond/bcd `'Bitcoin Diamond'` or `'bcd'`
* BitcoinCash/bch `'BitcoinCash'` or `'bch'`
* BitcoinCash/bcc `'BitcoinCash'` or `'bcc'`
* BitcoinGold/btg `'BitcoinGold'` or `'btg'`
* BitcoinPrivate/btcp `'BitcoinPrivate'` or `'btcp'`
* BitcoinZ/btcz `'BitcoinZ'` or `'btcz'`
* Bitquence/bqx `'Bitquence'` or `'bqx'`
* Bitshares/bts `'Bitshares'` or `'bts'`
* BitTorrent/btt `'BitTorrent'` or `'btt'`
* Callisto/clo `'Callisto'` or `'clo'`
* Cardano/ada `'Cardano'` or `'ada'`
* Chainlink/link `'Chainlink'` or `'link'`
* Civic/cvc `'Civic'` or `'cvc'`
* Cosmos/atom `'Cosmos'` or `'atom'`
* Dash/dash `'Dash'` or `'dash'`
* Decentraland/MANA `'Decentraland'` or `'MANA'`
* Decred/dcr `'Decred'` or `'dcr'`
* Dent/dent `'Dent'` or `'dent'`
* DigiByte/dgb `'DigiByte'` or `'dgb'`
* District0x/dnt `'District0x'` or `'dnt'`
* DogeCoin/doge `'DogeCoin'` or `'doge'`
* Enjin Coin/enj `'Enjin Coin'` or `'enj'`
* EOS/eos `'EOS'` or `'eos'`
* Ethereum/eth `'Ethereum'` or `'eth'`
* EthereumClassic/etc `'EthereumClassic'` or `'etc'`
* EtherZero/etz `'EtherZero'` or `'etz'`
* ETHOS/ethos `'ETHOS'` or `'ethos'`
* Expanse/exp `'Expanse'` or `'exp'`
* FreiCoin/frc `'FreiCoin'` or `'frc'`
* FunFair/fun `'FunFair'` or `'fun'`
* GameCredits/game `'GameCredits'` or `'game'`
* GarliCoin/grlc `'GarliCoin'` or `'grlc'`
* Gnosis/gno `'Gnosis'` or `'gno'`
* Golem/gnt `'Golem'` or `'gnt'`
* Golem/gnt `'Golem'` or `'gnt'`
* Holo/HOT `'Holo'` or `'HOT'`
* Horizen/zen `'Horizen'` or `'zen'`
* Hush/hush `'Hush'` or `'hush'`
* ICON/icx `'ICON'` or `'icx'`
* iExec RLC/RLC `'iExec RLC'` or `'RLC'`
* iExec RLC/rlc `'iExec RLC'` or `'rlc'`
* Internet of Services/IOST `'Internet of Services'` or `'IOST'`
* Iota/iota `'Iota'` or `'iota'`
* Komodo/kmd `'Komodo'` or `'kmd'`
* Lisk/lsk `'Lisk'` or `'lsk'`
* LiteCoin/ltc `'LiteCoin'` or `'ltc'`
* Matchpool/gup `'Matchpool'` or `'gup'`
* MegaCoin/mec `'MegaCoin'` or `'mec'`
* Melon/mln `'Melon'` or `'mln'`
* Metal/mtl `'Metal'` or `'mtl'`
* Monacao/mco `'Monacao'` or `'mco'`
* MonaCoin/mona `'MonaCoin'` or `'mona'`
* Monero/xmr `'Monero'` or `'xmr'`
* NameCoin/nmc `'NameCoin'` or `'nmc'`
* Nano/nano `'Nano'` or `'nano'`
* NEM/xem `'NEM'` or `'xem'`
* Neo/neo `'Neo'` or `'neo'`
* NeoGas/gas `'NeoGas'` or `'gas'`
* Nexus/nxs `'Nexus'` or `'nxs'`
* Numeraire/nmr `'Numeraire'` or `'nmr'`
* Odyssey/ocn `'Odyssey'` or `'ocn'`
* OmiseGO/omg `'OmiseGO'` or `'omg'`
* Ontology/ont `'Ontology'` or `'ont'`
* Paxos Standard Token/pax `'Paxos Standard Token'` or `'pax'`
* PeerCoin/ppc `'PeerCoin'` or `'ppc'`
* PIVX/pivx `'PIVX'` or `'pivx'`
* Polymath/poly `'Polymath'` or `'poly'`
* Populous/ppt `'Populous'` or `'ppt'`
* PowerLedger/powr `'PowerLedger'` or `'powr'`
* PrimeCoin/xpm `'PrimeCoin'` or `'xpm'`
* ProtoShares/pts `'ProtoShares'` or `'pts'`
* Pundi X/npxs `'Pundi X'` or `'npxs'`
* Qtum/qtum `'Qtum'` or `'qtum'`
* RaiBlocks/xrb `'RaiBlocks'` or `'xrb'`
* Ravencoin/rvn `'Ravencoin'` or `'rvn'`
* RipioCreditNetwork/rcn `'RipioCreditNetwork'` or `'rcn'`
* Ripple/xrp `'Ripple'` or `'xrp'`
* Salt/salt `'Salt'` or `'salt'`
* Siacoin/sc `'Siacoin'` or `'sc'`
* SnowGem/sng `'SnowGem'` or `'sng'`
* SolarCoin/slr `'SolarCoin'` or `'slr'`
* Status/snt `'Status'` or `'snt'`
* STEEM/steem `'STEEM'` or `'steem'`
* Stellar Lumens/xlm `'Stellar Lumens'` or `'xlm'`
* Storj/storj `'Storj'` or `'storj'`
* Storm/storm `'Storm'` or `'storm'`
* Stratis/strat `'Stratis'` or `'strat'`
* Substratum/sub `'Substratum'` or `'sub'`
* Swarm City/swt `'Swarm City'` or `'swt'`
* Syscoin/sys `'Syscoin'` or `'sys'`
* TenX/pay `'TenX'` or `'pay'`
* Tether/usdt `'Tether'` or `'usdt'`
* Tezos/XTZ `'Tezos'` or `'XTZ'`
* THETA/theta `'THETA'` or `'theta'`
* Tron/trx `'Tron'` or `'trx'`
* TrueUSD/tusd `'TrueUSD'` or `'tusd'`
* USD Coin/usdc `'USD Coin'` or `'usdc'`
* VeChain/vet `'VeChain'` or `'vet'`
* Verge/xvg `'Verge'` or `'xvg'`
* VertCoin/vtc `'VertCoin'` or `'vtc'`
* Viberate/vib `'Viberate'` or `'vib'`
* VoteCoin/vot `'VoteCoin'` or `'vot'`
* WaltonChain/wtc `'WaltonChain'` or `'wtc'`
* Waves/waves `'Waves'` or `'waves'`
* Wings/wings `'Wings'` or `'wings'`
* ZCash/zec `'ZCash'` or `'zec'`
* ZClassic/zcl `'ZClassic'` or `'zcl'`
* ZenCash/zen `'ZenCash'` or `'zen'`
* Zilliqa/zil `'Zilliqa'` or `'zil'`

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
