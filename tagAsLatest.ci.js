const Path = require('path')
const Fs = require('fs')
const packageJson = Fs.readFileSync(Path.join(__dirname, 'package.json'))
const { spawnSync } = require('child_process')

const packageManifest = JSON.parse(packageJson)

console.log('yarn tag add ' + packageManifest.name + '@' + packageManifest.version + ' latest')

const yarn = spawnSync('yarn' + (process.platform === 'win32' ? '.cmd' : ''), ['tag', 'add', packageManifest.name + '@' + packageManifest.version, 'latest'])

console.log('Error:  ----------- \n' + yarn.stderr.toString())
console.log('Result: ----------- \n' + yarn.stdout.toString())
