import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 1,
    SEPOLIA = 11155111,
    JAPAN_OPEN_CHAIN_TESTNET = 10081
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
export declare const FACTORY_ADDRESS = "0xd923b31eB8D9efF140B6C3feF31d9bae05440d72";
export declare const INIT_CODE_HASH = "0xaae7dc513491fb17b541bd4a9953285ddf2bb20a773374baecc88c4ebada0767";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
declare type AddressMap = {
    [chainId: number]: string;
};
export declare const V2_ROUTER_ADDRESSES: AddressMap;
export {};
