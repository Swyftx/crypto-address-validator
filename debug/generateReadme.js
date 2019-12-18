const path = require('path')
const fs = require('fs')
const currencies = require(path.join(__dirname, '..', 'src', 'currencies'))
const gzip = require('node-gzip').gzip
const prettysize = require('prettysize')

const templateReplace = (template, target, replacement) => {
  return template.replace(new RegExp(`{{${target}}}`, 'g'), replacement)
}

// spit out details for readme.md

Promise.all([
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, 'readmeTemplate.md'), 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      resolve(data)
    })
  }),
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '..', 'dist', 'wallet-address-validator.min.js'), (err, data) => {
      if (err) {
        return reject(err)
      }
      gzip(data).then(gzipped => {
        resolve({
          original: data,
          gzipped
        })
      }).catch(err => {
        reject(err)
      })
    })
  }),
  new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, '..', 'package.json'), 'utf8', (err, data) => {
      if (err) {
        return reject(err)
      }
      try {
        resolve(JSON.parse(data))
      } catch (err) {
        reject(err)
      }
    })
  })
]).then(results => {
  let template = results[0]
  let compressed = results[1]
  let packageJson = results[2]

  template = templateReplace(template, 'numCurrencies', Object.keys(currencies.CURRENCIES).length - 1)

  let sortedCurrencies = currencies.CURRENCIES
    .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)

  template = templateReplace(template, 'supportedAssets',
    sortedCurrencies
      .map(c => `* ${c.name}/${c.symbol} \`'${c.name}'\` or \`'${c.symbol}'\``)
      .join('\n'))

  template = templateReplace(template, 'minGzSize', prettysize(compressed.gzipped.byteLength))
  template = templateReplace(template, 'minGzReduction', parseInt((compressed.original.byteLength - compressed.gzipped.byteLength) / compressed.original.byteLength * 1000) / 10)

  let keywords = sortedCurrencies.reduce((acc, c) => {
    acc.push(c.name, c.symbol)
    return acc
  }, [])
  keywords.push('segwit', 'altcoin', 'javascript', 'browser', 'nodejs', 'wallet', 'address')

  packageJson.keywords = Array.from(new Map(keywords.map(k => [k.toLowerCase(), k])).values()) // returns only unique

  return Promise.all([
    new Promise((resolve, reject) => {
      fs.writeFile(path.join(__dirname, '..', 'README.md'), template, (err) => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    }),
    new Promise((resolve, reject) => {
      fs.writeFile(path.join(__dirname, '..', 'dist', 'wallet-address-validator.min.js.gz'), compressed.gzipped, (err) => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    }),
    new Promise((resolve, reject) => {
      fs.writeFile(path.join(__dirname, '..', 'package.json'), JSON.stringify(packageJson, null, 2) + '\n', (err) => {
        if (err) {
          return reject(err)
        }
        resolve()
      })
    })
  ])
}).catch(err => {
  console.log(err)
})

// fs.readFile(path.join(__dirname, 'readmeTemplate.md'), 'utf8', async (err, data) => {
//   if (err) {
//     throw err
//   }
//   console.log(
//     templateReplace(
//       templateReplace(data, 'supportedAssets',
//         currencies.CURRENCIES
//           .sort((a, b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1)
//           .map(c => `* ${c.name}/${c.symbol} \`'${c.name}'\` or \`'${c.symbol}'\` `)
//           .join('\n')),
//       'minGzSize', await gzip(path.join(__dirname, '..', 'dist', 'wallet-address-validator.min.')))
// })
