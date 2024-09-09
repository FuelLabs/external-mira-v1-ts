/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.3
*/

import {
  Account,
  BigNumberish,
  BN,
  decompressBytecode,
  Script,
  StrSlice,
} from 'fuels';

import type { Enum } from "./common";

export type IdentityInput = Enum<{ Address: AddressInput, ContractId: ContractIdInput }>;
export type IdentityOutput = Enum<{ Address: AddressOutput, ContractId: ContractIdOutput }>;

export type AddressInput = { bits: string };
export type AddressOutput = AddressInput;
export type AssetInput = { id: AssetIdInput, amount: BigNumberish };
export type AssetOutput = { id: AssetIdOutput, amount: BN };
export type AssetIdInput = { bits: string };
export type AssetIdOutput = AssetIdInput;
export type ContractIdInput = { bits: string };
export type ContractIdOutput = ContractIdInput;

export type CreatePoolAndAddLiquidityScriptInputs = [token_0_contract_id: ContractIdInput, token_0_sub_id: string, token_1_contract_id: ContractIdInput, token_1_sub_id: string, is_stable: boolean, amount_0_desired: BigNumberish, amount_1_desired: BigNumberish, recipient: IdentityInput, deadline: BigNumberish];
export type CreatePoolAndAddLiquidityScriptOutput = AssetOutput;

export type CreatePoolAndAddLiquidityScriptConfigurables = Partial<{
  AMM_CONTRACT_ID: ContractIdInput;
}>;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "b256",
      "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
    },
    {
      "type": "bool",
      "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 0
    },
    {
      "type": "str",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    },
    {
      "type": "struct interfaces::data_structures::Asset",
      "concreteTypeId": "affa437f314a241a60e97d006b83a963a5eaf0e0185484335e9ed03cd078d7f8",
      "metadataTypeId": 1
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 4
    },
    {
      "type": "u32",
      "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
    },
    {
      "type": "u64",
      "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
    }
  ],
  "metadataTypes": [
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "Address",
          "typeId": 2
        },
        {
          "name": "ContractId",
          "typeId": 4
        }
      ]
    },
    {
      "type": "struct interfaces::data_structures::Asset",
      "metadataTypeId": 1,
      "components": [
        {
          "name": "id",
          "typeId": 3
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 2,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "bits",
          "typeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "token_0_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "token_0_sub_id",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "token_1_contract_id",
          "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54"
        },
        {
          "name": "token_1_sub_id",
          "concreteTypeId": "7c5ee1cecf5f8eacd1284feb5f0bf2bdea533a51e2f0c9aabe9236d335989f3b"
        },
        {
          "name": "is_stable",
          "concreteTypeId": "b760f44fa5965c2474a3b471467a22c43185152129295af588b022ae50b50903"
        },
        {
          "name": "amount_0_desired",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "amount_1_desired",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "recipient",
          "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335"
        },
        {
          "name": "deadline",
          "concreteTypeId": "d7649d428b9ff33d188ecbf38a7e4d8fd167fa01b2e10fe9a8f9308e52f1d7cc"
        }
      ],
      "name": "main",
      "output": "affa437f314a241a60e97d006b83a963a5eaf0e0185484335e9ed03cd078d7f8",
      "attributes": null
    }
  ],
  "loggedTypes": [
    {
      "logId": "10098701174489624218",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    }
  ],
  "messagesTypes": [],
  "configurables": [
    {
      "name": "AMM_CONTRACT_ID",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "offset": 8296
    }
  ]
};

const bytecode = decompressBytecode('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');

export class CreatePoolAndAddLiquidityScript extends Script<CreatePoolAndAddLiquidityScriptInputs, CreatePoolAndAddLiquidityScriptOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
