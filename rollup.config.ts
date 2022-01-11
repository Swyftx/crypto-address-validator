import commonjs from 'rollup-plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const libraryName = 'crypto-address-validator';

export default {
  input: `src/wallet_address_validator.ts`,
  // external: ['buffer/'],
  output: [
    { format: 'umd', file: pkg.main, name: libraryName, sourcemap: true},
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
  ],
  // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
  plugins: [
    // Compile TypeScript files
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: false,
      clean: true,

    }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      ignoreGlobal: true
    }),
    nodeResolve({
      preferBuiltins: false
    }),

    // Resolve source maps to the original source
    sourceMaps(),
  ]
};
