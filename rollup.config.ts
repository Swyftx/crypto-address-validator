import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';

const pkg = require('./package.json');

const libraryName = 'crypto-address-validator';

export default {
  input: `src/wallet_address_validator.ts`,
  external: ['readable-stream', 'readable-stream/transform'],
  output: [
    {
      format: 'umd',
      file: pkg.main,
      name: libraryName,
      sourcemap: true,
    },
    {
      format: 'es',
      file: pkg.module,
      sourcemap: true,
    },
  ],
  // Order is important, look for packages github/npm
  plugins: [

    nodeResolve(),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    // Compile TypeScript files
    // MUST BE AFTER nodeResolve
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: false,
      clean: true,
    }),

    // Resolve source maps to the original source
    sourceMaps(),
  ]
};
