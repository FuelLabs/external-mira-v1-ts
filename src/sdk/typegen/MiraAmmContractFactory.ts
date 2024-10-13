/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.95.0
*/

import { Contract, ContractFactory, decompressBytecode } from "fuels";
import type { Provider, Account, DeployContractOptions, DeployContractResult } from "fuels";

import { MiraAmmContract } from "./MiraAmmContract";

const bytecode = decompressBytecode("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");

export class MiraAmmContractFactory extends ContractFactory {

  static readonly bytecode = bytecode;

  constructor(accountOrProvider: Account | Provider) {
    super(bytecode, MiraAmmContract.abi, accountOrProvider);
  }

  override deploy<TContract extends Contract = Contract>(
    deployOptions?: DeployContractOptions
  ): Promise<DeployContractResult<TContract>> {
    return super.deploy({
      storageSlots: MiraAmmContract.storageSlots,
      ...deployOptions,
    });
  }

  static async deploy (
    wallet: Account,
    options: DeployContractOptions = {}
  ): Promise<DeployContractResult<MiraAmmContract>> {
    const factory = new MiraAmmContractFactory(wallet);
    return factory.deploy(options);
  }
}
