/* global describe it */

var isNode = typeof module !== 'undefined' && typeof module.exports !== 'undefined'

var chai = isNode ? require('chai') : window.chai
var expect = chai.expect

var WAValidator = isNode ? require('../src/wallet_address_validator') : window.WAValidator

function valid (address, currency, networkType, addressFormats) {
  var result = WAValidator.validate(address, currency, networkType, addressFormats)
  expect(result).to.equal(true)
}

function invalid (address, currency, networkType, addressFormats) {
  var result = WAValidator.validate(address, currency, networkType, addressFormats)
  expect(result).to.equal(false)
}

describe('WAValidator.validate()', function () {
  describe('valid results', function () {
    it('should return true for correct bitcoin addresses', function () {
      valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BTC')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'prod')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'btc', 'both')
      valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoin')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'testnet')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoin', 'both')

      valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez')
      valid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt')
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoin', 'testnet')

      // segwit addresses
      valid('BC1QW508D6QEJXTDG4Y5R3ZARVARY0C5XW7KV8F3T4', 'bitcoin')
      valid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sl5k7', 'bitcoin')
      valid('bc1pw508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7k7grplx', 'bitcoin')
      valid('BC1SW50QA3JX3S', 'bitcoin')
      valid('bc1zw508d6qejxtdg4y5r3zarvaryvg6kdaj', 'bitcoin')
      valid('tb1qqqqqp399et2xygdj5xreqhjjvcmzhxw4aywxecjdzew6hylgvsesrxh6hy', 'bitcoin')

      // taproot addresses
      valid('bc1pmzfrwwndsqmk5yh69yjr5lfgfg4ev8c0tsc06e', 'bitcoin')

      invalid('tc1qw508d6qejxtdg4y5r3zarvary0c5xw7kg3g4ty', 'bitcoin')
      invalid('bc1qw508d6qejxtdg4y5r3zarvary0c5xw7kv8f3t5', 'bitcoin')
      invalid('BC13W508D6QEJXTDG4Y5R3ZARVARY0C5XW7KN40WF2', 'bitcoin')
      invalid('bc1rw5uspcuh', 'bitcoin')
      invalid('bc10w508d6qejxtdg4y5r3zarvary0c5xw7kw508d6qejxtdg4y5r3zarvary0c5xw7kw5rljs90', 'bitcoin')
      invalid('BC1QR508D6QEJXTDG4Y5R3ZARVARYV98GJ9P', 'bitcoin')
      invalid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3q0sL5k7', 'bitcoin')
      invalid('bc1zw508d6qejxtdg4y5r3zarvaryvqyzf3du', 'bitcoin')
      invalid('tb1qrp33g0q5c5txsp9arysrx4k6zdkfs4nce4xj0gdcccefvpysxf3pjxtptv', 'bitcoin')
      invalid('bc1gmk9yu', 'bitcoin')
    })

    it('should return true for correct bitcoincash addresses', function () {
      valid('12KYrjTdVGjFMtaxERSk3gphreJ5US8aUP', 'bitcoincash')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bitcoincash')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'BCH')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'Bitcoin')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'prod')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'both')
      valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'bitcoincash')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'testnet')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bitcoincash', 'both')
      valid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'both', ['legacy'])

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bitcoincash')
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'bch')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'bitcoincash', 'testnet')

      // SLP addresses
      valid('pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsvryq5wf0k', 'bitcoincash', 'both', ['all'])
      valid('pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsvryq5wf0k', 'bitcoincash', 'both', ['slpaddr'])

      // Cash addresses
      valid('bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g', 'bitcoincash', 'both', ['all'])
      valid('bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g', 'bitcoincash', 'both', ['cashaddr'])
    })

    it('should return true for correct litecoin addresses', function () {
      valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'litecoin')
      valid('LVg2kJoFNg45Nbpy53h7Fe1wKyeXVRhMH9', 'LTC')
      valid('LTpYZG19YmfvY2bBDYtCKpunVRw7nVgRHW', 'litecoin')
      valid('Lb6wDP2kHGyWC7vrZuZAgV7V4ECyDdH7a6', 'litecoin')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'litecoin', 'testnet')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'litecoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'litecoin', 'testnet')
      valid('QW2SvwjaJU8LD6GSmtm1PHnBG2xPuxwZFy', 'litecoin', 'testnet')
      valid('QjpzxpbLp5pCGsCczMbfh1uhC3P89QZavY', 'litecoin', 'testnet')
    })

    it('should return true for correct peercoin addresses', function () {
      valid('PHCEsP6od3WJ8K2WKWEDBYKhH95pc9kiZN', 'peercoin')
      valid('PSbM1pGoE9dnAuVWvpQqTTYVpKZU41dNAz', 'peercoin')
      valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'peercoin')
      valid('PUULeHrJL2WujJkorc2RsUAR3SardKUauu', 'PPC')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'peercoin', 'testnet')

      // p2sh addresses
      valid('pNms4CaWqgZUxbNZaA1yP2gPr3BYnez9EM', 'peercoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'peercoin', 'testnet')
    })

    it('should return true for correct dogecoin addresses', function () {
      valid('DPpJVPpvPNP6i6tMj4rTycAGh8wReTqaSU', 'dogecoin')
      valid('DNzLUN6MyYVS5zf4Xc2yK69V3dXs6Mxia5', 'dogecoin')
      valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'dogecoin')
      valid('DPS6iZj7roHquvwRYXNBua9QtKPzigUUhM', 'DOGE')
      valid('DFs6qrdCp4K4evv6jU5R3y2WjaWQbXzGsX', 'DOGE')
      // TODO: NEED A DOGECOIN TESTNET ADDRESS

      // p2sh addresses
      valid('A7JjzK9k9x5b2MkkQzqt91WZsuu7wTu6iS', 'dogecoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'dogecoin', 'testnet')
    })

    it('should return true for correct beavercoin addresses', function () {
      valid('BPPtB4EpPi5wCaGXZuNyKQgng8ya579qUh', 'beavercoin')
      valid('BC1LLYoE4mTCHTJhVYvLGxhRTwAHyWTQ49', 'beavercoin')
      valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'beavercoin')
      valid('BBuyeg2vjtyFdMNj3LTxuVra4wJMKVAY9C', 'BVC')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'beavercoin', 'testnet')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'beavercoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'beavercoin', 'testnet')
    })

    it('should return true for correct freicoin addresses', function () {
      valid('1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa', 'freicoin')
      valid('1oNLrsHnBcR6dpaBpwz3LSwutbUNkNSjs', 'freicoin')
      valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'freicoin')
      valid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'FRC')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'freicoin', 'testnet')

      // p2sh addresse
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'freicoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'freicoin', 'testnet')
    })

    it('should return true for correct protoshares addresses', function () {
      valid('PaNGELmZgzRQCKeEKM6ifgTqNkC4ceiAWw', 'protoshares')
      valid('Piev8TMX2fT5mFtgxx2TXJaqXP37weMPuD', 'protoshares')
      valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'protoshares')
      valid('PgsuLoe9ojRKFGJGVpqqk37gAqNJ4ozboD', 'PTS')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'protoshares', 'testnet')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'protoshares')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'protoshares', 'testnet')
    })

    it('should return true for correct megacoin addresses', function () {
      valid('MWUHaNxjXGZUYTh92i3zuDmsnH1rHSBk5M', 'megacoin')
      valid('MSAkrhRyte7bz999Ga5SqYjzypFFYa2oEb', 'megacoin')
      valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'megacoin')
      valid('MLUTAtDQFcfo1QACWocLuufFq5fBDTpCHE', 'MEC')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'megacoin', 'testnet')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'megacoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'megacoin', 'testnet')
    })

    it('should return true for correct primecoin addresses', function () {
      valid('AVKeiZ5JadfWdH2EYVgVRfX4ufoyd4ehuM', 'primecoin')
      valid('AQXBRPyob4dywUJ21RUKrR1xetQCDVenKD', 'primecoin')
      valid('ANHfTZnskKqaBU7oZuSha9SpbHU3YBfeKf', 'primecoin')
      valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'primecoin')
      valid('AYdiYMKSGYxLcZNDmqB8jNcck7SQibrfiK', 'XPM')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'primecoin', 'testnet')

      // p2sh addresses
      valid('af5CvTQq7agDh717Wszb5QDbWb7nT2mukP', 'primecoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'primecoin', 'testnet')
    })

    it('should return true for correct auroracoin addresses', function () {
      valid('ARM3GLZXF1PDTZ5vz3wh5MVahbK9BHTWAN', 'auroracoin')
      valid('AUtfc6ThCLb7FuEu7QPrWpJuaXaJRPciDF', 'auroracoin')
      valid('AUN1oaj5hjispGnczt8Aruw3TxgGyRqB3V', 'auroracoin')
      valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'auroracoin')
      valid('AXGcBkGX6NiaDXj85C5dCrhTRUgwxSkKDK', 'AUR')
      valid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'auroracoin', 'testnet')

      // p2sh addresses
      valid('3NJZLcZEEYBpxYEUGewU4knsQRn1WM5Fkt', 'auroracoin')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'auroracoin', 'testnet')
    })

    it('should return true for correct namecoin addresses', function () {
      valid('NEpeRmS775fnti8TDgJA28m8KLEfNNRZvT', 'namecoin')
      valid('MyJ691bGJ48RBK2LS8n1U57wcFLFScFXxi', 'namecoin')
      valid('NFY9aw1RXLGtWpeqgNQXprnUcZXyKNinTh', 'namecoin')
      valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'namecoin')
      valid('NCPPc7Pzb75CpRPJQPRRh6ouJTq7BCy1H4', 'NMC')
    })

    it('should return true for correct BioCoin addresses', function () {
      valid('B7xseoLGk7hEpMDDeSvZDKmmiAMHWiccok', 'biocoin')
      valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'biocoin')
      valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'biocoin', 'testnet')
      valid('muH8LL42DiMs8GEQ6Grfi8KUw2uFvuKr1J', 'BIO', 'testnet')
      valid('B8zjmYFGhWmiaQSJshfrnefE72xCapCkvo', 'BIO')
    })

    it('should return true for correct Garlicoin addresses', function () {
      valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'garlicoin')
      valid('GNWeWaoQ6rv21ZFjJWT9vb91hXUzFTLkru', 'garlicoin')
      valid('mjKbQTkgwzmsL3J86tdVzhyW9pc4NePqTb', 'garlicoin', 'testnet')
      valid('mnYp36NuyRavMKQ9Q9Q6oGqoorAs9p3zYn', 'GRLC', 'testnet')
      valid('GU2NtcNotWFiZjTp2Vdgf5CjeMfgsWYCua', 'GRLC')
    })

    it('should return true for correct Vertcoin addresses', function () {
      valid('VmoMjGf3zgZLy8sk3PMKd3xikZHXWvnYi7', 'vertcoin')
      valid('VmhHwXr3J8xMZpy62WuBGpu3xVvThWzcTQ', 'vertcoin')
      valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'vertcoin', 'testnet')
      valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'VTC', 'testnet')
      valid('Vri6Q4GgNFfdtcpxD961TotJwaSaYQCaL5', 'VTC')
    })

    it('should return true for correct BitcoinGold addresses', function () {
      valid('GW3JrQyHtoVfEFES3Y9JagiX3VSKQStLwj', 'bitcoingold')
      valid('GUDWdeMyAXQbrNFFivAhkJQ1GfBCFdc7JF', 'bitcoingold')
      valid('mvww6DEJ18dbyQUukpVQXvLgrNDJazZn1Y', 'bitcoingold', 'testnet')
      valid('mn3mdEE6cf1snxVsknNz4GRTdSrWXqYp7c', 'BTG', 'testnet')
      valid('GSNFPRsdaM3MXrU5HW1AxgFwmUQC8HXK9F', 'BTG')
    })

    it('should return true for correct Decred addresses', function () {
      valid('Dsesax2GJnMN4wwmWo5rJGq73dDK217Rh85', 'DCR')
      valid('DsYuxtvGRfN8rncXAndtLUpJm55F77K17RA', 'decred')
      valid('DsaXDG2NrJW8g4tFAb8n9MNx81Sn3Qc8AEV', 'decred')
      valid('TsijUgejaRnLKF5WAbpUxNtwKGUiKVeXLr7', 'decred', 'testnet')
      valid('TsZ9QmAoadF12hGvyALp6qvaF4be3BmLqG9', 'dcr', 'testnet')
    })

    it('should return true for correct Digibyte addresses', function () {
      valid('DG2rM2orU2JH5i4ACh3AKNpRTNESdv5xf8', 'DGB')
      valid('DBR2Lj1F17eHGHXgbpae2Wb4m39bDyA1qo', 'DGB')
      valid('D9TDZTR9Z9Mx2NoDJnhqhnYhDLKRAmsL9n', 'digibyte')
      valid('DHRzA1YHA1kFWpz2apRckZJy6KZRyGq4EV', 'digibyte')
      valid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'digibyte')
    })

    it('should return true for correct Ethereum addresses', function () {
      valid('0xE37c0D48d68da5c5b14E5c1a9f1CFE802776D9FF', 'ethereum')
      valid('0xa00354276d2fC74ee91e37D085d35748613f4748', 'ethereum')
      valid('0xAff4d6793F584a473348EbA058deb8caad77a288', 'ETH')
      valid('0xc6d9d2cd449a754c494264e1809c50e34d64562b', 'ETH')
      valid('0x52908400098527886E0F7030069857D2E4169EE7', 'ETH')
      valid('0x8617E340B3D01FA5F11F306F4090FD50E238070D', 'ETH')
      valid('0xde709f2102306220921060314715629080e2fb77', 'ETH')
      valid('0x27b1fdb04752bbc536007a920d24acb045561c26', 'ETH')
      valid('0x5aAeb6053F3E94C9b9A09f33669435E7Ef1BeAed', 'ETH')
      valid('0xfB6916095ca1df60bB79Ce92cE3Ea74c37c5d359', 'ETH')
      valid('0xdbF03B407c01E7cD3CBea99509d93f8DDDC8C6FB', 'ETH')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETH')

      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ethereumclassic')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETC')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'etherzero')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'ETZ')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'callisto')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'CLO')
      valid('0xD1220A0cf47c7B9Be7A2E6BA89F429762e7b9aDb', 'USDT')
    })

    it('should return true for correct Ripple addresses', function () {
      valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'ripple')
      valid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCn', 'XRP')
      valid('r3kmLJN5D28dHuH8vZNUZpMC43pEHpaocV', 'XRP')
      valid('rHb9CJAWyB4rj91VRWn96DkukG4bwdtyTh', 'XRP')
      valid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhmN', 'XRP')
    })

    it('should return true for correct dash addresses', function () {
      valid('Xx4dYKgz3Zcv6kheaqog3fynaKWjbahb6b', 'dash')
      valid('XcY4WJ6Z2Q8w7vcYER1JypC8s2oa3SQ1b1', 'DASH')
      valid('XqMkVUZnqe3w4xvgdZRtZoe7gMitDudGs4', 'dash')
      valid('yPv7h2i8v3dJjfSH4L3x91JSJszjdbsJJA', 'dash', 'testnet')
    })

    it('should return true for correct neo addresses', function () {
      valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neo')
      valid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ1X', 'NEO')
    })

    it('should return true for correct neo gas addresses', function () {
      valid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTT', 'neogas')
    })

    it('should return true for correct qtum addresses', function () {
      valid('QNjUiD3bVVZwYTc5AhpeQbS1mfb2guyWhe', 'qtum')
      valid('QVZnSrMwKp6AL4FjUPPnfFgsma6j1DXQXu', 'QTUM')
      valid('2MxKEf2su6FGAUfCEAHreGFQvEYrfYNHvL7', 'qtum', 'testnet')
    })

    it('should return true for correct votecoin addresses', function () {
      valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin')
      valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT')
      valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', 'testnet')
    })

    it('should return true for correct bitcoinz addresses', function () {
      valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz')
      valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ')
      valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', 'testnet')
    })

    it('should return true for correct zclassic addresses', function () {
      valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic')
      valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL')
      valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', 'testnet')
    })

    it('should return true for correct hush addresses', function () {
      valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush')
      valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH')
      valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', 'testnet')
    })

    it('should return true for correct zcash addresses', function () {
      valid('t1U9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash')
      valid('t3Vz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC')
      valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', 'testnet')
    })

    it('should return true for correct bitcoinprivate addresses', function () {
      valid('b1M4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate')
      // valid('bx....', 'BTCP');
      // valid('nx....', 'bitcoinprivate', 'testnet');
    })

    it('should return true for correct snowgem addresses', function () {
      valid('s1fx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem')
      valid('s3d27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG')
      valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', 'testnet')
    })

    it('should return true for correct zencash/horizen addresses', function () {
      valid('znhiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash')
      valid('zssEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN')
      valid('ztmWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', 'testnet')
      valid('znauTfxFLirRXFXKubFyxjbT5WjBotQzeEt', 'horizen')
    })

    it('should return true for correct komodo addresses', function () {
      valid('R9R5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo')
      valid('RAvj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD')
      // valid('t2UNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', 'testnet');
    })

    it('should return true for correct Bankex addresses', function () {
      valid('0xeac39e1bc802baae3d4b9cb518f3f60374bbad6c', 'bankex')
      valid('0x45245bc59219eeaaf6cd3f382e078a461ff9de7b', 'BKX')
      valid('0xf40d80FCfa5cdEa0bB1E570c2D52132ac9bC6aEC', 'bankex', 'testnet')
      valid('0x8A7395f281EeCf2B471B689E87Cf4C7fa8bb957d', 'BKX', 'testnet')
    })

    it('should return true for correct BitTorrent addresses', () => {
      valid('TJED82158WeEcP67wtKK5BeV6rMagJfeA4', 'btt')
    })
    it('should return true for correct Dent addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'dent')
    })
    it('should return true for correct Holo addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'hot')
    })
    it('should return true for correct Chainlink addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'link')
    })
    it('should return true for correct Metal addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'mtl')
    })
    it('should return true for correct Pundi X addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'npxs')
    })
    it('should return true for correct Stellar Lumens addresses', () => {
      valid('GAHK7EEG2WWHVKDNT4CEQFZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A', 'xlm')
    })
    it('should return true for correct Zilliqa addresses', () => {
      valid('zil1ex2ph6e2arwfx0mpdmlwl9nsfxydmpvhg2zwy3', 'zil')
      valid('zil14pu4qn4ngmkcq3dcpkw862lys2w7z38hq3ktua', 'zil')
    })
    it('should return true for correct Syscoin addresses', () => {
      valid('SdzKyvhD2Y3xJvGVSfx96NXszq6x9BZX34', 'sys')
      valid('SbmNaK9hVn9BUoPoPtTmXogfGfZd5Mophm', 'sys')
      valid('SQUDdLog219Hpcz6Zss4uXg6xU1pAcnbLF', 'sys')
      valid('STxiBMedbmA28ip1QMooZaTBHxyiwVSCSr', 'sys')
      valid('SV4yxaugDJB6WXT5hNJwN1Pz6M8TjrMmJ6', 'sys')
      valid('sys1q4m765x694dsawzflaqr8reqc6neh8aj04gkklx', 'sys')
      valid('sys1qzpuka2847ecyf62xw0996v7wh2ehkdaegf6ann', 'sys')
    })
    it('should return true for correct Populous addresses', () => {
      valid('0x0e48746feb5603ceb03c1c181ccc55c953d989dc', 'ppt')
    })
    it('should return true for correct VeChain addresses', () => {
      valid('0x53D2c8Ac73877675e31Fe6Aa35f1Dec7Da1E0864', 'vet')
      valid('0x24628ab432B18B1a715E0952c87211814BDC7199', 'vet')
    })
    it('should return true for correct Ontology addresses', () => {
      valid('AXu57dhdNDnA5drqJUM2KfoMqgaLwmZwoP', 'ont')
      valid('TNVv2v7eKL525gZ2YCmFnsB2FGNG4VeMHX', 'ont')
      valid('TFYhfePLaZq1Y4BdKAnorm3XjjqTZcc9m4', 'ont')
      valid('AecjXQsLGsSU3nmx92UuGGbF1fj7EsGrt2', 'ont')
    })
    it('should return true for correct NEM addresses', () => {
      valid('NC64UFOWRO6AVMWFV2BFX2NT6W2GURK2EOX6FFMZ', 'xem')
    })
    it('should return true for correct USD Coin addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'usdc')
    })
    it('should return true for correct Bitcoin Diamond addresses', () => {
      valid('1B3HxLb5EgDUdmiqDxGjfL6VNAbJNZ9ZaW', 'bcd')
    })
    it('should return true for correct Ravencoin addresses', () => {
      valid('RFnM9d8sjAPn24yJi4VACWWWZjaYyFwd8K', 'rvn')
    })
    it('should return true for correct Bitshares addresses', () => {
      valid('abcdefg-bts-1', 'bts')
    })
    it('should return true for correct ICON addresses', () => {
      valid('hxde8ba8fd110625a0c47ecf29de308b8f5bd20ed6', 'icx')
    })
    it('should return true for correct Paxos Standard Token addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'pax')
    })
    it('should return true for correct Aeternity addresses', () => {
      valid('ak_AT2bs7LkqwKbPUj5waoqq1E7QYgRzXUbaBanDHXDVsaCJ8gRA', 'ae')
      valid('ak_8QxnP9qXP3NpA4fskYZE7P1GfHzKZAMmoNuok7jJC5NqVYi21', 'ae')
    })
    it('should return true for correct Siacoin addresses', () => {
      valid('1acc2bc035b6606bd612b6114efea1102bd4499c0edf559469de7f40076f1c54e4eed3c5f1ac', 'sc')
    })
    it('should return true for correct Cosmos addresses', () => {
      valid('cosmos15v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e74', 'atom')
    })
    it('should return true for correct STEEM addresses', () => {
      valid('meetcrypto8', 'steem')
    })
    it('should return true for correct Enjin Coin addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'enj')
    })
    it('should return true for correct THETA addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'theta')
    })
    it('should return true for correct Stratis addresses', () => {
      valid('SY7YwpMGvU42dkFzmFEkGWFr1BEikUwhPT', 'strat')
    })
    it('should return true for correct Status addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'snt')
    })
    it('should return true for correct Golem addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'gnt')
    })
    it('should return true for correct aelf addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'elf')
    })
    it('should return true for correct Ardor addresses', () => {
      valid('ARDOR-HFNE-E2VE-SMV3-DCRZ8', 'ardr')
    })
    it('should return true for correct Binance Coin addresses', () => {
      valid('bnb136ns6lfw4zs5hg4n85vdthaad7hq5m4gtkgf23', 'bnb')
      valid('bnb142q467df6jun6rt5u2ar58sp47hm5f9wvz2cvg', 'bnb')
    })
    it('should return true for correct Monero addresses', () => {
      valid('8BMsVKsZ6kdUVWi4o67iWTe3ZaGL4Qc7KjfLVcPer4v2jNTKfEoXtJoL48EHt8cqdZWBQkjzttygpHJyhZcnqLb1JTfVkim', 'xmr')
      valid('45HqZMyS2VmKzD4V17U7fT2HZj9ZgYgBXJsAJHkjj8QFVuhCxRSxsJB8HrZmGVyFr8HEsDxbKhFCyVLiauFtiPknJeDFAMj', 'xmr')
    })
    it('should return true for correct Nexus addresses', () => {
      valid('2RytMNwUzYs6gn7YToq7xhnrb1xx1pDM5kqXxvKjDkgEum9acPx', 'nxs')
      valid('2R9DtwPRUn7fjgnQd7bCbEkaWcwGY5dhrRwPqcNqvxMM9gJk2vM', 'nxs')
      valid('2RYRzMDyMnFeAHYAbdhCFyemt4u2echtTC5X4nuVjt9Fce6NV5e', 'nxs')
      valid('2SLoUFsLb5i4nLVQq2Kh2HMBvx589Lb3YQfqjMbSYbLCnCm6Z2d', 'nxs')
      valid('2Sam1ByD1SnmAPj3PiLMKAiUq3bZEDFXhePYemZieVRi7XVcaWe', 'nxs')
      valid('2RdoQbTPjznYNumQaDMqpE6LFv3JKe52A73kJneahKU9FoV6Kck', 'nxs')
      valid('2S2NsdLam19uuXk9jhRUqcmBsPzvZw2KVEDSU7ThLWwFwqYpLzP', 'nxs')
      valid('2SHJhammSwhm2cqgLRfZZd1kJhoaKgNjYfTYqv49aUbBv7ZzuRC', 'nxs')
    })
    it('should return true for correct IOST addresses', () => {
      valid('binanceiost', 'iost')
    })
    it('should return true for correct Decentraland addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'mana')
    })
    it('should return true for correct iExec RLC addresses', () => {
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'rlc')
    })
    it('should return true for correct Tezos addresses', () => {
      valid('tz1KqTpEZ7Yob7QbPE4Hy4Wo8fHG8LhKxZSx', 'xtz')
      valid('tz1gjaF81ZRRvdzjobyfVNsAeSC6PScjfQwN', 'xtz')
    })
    it('should return true for correct HashGraph addresses', () => {
      valid('0.0.10819', 'hbar')
      valid('0.0.13458', 'hbar')
      valid('0.0.16952', 'hbar')
    })
    it('should return true for correct Neo Gas addresses', () => {
      valid('AWKECj9RD8rS8RPcpCgYVjk1DeYyHwxZm3', 'gas')
      valid('ARTmWQviNzB2KwGeKNTLVvSpqAjLqzY3KD', 'gas')
      valid('APqUsPcjTYQtH2J9Lii8PZpfiG3mygoNrb', 'gas')
      valid('ARPjP8o2y7j1BVxXcpMGnueq8QARUuByvK', 'gas')
      valid('AXu57dhdNDnA5drqJUM2KfoMqgaLwmZwoP', 'gas')
    })
    it('should return true for correct Ontology Gas addresses', () => {
      valid('AFmseVrdL9f9oyCzZefL9tG6UbvhPbdYzM', 'ong')
      valid('AFmseVrdL9f9oyCzZefL9tG6UbvhUMqNMV', 'ong')
      valid('AGwa8wyKtSFC8JWZ6ccyX4vpf9paAm153R', 'ong')
      valid('AGwa8wyKtSFC8JWZ6ccyX4vpf9paAm153R', 'ong')
      valid('AXu57dhdNDnA5drqJUM2KfoMqgaLwmZwoP', 'ong')
    })
    it('should return true for correct Blockstacks addresses', () => {
      valid('SP1YWFP80QE1GD65MPGCXE509R0662DXJ9ANCKWDD', 'stx')
      valid('SP1P72Z3704VMT3DMHPP2CB8TGQWGDBHD3RPR9GZS', 'stx')
      valid('SP2ZKDH78NGAMTE1WKCTWRFKYWA2BDZPTVF93TXH6', 'stx')
      valid('SP3WV3VC6GM1WF215SDHP0MESQ3BNXHB1N6TPB70S', 'stx')
      valid('SP1P72Z3704VMT3DMHPP2CB8TGQWGDBHD3RPR9GZS', 'stx')
    })
    it('should return true for correct Aave Lend addresses', () => {
      valid('0x80fB784B7eD66730e8b1DBd9820aFD29931aab03', 'lend')
      valid('0xb1f8272a7b7cad00e465652cf6cbe28a03f5c161', 'lend')
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'lend')
    })

    it('should return true for correct Algorand addresses', () => {
      valid('LCRDY3LYAANTVS3XRHEHWHGXRTKZYVTX55P5IA2AT5ZDJ4CWZFFZIKVHLI', 'algo')
      valid('SP745JJR4KPRQEXJZHVIEN736LYTL2T2DFMG3OIIFJBV66K73PHNMDCZVM', 'algo')
      valid('AKHSHWO2TUWE53RMVG6ZUBNAEX6MTYPT76TCIDCDWYUUTK6HCJTZS2HDQU', 'algo')
    })

    it('should return true for correct Enigma addresses', () => {
      valid('0xd3bb6192e78880bf7322dc557673ce45a77dd568', 'eng')
      valid('0x48337b8dd78a9761a73d0fbb8f5c8a0ddda32d85', 'eng')
      valid('0xda816e2122a8a39b0926bfa84edd3d42477e9efd', 'eng')
    })
  })

  describe('invalid results', function () {
    function commonTests (currency) {
      invalid('', currency) // reject blank
      invalid('%%@', currency) // reject invalid base58 string
      invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency) // reject invalid address
      invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency) // reject transaction id's
      // testnet
      invalid('', currency, 'testnet') // reject blank
      invalid('%%@', currency, 'testnet') // reject invalid base58 string
      invalid('1A1zP1ePQGefi2DMPTifTL5SLmv7DivfNa', currency, 'testnet') // reject invalid address
      invalid('bd839e4f6fadb293ba580df5dea7814399989983', currency, 'testnet') // reject transaction id's
    }

    it('should return false for incorrect bitcoin addresses', function () {
      commonTests('bitcoin')
    })

    it('should return false for incorrect bitcoincash addresses', function () {
      commonTests('bitcoincash')
      // legacy
      invalid('38ty1qB68gHsiyZ8k3RPeCJ1wYQPrUCPPr', 'bitcoincash', 'both', ['cashaddr'])
      invalid('pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsvryq5wf0k', 'bitcoincash', 'both', ['cashaddr'])
      invalid('bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g', 'bitcoincash', 'both', ['legacy'])
      invalid('bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g', 'bitcoin', 'both', ['all'])
      invalid('bitcoincash:pp8skudq3x5hzw8ew7vzsw8tn4k8wxsqsv0lt0mf3g', 'bitcoincash', 'both', ['slpaddr'])
      invalid('12QeMLzSrB8XH8FvEzPMVoRxVAzTr5XM2y', 'bch', 'both', ['unknownformat'])
    })

    it('should return false for incorrect litecoin addresses', function () {
      commonTests('litecoin')
    })

    it('should return false for incorrect peercoin addresses', function () {
      commonTests('peercoin')
    })

    it('should return false for incorrect dogecoin addresses', function () {
      commonTests('dogecoin')
    })

    it('should return false for incorrect beavercoin addresses', function () {
      commonTests('beavercoin')
    })

    it('should return false for incorrect freicoin addresses', function () {
      commonTests('freicoin')
    })

    it('should return false for incorrect protoshares addresses', function () {
      commonTests('protoshares')
    })

    it('should return false for incorrect megacoin addresses', function () {
      commonTests('megacoin')
    })

    it('should return false for incorrect primecoin addresses', function () {
      commonTests('primecoin')
    })

    it('should return false for incorrect auroracoin addresses', function () {
      commonTests('auroracoin')
    })

    it('should return false for incorrect namecoin addresses', function () {
      commonTests('namecoin')
    })

    it('should return false for incorrect biocoin addresses', function () {
      commonTests('biocoin')
    })

    it('should return false for incorrect garlicoin addresses', function () {
      commonTests('garlicoin')
    })

    it('should return false for incorrect vertcoin addresses', function () {
      commonTests('vertcoin')
    })

    it('should return false for incorrect bitcoingold addresses', function () {
      commonTests('bitcoingold')
    })

    it('should return false for incorrect decred addresses', function () {
      commonTests('decred')
    })

    it('should return false for incorrect bankex addresses', function () {
      invalid('1SQHtwR5oJRKLfiWQ2APsAd9miUc4k2ez', 'bankex')
      invalid('116CGDLddrZhMrTwhCVJXtXQpxygTT1kHd', 'BKX')
      invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'bankex', 'testnet')
      invalid('mzBc4XEFSdzCDcTxAgf6EZXgsZWpztRhef', 'BKX', 'testnet')
    })

    it('should return false for incorrect digibyte addresses', function () {
      commonTests('digibyte')
    })

    it('should return false for incorrect eip55 addresses', function () {
      invalid('6xAff4d6793F584a473348EbA058deb8caad77a288', 'ethereum')
      invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereum')
      invalid('0XD1220A0CF47C7B9BE7A2E6BA89F429762E7B9ADB', 'ethereum')
      invalid('aFf4d6793f584a473348ebA058deb8caad77a2885', 'ethereum')
      invalid('0xff4d6793F584a473', 'ethereum')

      invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'ethereumclassic')
      invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'etherzero')
      invalid('0x02fcd51aAbB814FfFe17908fbc888A8975D839A5', 'callisto')
    })

    it('should return false for incorrect ripple addresses', function () {
      invalid('rG1QQv2nh2gr7RCZ1P8YYcBUKCCN633jCN', 'ripple')
      invalid('rDTXLQ7ZKZVKz33zJbHjgVShjsBnqMBhMN', 'XRP')
      invalid('6xAff4d6793F584a473348EbA058deb8ca', 'ripple')
      invalid('DJ53hTyLBdZp2wMi5BsCS3rtEL1ioYUkva', 'ripple')
    })

    it('should return false for incorrect dash addresses', function () {
      commonTests('dash')
    })

    it('should return false for incorrect neo addresses', function () {
      commonTests('neo')
      invalid('AR4QmqYENiZAD6oXe7ftm6eDcwtHk7rVTa', 'neo')
      invalid('AKDVzYGLczmykdtRaejgvWeZrvdkVEvQ10', 'NEO')
    })

    it('should return false for incorrect qtum addresses', function () {
      commonTests('qtum')
      invalid('QNPhBbVhDghASxcUh2vHotQUgNeLRFTcfb', 'qtum')
      invalid('QOPhBbVhDghASxcUh2vHotQUgNeLRFTcfa', 'QTUM')
    })

    it('should return false for incorrect votecoin addresses', function () {
      commonTests('votecoin')
      invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'votecoin')
      invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'VOT')
      invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'votecoin', 'testnet')
    })

    it('should return false for incorrect bitcoinz addresses', function () {
      commonTests('bitcoinz')
      invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'bitcoinz')
      invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'BTCZ')
      invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'bitcoinz', 'testnet')
    })

    it('should return false for incorrect zclassic addresses', function () {
      commonTests('zclassic')
      invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zclassic')
      invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZCL')
      invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zclassic', 'testnet')
    })

    it('should return false for incorrect hush addresses', function () {
      invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'hush')
      invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'HUSH')
      invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'hush', 'testnet')
    })

    it('should return false for incorrect zcash addresses', function () {
      commonTests('zcash')
      invalid('t1Y9yhDa5XEjgfnTgZoKddeSiEN1aoLkQxq', 'zcash')
      invalid('t3Yz22vK5z2LcKEdg16Yv4FFneEL1zg9ojd', 'ZEC')
      invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'zcash', 'testnet')
    })

    it('should return false for incorrect bitcoinprivate addresses', function () {
      commonTests('bitcoinprivate')
      invalid('b1Y4XXPFhwMb1SP33yhzn3h9qWXjujkgep4', 'bitcoinprivate')
      // invalid('bx....', 'BTCP');
      // invalid('nx....', 'bitcoinprivate', 'testnet');
    })

    it('should return false for incorrect snowgem addresses', function () {
      commonTests('snowgem')
      invalid('s1Yx7WBkjB4UH6qQjPp6Ysmtr1C1JiTK2Yw', 'snowgem')
      invalid('s3Y27MhkBRt3ha2UuxhjXaYF4DCnttTMnL1', 'SNG')
      invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'snowgem', 'testnet')
    })

    it('should return false for incorrect zencash addresses', function () {
      commonTests('zencash')
      invalid('znYiGGfYRepxkBjXYvA2kFrXiC351i9ta4z', 'zencash')
      invalid('zsYEdGnZCQ9G86LZFtbynMn1hYTVhn6eYCL', 'ZEN')
      invalid('ztYWMDLWjbruCJxKmmfAZiT6QAQdiv5F291', 'zencash', 'testnet')
    })

    it('should return false for incorrect komodo addresses', function () {
      commonTests('komodo')
      invalid('R9Y5HirAzqDcWrWGiJEL115dpV3QB3hobH', 'komodo')
      invalid('RAYj2KKVUohTu3hVdNJ4U6hQi7TNawpacH', 'KMD')
      // invalid('t2YNzUUx8mWBCRYPRezvA363EYXyEpHokyi', 'komodo', 'testnet');
    })
    it('should return false for incorrect BitTorrent addresses', () => {
      invalid('TJED82157WeEcP67wtKK5BeV6rMagJfeA4', 'btt')
    })
    it('should return false for incorrect Dent addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'dent')
    })
    it('should return false for incorrect Holo addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'hot')
    })
    it('should return false for incorrect Chainlink addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'link')
    })
    it('should return false for incorrect Metal addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'mtl')
    })
    it('should return false for incorrect Pundi X addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'npxs')
    })
    it('should return false for incorrect Stellar Lumens addresses', () => {
      invalid('GAHK7EEG2WWHVKDNT4CEQDZGKF2LGDSW2IVM4S5DP42RBW3K6BTODB4A', 'xlm')
    })
    it('should return false for incorrect Zilliqa addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'zil')
    })
    it('should return false for incorrect Populous addresses', () => {
      invalid('0x0E48746feb5603ceb03c1c181ccc55c953d989dc', 'ppt')
    })
    it('should return false for incorrect VeChain addresses', () => {
      invalid('0x53D2c8Ac73877675e31Fe6Aa35f1DEc7Da1E0864', 'vet')
      invalid('0x24628ab432B18B1a715E0952c87212814BDC7199', 'vet')
    })
    it('should return false for incorrect Ontology addresses', () => {
      invalid('AXu57dhdNDnA5drqJUM2KfoMqgaLwmZwow', 'ont')
      invalid('TNVv2v7eKL525gZ2YCmFnsB2FGNG4VeMHd', 'ont')
      invalid('TFYhfePLaZq2Y4BdKAnorm3XjjqTZcc9m4', 'ont')
      invalid('AecjxQsLGsSU3nmx92UuGGbF1fj7EsGrt2', 'ont')
    })
    it('should return false for incorrect NEM addresses', () => {
      invalid('NC64UFOWRO6AVMaFV2BFX2NT6W2GURK2EOX6FFMZ', 'xem')
      invalid('NC64UFOWRO6AVMFV2BFX2NT6W2GURK2EOX6FFMZSDF', 'xem')
    })
    it('should return false for incorrect USD Coin addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'usdc')
    })
    it('should return false for incorrect Bitcoin Diamond addresses', () => {
      invalid('1B3HxLb5EgDUdmiqDxGjfL6VNAbJNZ9Zaw', 'bcd')
    })
    it('should return false for incorrect Ravencoin addresses', () => {
      invalid('RFnM9d8sjAPn24yJi4VACWWWZjaYyFwd8k', 'rvn')
    })
    it('should return false for incorrect Bitshares addresses', () => {
      invalid('abcdefg-Dbts-1', 'bts')
    })
    it('should return false for incorrect ICON addresses', () => {
      invalid('gxde8ba8fd110625a0c47ecf29de308b8f5bd20ed6', 'icx')
      invalid('hxde8ba8fd110625a0c47ecf29de308b8f5bd20eD6', 'icx')
    })
    it('should return false for incorrect Paxos Standard Token addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'pax')
    })
    it('should return false for incorrect Aeternity addresses', () => {
      invalid('aj_AT2bs7LkqwKbPUj5waoqq1E7QYgRzXUbaBanDHXDVsaCJ8gRA', 'ae')
      invalid('ak_8QlnP9qXP3NpA4fskYZE7P1GfHzKZAMmoNuok7jJC5NqVYi21', 'ae')
      invalid('ak_8QxnP9qXP3NpA4fskYZE7P1GfHzKZAMmoNuok7jJC5NqVYi212', 'ae')
    })
    it('should return false for incorrect Siacoin addresses', () => {
      invalid('1acc2bc035b6606bd612b6114efea1102bd4499c0edf559469de7f40076f1c54e4eed3c5f1a', 'sc')
      invalid('1acc2bc035b6606bd612b6114efea1102bd4499c0edf559469de7f40076f1c54e4eed3c5f1ah', 'sc')
    })
    it('should return false for incorrect Cosmos addresses', () => {
      invalid('cosmo15v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e74', 'atom')
      invalid('cosmos25v50ymp6n5dn73erkqtmq0u8adpl8d3ujv2e74', 'atom')
      invalid('cosmos15v50ymp6n5dn73erkQtmq0u8adpl8d3ujv2e74', 'atom')
    })
    it('should return false for incorrect STEEM addresses', () => {
      invalid('meet--crypto8', 'steem')
      invalid('me.etcrypto8', 'steem')
      invalid('met.8etcrypto8', 'steem')
      invalid('me', 'steem')
      invalid('.', 'steem')
    })
    it('should return false for incorrect Enjin Coin addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'enj')
    })
    it('should return false for incorrect THETA addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'theta')
    })
    it('should return false for incorrect Stratis addresses', () => {
      invalid('SY7YwpMGvU42dkFzmFEkGWFr1BEikUwhPt', 'strat')
      invalid('AY7YwpMGvU42dkFzmFEkGWFr1BEikUwhPT', 'strat')
      invalid('SY7YwpMGvU42dkFzmFEkGWFr1BEikUwhPTT', 'strat')
    })
    it('should return false for incorrect Status addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'snt')
    })
    it('should return false for incorrect Golem addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'gnt')
    })
    it('should return false for incorrect aelf addresses', () => {
      invalid('0xda816e2122a8a39b0926bfa84edd3d42477e9efE', 'elf')
    })
    it('should return false for incorrect Ardor addresses', () => {
      invalid('ARDOR-HFNE-a2VE-SMV3-DCRZ8', 'ardr')
      invalid('ARDOR-HFNE-E2VE-SMV3-DCRZ', 'ardr')
      invalid('ARD0R-HFNE-E2VE-SMV3-DCRZ8', 'ardr')
    })
    it('should return false for incorrect Syscoin Addresses', () => {
      invalid('1EQUz46mFC5Wa4hbmfp7pzJa3tzNLWxyfr', 'sys')
      invalid('1B5mKdSwRNuBvE7uZAbFCbzi7MW1KH1PHT', 'sys')
      invalid('1MZZNZS5cPQu8THtpqcTF3bQASBQoWr6zo', 'sys')
      // invalid('sys1qzpuka2847ecyf62xw0996v7wh2ehkdaegf6annn', 'sys')
      invalid('dsfasys1qzpuka2847ecyf62xw0996v7wh2ehkdaegf6annn', 'sys')
    })
  })
})
