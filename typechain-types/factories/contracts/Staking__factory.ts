/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  BigNumberish,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Staking, StakingInterface } from "../../contracts/Staking";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_rewardRate",
        type: "uint256",
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
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "calculateReward",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyUnstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newRate",
        type: "uint256",
      },
    ],
    name: "setRewardRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052603c60035534801561001557600080fd5b506040516112d13803806112d183398181016040528101906100379190610266565b33600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036100aa5760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016100a191906102b5565b60405180910390fd5b6100b98161010960201b60201c565b5081600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508060028190555050506102d0565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006101fd826101d2565b9050919050565b61020d816101f2565b811461021857600080fd5b50565b60008151905061022a81610204565b92915050565b6000819050919050565b61024381610230565b811461024e57600080fd5b50565b6000815190506102608161023a565b92915050565b6000806040838503121561027d5761027c6101cd565b5b600061028b8582860161021b565b925050602061029c85828601610251565b9150509250929050565b6102af816101f2565b82525050565b60006020820190506102ca60008301846102a6565b92915050565b610ff2806102df6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c80638005a7de116100715780638005a7de146101445780638da5cb5b146101625780639e447fc614610180578063a694fc3a1461019c578063d82e3962146101b8578063f2fde38b146101e8576100b4565b806316934fc4146100b95780632def6620146100ea578063715018a6146100f457806372f702f3146100fe5780637589cf2f1461011c5780637b0a47ee14610126575b600080fd5b6100d360048036038101906100ce9190610ae2565b610204565b6040516100e1929190610b28565b60405180910390f35b6100f2610228565b005b6100fc610434565b005b610106610448565b6040516101139190610bb0565b60405180910390f35b61012461046e565b005b61012e61060d565b60405161013b9190610bcb565b60405180910390f35b61014c610613565b6040516101599190610bcb565b60405180910390f35b61016a610619565b6040516101779190610bf5565b60405180910390f35b61019a60048036038101906101959190610c3c565b610642565b005b6101b660048036038101906101b19190610c3c565b610654565b005b6101d260048036038101906101cd9190610ae2565b6107f6565b6040516101df9190610bcb565b60405180910390f35b61020260048036038101906101fd9190610ae2565b6108a6565b005b60046020528060005260406000206000915090508060000154908060010154905082565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180604001604052908160008201548152602001600182015481525050905060008160000151116102d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102c890610cc6565b60405180910390fd5b60035481602001516102e39190610d15565b421015610325576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161031c90610d95565b60405180910390fd5b6000610330336107f6565b905060008183600001516103449190610d15565b90506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016103eb929190610db5565b6020604051808303816000875af115801561040a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061042e9190610e16565b50505050565b61043c61092c565b61044660006109b3565b565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206040518060400160405290816000820154815260200160018201548152505090506000816000015111610517576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050e90610cc6565b60405180910390fd5b6000816000015190506000600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000181905550600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663a9059cbb33836040518363ffffffff1660e01b81526004016105c5929190610db5565b6020604051808303816000875af11580156105e4573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106089190610e16565b505050565b60025481565b60035481565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61064a61092c565b8060028190555050565b60008111610697576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068e90610e8f565b60405180910390fd5b60006106a2336107f6565b9050600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166323b872dd3330856040518463ffffffff1660e01b815260040161070393929190610eaf565b6020604051808303816000875af1158015610722573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107469190610e16565b5080826107539190610d15565b600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160008282546107a49190610d15565b9250508190555042600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101819055505050565b600080600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020604051806040016040529081600082015481526020016001820154815250509050600081602001514261086b9190610ee6565b9050670de0b6b3a76400006002548284600001516108899190610f1a565b6108939190610f1a565b61089d9190610f8b565b92505050919050565b6108ae61092c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036109205760006040517f1e4fbdf70000000000000000000000000000000000000000000000000000000081526004016109179190610bf5565b60405180910390fd5b610929816109b3565b50565b610934610a77565b73ffffffffffffffffffffffffffffffffffffffff16610952610619565b73ffffffffffffffffffffffffffffffffffffffff16146109b157610975610a77565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016109a89190610bf5565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600033905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610aaf82610a84565b9050919050565b610abf81610aa4565b8114610aca57600080fd5b50565b600081359050610adc81610ab6565b92915050565b600060208284031215610af857610af7610a7f565b5b6000610b0684828501610acd565b91505092915050565b6000819050919050565b610b2281610b0f565b82525050565b6000604082019050610b3d6000830185610b19565b610b4a6020830184610b19565b9392505050565b6000819050919050565b6000610b76610b71610b6c84610a84565b610b51565b610a84565b9050919050565b6000610b8882610b5b565b9050919050565b6000610b9a82610b7d565b9050919050565b610baa81610b8f565b82525050565b6000602082019050610bc56000830184610ba1565b92915050565b6000602082019050610be06000830184610b19565b92915050565b610bef81610aa4565b82525050565b6000602082019050610c0a6000830184610be6565b92915050565b610c1981610b0f565b8114610c2457600080fd5b50565b600081359050610c3681610c10565b92915050565b600060208284031215610c5257610c51610a7f565b5b6000610c6084828501610c27565b91505092915050565b600082825260208201905092915050565b7f4e6f20746f6b656e73207374616b656400000000000000000000000000000000600082015250565b6000610cb0601083610c69565b9150610cbb82610c7a565b602082019050919050565b60006020820190508181036000830152610cdf81610ca3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d2082610b0f565b9150610d2b83610b0f565b9250828201905080821115610d4357610d42610ce6565b5b92915050565b7f546f6b656e7320617265207374696c6c206c6f636b6564000000000000000000600082015250565b6000610d7f601783610c69565b9150610d8a82610d49565b602082019050919050565b60006020820190508181036000830152610dae81610d72565b9050919050565b6000604082019050610dca6000830185610be6565b610dd76020830184610b19565b9392505050565b60008115159050919050565b610df381610dde565b8114610dfe57600080fd5b50565b600081519050610e1081610dea565b92915050565b600060208284031215610e2c57610e2b610a7f565b5b6000610e3a84828501610e01565b91505092915050565b7f43616e6e6f74207374616b65203020746f6b656e730000000000000000000000600082015250565b6000610e79601583610c69565b9150610e8482610e43565b602082019050919050565b60006020820190508181036000830152610ea881610e6c565b9050919050565b6000606082019050610ec46000830186610be6565b610ed16020830185610be6565b610ede6040830184610b19565b949350505050565b6000610ef182610b0f565b9150610efc83610b0f565b9250828203905081811115610f1457610f13610ce6565b5b92915050565b6000610f2582610b0f565b9150610f3083610b0f565b9250828202610f3e81610b0f565b91508282048414831517610f5557610f54610ce6565b5b5092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000610f9682610b0f565b9150610fa183610b0f565b925082610fb157610fb0610f5c565b5b82820490509291505056fea26469706673582212209653b82bc46ef157854ed5751ef4486a17dc09fc0707ac627be0098d782bfd7364736f6c634300081b0033";

type StakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Staking__factory extends ContractFactory {
  constructor(...args: StakingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _stakingToken: AddressLike,
    _rewardRate: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(
      _stakingToken,
      _rewardRate,
      overrides || {}
    );
  }
  override deploy(
    _stakingToken: AddressLike,
    _rewardRate: BigNumberish,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_stakingToken, _rewardRate, overrides || {}) as Promise<
      Staking & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Staking__factory {
    return super.connect(runner) as Staking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StakingInterface {
    return new Interface(_abi) as StakingInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Staking {
    return new Contract(address, _abi, runner) as unknown as Staking;
  }
}
