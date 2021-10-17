/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PRBProxyRegistry,
  PRBProxyRegistryInterface,
} from "../PRBProxyRegistry";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IPRBProxyFactory",
        name: "factory_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "PRBProxyRegistry__ProxyAlreadyExists",
    type: "error",
  },
  {
    inputs: [],
    name: "deploy",
    outputs: [
      {
        internalType: "address payable",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "deployFor",
    outputs: [
      {
        internalType: "address payable",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "factory",
    outputs: [
      {
        internalType: "contract IPRBProxyFactory",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "getCurrentProxy",
    outputs: [
      {
        internalType: "contract IPRBProxy",
        name: "proxy",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506040516103a93803806103a983398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b610316806100936000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c806374912cd214610051578063775c300c146100805780639956317414610088578063c45a0155146100b4575b600080fd5b61006461005f3660046102c8565b6100c7565b6040516001600160a01b03909116815260200160405180910390f35b6100646102a0565b6100646100963660046102c8565b6001600160a01b039081166000908152600160205260409020541690565b600054610064906001600160a01b031681565b6001600160a01b0380821660009081526001602052604081205490911680158015906101745750826001600160a01b0316816001600160a01b0316638da5cb5b6040518163ffffffff1660e01b815260040160206040518083038186803b15801561013157600080fd5b505afa158015610145573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061016991906102ec565b6001600160a01b0316145b156101ba576040517f18b530ed0000000000000000000000000000000000000000000000000000000081526001600160a01b038416600482015260240160405180910390fd5b6000546040517f74912cd20000000000000000000000000000000000000000000000000000000081526001600160a01b038581166004830152909116906374912cd290602401602060405180830381600087803b15801561021a57600080fd5b505af115801561022e573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061025291906102ec565b6001600160a01b03938416600090815260016020526040902080547fffffffffffffffffffffffff000000000000000000000000000000000000000016948216949094179093555090919050565b60006102ab336100c7565b905090565b6001600160a01b03811681146102c557600080fd5b50565b6000602082840312156102da57600080fd5b81356102e5816102b0565b9392505050565b6000602082840312156102fe57600080fd5b81516102e5816102b056fea164736f6c6343000809000a";

export class PRBProxyRegistry__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PRBProxyRegistry> {
    return super.deploy(factory_, overrides || {}) as Promise<PRBProxyRegistry>;
  }
  getDeployTransaction(
    factory_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(factory_, overrides || {});
  }
  attach(address: string): PRBProxyRegistry {
    return super.attach(address) as PRBProxyRegistry;
  }
  connect(signer: Signer): PRBProxyRegistry__factory {
    return super.connect(signer) as PRBProxyRegistry__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PRBProxyRegistryInterface {
    return new utils.Interface(_abi) as PRBProxyRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PRBProxyRegistry {
    return new Contract(address, _abi, signerOrProvider) as PRBProxyRegistry;
  }
}
