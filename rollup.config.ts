import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import { uglify } from "rollup-plugin-uglify";

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

    nodeResolve({
      browser: true, // This disabled binding for some crypto modules like keccak
    }),

    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs(),

    uglify(),
    // Compile TypeScript files
    // MUST BE AFTER nodeResolve
    typescript({
      useTsconfigDeclarationDir: true,
      objectHashIgnoreUnknownHack: false,
      clean: true,
    }),
  ]
};
