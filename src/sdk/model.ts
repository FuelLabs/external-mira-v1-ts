import {AssetId, BigNumberish, type BN} from "fuels";

export type PoolId = [AssetId, AssetId, boolean];

export type Asset = [AssetId, BigNumberish];

export type PoolMetadata = {
  poolId: PoolId,
  reserve0: BN,
  reserve1: BN,
  liquidity: Asset,
  decimals0: number,
  decimals1: number,
}

export type AmmFees = {
  lpFeeVolatile: BigNumberish,
  lpFeeStable: BigNumberish,
  protocolFeeVolatile: BigNumberish,
  protocolFeeStable: BigNumberish,
}

export type LpAssetInfo = {
  assetId: AssetId,
  name: String,
  symbol: String,
  decimals: number,
  totalSupply: BigNumberish,
}
