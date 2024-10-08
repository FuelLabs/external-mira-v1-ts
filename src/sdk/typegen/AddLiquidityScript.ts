/* Autogenerated file. Do not edit manually. */

/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/consistent-type-imports */

/*
  Fuels version: 0.94.9
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

export type AddLiquidityScriptInputs = [pool_id: [AssetIdInput, AssetIdInput, boolean], amount_0_desired: BigNumberish, amount_1_desired: BigNumberish, amount_0_min: BigNumberish, amount_1_min: BigNumberish, recipient: IdentityInput, deadline: BigNumberish];
export type AddLiquidityScriptOutput = AssetOutput;

export type AddLiquidityScriptConfigurables = Partial<{
  AMM_CONTRACT_ID: ContractIdInput;
}>;

const abi = {
  "programType": "script",
  "specVersion": "1",
  "encodingVersion": "1",
  "concreteTypes": [
    {
      "type": "(struct std::asset_id::AssetId, struct std::asset_id::AssetId, bool)",
      "concreteTypeId": "a95e1fcceb1451b8a76471f593f66c4a52ca04bde3c227c746ad7aaf988de5c6",
      "metadataTypeId": 0
    },
    {
      "type": "enum std::identity::Identity",
      "concreteTypeId": "ab7cd04e05be58e3fc15d424c2c4a57f824a2a2d97d67252440a3925ebdc1335",
      "metadataTypeId": 3
    },
    {
      "type": "str",
      "concreteTypeId": "8c25cb3686462e9a86d2883c5688a22fe738b0bbc85f458d2d2b5f3f667c6d5a"
    },
    {
      "type": "struct interfaces::data_structures::Asset",
      "concreteTypeId": "affa437f314a241a60e97d006b83a963a5eaf0e0185484335e9ed03cd078d7f8",
      "metadataTypeId": 4
    },
    {
      "type": "struct std::contract_id::ContractId",
      "concreteTypeId": "29c10735d33b5159f0c71ee1dbd17b36a3e69e41f00fab0d42e1bd9f428d8a54",
      "metadataTypeId": 7
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
      "type": "(_, _, _)",
      "metadataTypeId": 0,
      "components": [
        {
          "name": "__tuple_element",
          "typeId": 6
        },
        {
          "name": "__tuple_element",
          "typeId": 6
        },
        {
          "name": "__tuple_element",
          "typeId": 2
        }
      ]
    },
    {
      "type": "b256",
      "metadataTypeId": 1
    },
    {
      "type": "bool",
      "metadataTypeId": 2
    },
    {
      "type": "enum std::identity::Identity",
      "metadataTypeId": 3,
      "components": [
        {
          "name": "Address",
          "typeId": 5
        },
        {
          "name": "ContractId",
          "typeId": 7
        }
      ]
    },
    {
      "type": "struct interfaces::data_structures::Asset",
      "metadataTypeId": 4,
      "components": [
        {
          "name": "id",
          "typeId": 6
        },
        {
          "name": "amount",
          "typeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        }
      ]
    },
    {
      "type": "struct std::address::Address",
      "metadataTypeId": 5,
      "components": [
        {
          "name": "bits",
          "typeId": 1
        }
      ]
    },
    {
      "type": "struct std::asset_id::AssetId",
      "metadataTypeId": 6,
      "components": [
        {
          "name": "bits",
          "typeId": 1
        }
      ]
    },
    {
      "type": "struct std::contract_id::ContractId",
      "metadataTypeId": 7,
      "components": [
        {
          "name": "bits",
          "typeId": 1
        }
      ]
    }
  ],
  "functions": [
    {
      "inputs": [
        {
          "name": "pool_id",
          "concreteTypeId": "a95e1fcceb1451b8a76471f593f66c4a52ca04bde3c227c746ad7aaf988de5c6"
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
          "name": "amount_0_min",
          "concreteTypeId": "1506e6f44c1d6291cdf46395a8e573276a4fa79e8ace3fc891e092ef32d1b0a0"
        },
        {
          "name": "amount_1_min",
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
      "offset": 9808
    }
  ]
};

const bytecode = decompressBytecode('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');

export class AddLiquidityScript extends Script<AddLiquidityScriptInputs, AddLiquidityScriptOutput> {

  static readonly abi = abi;
  static readonly bytecode = bytecode;

  constructor(wallet: Account) {
    super(bytecode, abi, wallet);
  }
}
