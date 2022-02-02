import AEValidator from "./ae_validator";
import ALGOValidator from "./algo_validator";
import ARDRValidator from "./ardr_validator";
import ATOMValidator from "./atom_validator";
import AUDValidator from "./aud_validator";
import BTCValidator from "./bitcoin_validator";
import BCHValidator from "./bitcoincash_validator";
import BNBValidator from "./bnb_validator";
import BTSValidator from "./bts_validator";
import ADAValidator from "./cardano_validator";
import EOSValidator from "./eos_validator";
import ETHValidator from "./ethereum_validator";
import HBARValidator from "./hbar_validator";
import ICXValidator from "./icx_validator";
import IOSTValidator from "./iost_validator";
import LSKValidator from "./lisk_validator";
import XLMValidator from "./lumen_validator";
import NANOValidator from "./nano_validator";
import NEMValidator from "./nem_validator";
import NXSValidator from "./nxs_validator";
import XRPValidator from "./ripple_validator";
import SCValidator from "./sc_validator";
import STEEMValidator from "./steem_validator";
import STXValidator from "./stx_validator";
import SYSValidator from "./sys_validator";
import {
  ICurrencies,
  TCurrency,
} from "./types/currencies.types";
import { HashFunctions } from "./types/hashFunctions.types";
import XTZValidator from "./xtz_validator";
import ZILValidator from "./zil_validator";

// defines P2PKH and P2SH address types for standard (prod) and testnet networks
const CURRENCIES_DATA: TCurrency[] = [
  {
    name: "Algorand",
    symbol: "algo",
    validator: ALGOValidator,
  },
  {
    name: "Bitcoin",
    symbol: "btc",
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "BitcoinCash",
    symbol: "bch",
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
    validator: BCHValidator,
  },
  {
    name: "BitcoinCash",
    symbol: "bcc", // Other asset code for Bitcoin Cash
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "LiteCoin",
    symbol: "ltc",
    addressTypes: { prod: ["30", "05", "32"], testnet: ["6f", "c4", "3a"] },
    validator: BTCValidator,
  },
  {
    name: "PeerCoin",
    symbol: "ppc",
    addressTypes: { prod: ["37", "75"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "Tron",
    symbol: "trx",
    addressTypes: { prod: ["41"] },
    validator: BTCValidator,
  },
  {
    name: "DogeCoin",
    symbol: "doge",
    addressTypes: { prod: ["1e", "16"], testnet: ["71", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "BeaverCoin",
    symbol: "bvc",
    addressTypes: { prod: ["19", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "FreiCoin",
    symbol: "frc",
    addressTypes: { prod: ["00", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "ProtoShares",
    symbol: "pts",
    addressTypes: { prod: ["38", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "MegaCoin",
    symbol: "mec",
    addressTypes: { prod: ["32", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "PrimeCoin",
    symbol: "xpm",
    addressTypes: { prod: ["17", "53"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "AuroraCoin",
    symbol: "aur",
    addressTypes: { prod: ["17", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "NameCoin",
    symbol: "nmc",
    addressTypes: { prod: ["34"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "BioCoin",
    symbol: "bio",
    addressTypes: { prod: ["19", "14"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "GarliCoin",
    symbol: "grlc",
    addressTypes: { prod: ["26", "05"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "VertCoin",
    symbol: "vtc",
    addressTypes: { prod: ["0x", "47"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "BitcoinGold",
    symbol: "btg",
    addressTypes: { prod: ["26", "17"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "Komodo",
    symbol: "kmd",
    addressTypes: { prod: ["3c", "55"], testnet: ["0", "5"] },
    validator: BTCValidator,
  },
  {
    name: "BitcoinZ",
    symbol: "btcz",
    expectedLength: 26,
    addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
    validator: BTCValidator,
  },
  {
    name: "BitcoinPrivate",
    symbol: "btcp",
    expectedLength: 26,
    addressTypes: { prod: ["1325", "13af"], testnet: ["1957", "19e0"] },
    validator: BTCValidator,
  },
  {
    name: "Hush",
    symbol: "hush",
    expectedLength: 26,
    addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
    validator: BTCValidator,
  },
  {
    name: "SnowGem",
    symbol: "sng",
    expectedLength: 26,
    addressTypes: { prod: ["1c28", "1c2d"], testnet: ["1d25", "1cba"] },
    validator: BTCValidator,
  },
  {
    name: "ZCash",
    symbol: "zec",
    expectedLength: 26,
    addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
    validator: BTCValidator,
  },
  {
    name: "ZClassic",
    symbol: "zcl",
    expectedLength: 26,
    addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
    validator: BTCValidator,
  },
  {
    name: "ZenCash",
    symbol: "zen",
    expectedLength: 26,
    addressTypes: { prod: ["2089", "2096"], testnet: ["2092", "2098"] },
    validator: BTCValidator,
  },
  {
    name: "VoteCoin",
    symbol: "vot",
    expectedLength: 26,
    addressTypes: { prod: ["1cb8", "1cbd"], testnet: ["1d25", "1cba"] },
    validator: BTCValidator,
  },
  {
    name: "Decred",
    symbol: "dcr",
    addressTypes: { prod: ["073f", "071a"], testnet: ["0f21", "0efc"] },
    hashFunction: HashFunctions.blake256,
    expectedLength: 26,
    validator: BTCValidator,
  },
  {
    name: "GameCredits",
    symbol: "game",
    addressTypes: { prod: ["26", "05"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "PIVX",
    symbol: "pivx",
    addressTypes: { prod: ["1e", "0d"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "SolarCoin",
    symbol: "slr",
    addressTypes: { prod: ["12", "05"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "MonaCoin",
    symbol: "mona",
    addressTypes: { prod: ["32", "37"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "DigiByte",
    symbol: "dgb",
    addressTypes: { prod: ["1e"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "Tether",
    symbol: "usdt",
    // addressTypes: { prod: ['00', '05'], testnet: ['6f', 'c4'] },
    // validator: BTCValidator
    validator: ETHValidator,
  },
  {
    name: "Ripple",
    symbol: "xrp",
    validator: XRPValidator,
  },
  {
    name: "Dash",
    symbol: "dash",
    addressTypes: { prod: ["4c", "10"], testnet: ["8c", "13"] },
    validator: BTCValidator,
  },
  {
    name: "Neo",
    symbol: "neo",
    addressTypes: { prod: ["17"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "NeoGas",
    symbol: "gas",
    addressTypes: { prod: ["17"], testnet: [] },
    validator: BTCValidator,
  },
  {
    name: "Qtum",
    symbol: "qtum",
    addressTypes: { prod: ["3a", "32"], testnet: ["6f", "c4"] },
    validator: BTCValidator,
  },
  {
    name: "Verge",
    symbol: "xvg",
    addressTypes: { prod: ["1e"], testnet: ["6F"] },
    validator: BTCValidator,
  },
  {
    name: "Waves",
    symbol: "waves",
    addressTypes: { prod: ["0157"], testnet: ["0154"] },
    expectedLength: 26,
    hashFunction: HashFunctions.blake256keccak256,
    regex: /^[a-zA-Z0-9]{35}$/,
    validator: BTCValidator,
  },
  {
    name: "Ethereum",
    symbol: "eth",
    validator: ETHValidator,
  },
  {
    name: "EtherZero",
    symbol: "etz",
    validator: ETHValidator,
  },
  {
    name: "EthereumClassic",
    symbol: "etc",
    validator: ETHValidator,
  },
  {
    name: "Enigma",
    symbol: "eng",
    validator: ETHValidator,
  },
  {
    name: "Callisto",
    symbol: "clo",
    validator: ETHValidator,
  },
  {
    name: "Bankex",
    symbol: "bkx",
    validator: ETHValidator,
  },
  {
    name: "Cardano",
    symbol: "ada",
    validator: ADAValidator,
  },
  {
    name: "Aragon",
    symbol: "ant",
    validator: ETHValidator,
  },
  {
    name: "BasicAttentionToken",
    symbol: "bat",
    validator: ETHValidator,
  },
  {
    name: "Bancor",
    symbol: "bnt",
    validator: ETHValidator,
  },
  {
    name: "Civic",
    symbol: "cvc",
    validator: ETHValidator,
  },
  {
    name: "District0x",
    symbol: "dnt",
    validator: ETHValidator,
  },
  {
    name: "Gnosis",
    symbol: "gno",
    validator: ETHValidator,
  },
  {
    name: "Golem",
    symbol: "gnt",
    validator: ETHValidator,
  },
  {
    name: "Matchpool",
    symbol: "gup",
    validator: ETHValidator,
  },
  {
    name: "Melon",
    symbol: "mln",
    validator: ETHValidator,
  },
  {
    name: "Numeraire",
    symbol: "nmr",
    validator: ETHValidator,
  },
  {
    name: "OmiseGO",
    symbol: "omg",
    validator: ETHValidator,
  },
  {
    name: "TenX",
    symbol: "pay",
    validator: ETHValidator,
  },
  {
    name: "RipioCreditNetwork",
    symbol: "rcn",
    validator: ETHValidator,
  },
  {
    name: "Augur",
    symbol: "rep",
    validator: ETHValidator,
  },
  {
    name: "iExec RLC",
    symbol: "rlc",
    validator: ETHValidator,
  },
  {
    name: "Salt",
    symbol: "salt",
    validator: ETHValidator,
  },
  {
    name: "Status",
    symbol: "snt",
    validator: ETHValidator,
  },
  {
    name: "Storj",
    symbol: "storj",
    validator: ETHValidator,
  },
  {
    name: "Swarm City",
    symbol: "swt",
    validator: ETHValidator,
  },
  {
    name: "TrueUSD",
    symbol: "tusd",
    validator: ETHValidator,
  },
  {
    name: "Wings",
    symbol: "wings",
    validator: ETHValidator,
  },
  {
    name: "0x",
    symbol: "zrx",
    validator: ETHValidator,
  },
  {
    name: "Expanse",
    symbol: "exp",
    validator: ETHValidator,
  },
  {
    name: "Viberate",
    symbol: "vib",
    validator: ETHValidator,
  },
  {
    name: "Odyssey",
    symbol: "ocn",
    validator: ETHValidator,
  },
  {
    name: "Polymath",
    symbol: "poly",
    validator: ETHValidator,
  },
  {
    name: "Storm",
    symbol: "storm",
    validator: ETHValidator,
  },
  {
    name: "Nano",
    symbol: "nano",
    validator: NANOValidator,
  },
  {
    name: "RaiBlocks",
    symbol: "xrb",
    validator: NANOValidator,
  },
  {
    name: "AdEx",
    symbol: "adx",
    validator: ETHValidator,
  },
  {
    name: "BinanceCoin",
    symbol: "bnb",
    validator: BNBValidator,
  },
  {
    name: "ETHOS",
    symbol: "ethos",
    validator: ETHValidator,
  },
  {
    name: "Bitquence",
    symbol: "bqx",
    validator: ETHValidator,
  },
  {
    name: "FunFair",
    symbol: "fun",
    validator: ETHValidator,
  },
  {
    name: "Monacao",
    symbol: "mco",
    validator: ETHValidator,
  },
  {
    name: "PowerLedger",
    symbol: "powr",
    validator: ETHValidator,
  },
  {
    name: "Substratum",
    symbol: "sub",
    validator: ETHValidator,
  },
  {
    name: "WaltonChain",
    symbol: "wtc",
    validator: ETHValidator,
  },
  {
    name: "Lisk",
    symbol: "lsk",
    validator: LSKValidator,
  },
  {
    name: "EOS",
    symbol: "eos",
    validator: EOSValidator,
  },
  {
    name: "BitTorrent",
    symbol: "btt",
    addressTypes: { prod: ["41"] },
    validator: BTCValidator,
  },
  {
    name: "Dent",
    symbol: "dent",
    validator: ETHValidator,
  },
  {
    name: "Holo",
    symbol: "HOT",
    validator: ETHValidator,
  },
  {
    name: "Chainlink",
    symbol: "link",
    validator: ETHValidator,
  },
  {
    name: "Metal",
    symbol: "mtl",
    validator: ETHValidator,
  },
  {
    name: "Pundi X",
    symbol: "npxs",
    validator: ETHValidator,
  },
  {
    name: "Stellar Lumens",
    symbol: "xlm",
    validator: XLMValidator,
  },
  {
    name: "Zilliqa",
    symbol: "zil",
    validator: ZILValidator,
  },
  {
    name: "Australian Dollars",
    symbol: "aud",
    validator: AUDValidator,
  },
  {
    name: "Syscoin",
    symbol: "sys",
    addressTypes: { prod: ["3f"] },
    validator: SYSValidator,
  },
  {
    name: "Populous",
    symbol: "ppt",
    validator: ETHValidator,
  },
  {
    name: "VeChain",
    symbol: "vet",
    validator: ETHValidator,
  },
  {
    name: "Ontology",
    symbol: "ont",
    validator: BTCValidator,
    addressTypes: { prod: ["17", "41"] },
  },
  {
    name: "Ontology Gas",
    symbol: "ong",
    validator: BTCValidator,
    addressTypes: { prod: ["17", "41"] },
  },
  {
    name: "NEM",
    symbol: "xem",
    validator: NEMValidator,
    addressTypes: { prod: ["17", "41"] },
  },
  {
    name: "USD Coin",
    symbol: "usdc",
    validator: ETHValidator,
  },
  {
    name: "Bitcoin Diamond",
    symbol: "bcd",
    validator: BTCValidator,
    addressTypes: { prod: ["00"] },
  },
  {
    name: "Ravencoin",
    symbol: "rvn",
    validator: BTCValidator,
    addressTypes: { prod: ["3c"] },
  },
  {
    name: "Bitshares",
    symbol: "bts",
    validator: BTSValidator,
  },
  {
    name: "ICON",
    symbol: "icx",
    validator: ICXValidator,
  },
  {
    name: "Paxos Standard Token",
    symbol: "pax",
    validator: ETHValidator,
  },
  {
    name: "Aeternity",
    symbol: "ae",
    validator: AEValidator,
  },
  {
    name: "Siacoin",
    symbol: "sc",
    validator: SCValidator,
  },
  {
    name: "Cosmos",
    symbol: "atom",
    validator: ATOMValidator,
  },
  {
    name: "STEEM",
    symbol: "steem",
    validator: STEEMValidator,
  },
  {
    name: "Blockstack",
    symbol: "stx",
    validator: STXValidator,
  },
  {
    name: "Enjin Coin",
    symbol: "enj",
    validator: ETHValidator,
  },
  {
    name: "THETA",
    symbol: "theta",
    validator: ETHValidator,
  },
  {
    name: "Stratis",
    symbol: "strat",
    validator: BTCValidator,
    addressTypes: { prod: ["3f"] },
  },
  {
    name: "Golem",
    symbol: "gnt",
    validator: ETHValidator,
  },
  {
    name: "aelf",
    symbol: "ELF",
    validator: ETHValidator,
  },
  {
    name: "Ardor",
    symbol: "ardr",
    validator: ARDRValidator,
  },
  {
    name: "Horizen",
    symbol: "zen",
    expectedLength: 26,
    addressTypes: { prod: ["2089", "2096"], testnet: ["2092", "2098"] },
    validator: BTCValidator,
  },
  {
    name: "Aave",
    symbol: "lend",
    validator: ETHValidator,
  },
  {
    name: "Nexus",
    symbol: "nxs",
    validator: NXSValidator,
  },
  {
    name: "Internet of Services",
    symbol: "IOST",
    validator: IOSTValidator,
  },
  {
    name: "Decentraland",
    symbol: "MANA",
    validator: ETHValidator,
  },
  {
    name: "iExec RLC",
    symbol: "RLC",
    validator: ETHValidator,
  },
  {
    name: "Tezos",
    symbol: "XTZ",
    validator: XTZValidator,
  },
  {
    name: "Hedera Hashgraph",
    symbol: "hbar",
    validator: HBARValidator,
  },
];

const currencies: ICurrencies = {
  getByNameOrSymbol: (currencyNameOrSymbol) => {
    const normalizeNameOrSymbol = (nameOrSymbol) => nameOrSymbol.replace(" ", "").toLowerCase()
    const normalizedNameOrSymbol = normalizeNameOrSymbol(currencyNameOrSymbol); // Remove spaces and make lowercase
    return CURRENCIES_DATA.find((currency) => {
      return (
        normalizeNameOrSymbol(currency.name) === normalizedNameOrSymbol ||
        normalizeNameOrSymbol(currency.symbol) === normalizedNameOrSymbol
      );
    });
  },
  CURRENCIES: CURRENCIES_DATA,
};

export default currencies;
