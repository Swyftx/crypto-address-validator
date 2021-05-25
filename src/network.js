const BTCValidator = require('./bitcoin_validator')
const ETHValidator = require('./ethereum_validator')


const NETWORKS = [{
    name: 'BTC',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  },
  {
    name: 'ETH',
    validator: ETHValidator
  },
  {
    name: 'BSC',
    validator: ETHValidator
  },
  {
    name: 'TRX',
    addressTypes: { prod: ['41'] },
    validator: BTCValidator
  },
  {
    name: 'OMNI',
    addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
    validator: BTCValidator
  } 
]


module.exports = {
  getByNetwork: function (networkByName) {
    var networkLowerCase = networkByName.replace(' ', '').toLowerCase() // Remove spaces and make lowercase
    return NETWORKS.find(function (network) {
      return network.name.replace(' ', '').toLowerCase() === networkLowerCase 
    })
  },
  NETWORKS
}
