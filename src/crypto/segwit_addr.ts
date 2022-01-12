// Copyright (c) 2017 Pieter Wuille
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import { bech32 } from "./utils";

function convertbits(data, frombits, tobits, pad) {
  let acc = 0;
  let bits = 0;
  const ret = [];
  const maxv = (1 << tobits) - 1;
  for (let p = 0; p < data.length; ++p) {
    const value = data[p];
    if (value < 0 || value >> frombits !== 0) {
      return null;
    }
    acc = (acc << frombits) | value;
    bits += frombits;
    while (bits >= tobits) {
      bits -= tobits;
      ret.push((acc >> bits) & maxv);
    }
  }
  if (pad) {
    if (bits > 0) {
      ret.push((acc << (tobits - bits)) & maxv);
    }
  } else if (bits >= frombits || (acc << (tobits - bits)) & maxv) {
    return null;
  }
  return ret;
}

function decode(hrp, addr) {
  const dec = bech32.decode(addr);
  if (
    dec === null ||
    dec.hrp !== hrp ||
    dec.data.length < 1 ||
    dec.data[0] > 16
  ) {
    return null;
  }
  const res = convertbits(dec.data.slice(1), 5, 8, false);
  if (res === null || res.length < 2 || res.length > 40) {
    return null;
  }
  if (dec.data[0] === 0 && res.length !== 20 && res.length !== 32) {
    return null;
  }
  return { version: dec.data[0], program: res };
}

function encode(hrp, version, program) {
  const ret = bech32.encode(
    hrp,
    [version].concat(convertbits(program, 8, 5, true))
  );
  if (decode(hrp, ret) === null) {
    return null;
  }
  return ret;
}

function isValidAddress(address) {
  let hrp = "bc";
  let ret = decode(hrp, address);

  if (ret === null) {
    hrp = "tb";
    ret = decode(hrp, address);
  }

  if (ret === null) {
    return false;
  }

  const recreate = encode(hrp, ret.version, ret.program);
  return recreate === address.toLowerCase();
}

export default {
  encode,
  decode,
  isValidAddress,
};
