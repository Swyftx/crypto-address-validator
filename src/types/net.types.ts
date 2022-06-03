export enum NetTypes {
  prod = "prod",
  testnet = "testnet",
  both = "both",
}

export type TAddressType = string;

export type TAddressTypes = {
  [key in NetTypes]?: TAddressType[];
} & {
  [NetTypes.prod]: TAddressType[];
};
