const JSBI = require("jsbi");
// Add ability to serialize JSBI.BigInt as JSON
// JSBI.BigInt.prototype.toJSON = function () {
//   return this.toString();
// };
// // Returns a string where the value is divided by 10^divisor and cut off to decimalPlaces decimal places
// // Pass in sep to change the decimal point. No rounding done at the moment.
// JSBI.BigInt.prototype.decimal = function (divisor, decimalPlaces, sep) {
//   let quotient = this / 10n ** JSBI.BigInt(divisor);
//   let remainder = (this % 10n ** JSBI.BigInt(divisor)).toString();
//   remainder = "0".repeat(Number(divisor) - remainder.length) + remainder;
//   return quotient + (sep || ".") + remainder.substr(0, Number(decimalPlaces));
// };

class SushiContracts {
  constructor(web3) {
    this.abis = {
      erc20: [
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "spender", type: "address" },
            { name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "from", type: "address" },
            { name: "to", type: "address" },
            { name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "spender", type: "address" },
            { name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ name: "value", type: "uint256" }],
          name: "burn",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ name: "owner", type: "address" }],
          name: "balanceOf",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "spender", type: "address" },
            { name: "subtractedValue", type: "uint256" },
          ],
          name: "decreaseAllowance",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { name: "to", type: "address" },
            { name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { name: "owner", type: "address" },
            { name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "from", type: "address" },
            { indexed: true, name: "to", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, name: "owner", type: "address" },
            { indexed: true, name: "spender", type: "address" },
            { indexed: false, name: "value", type: "uint256" },
          ],
          name: "Approval",
          type: "event",
        },
      ],
      uniswapV2Pair: [
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount0",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount1",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "Burn",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount0",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount1",
              type: "uint256",
            },
          ],
          name: "Mint",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "sender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount0In",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount1In",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount0Out",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount1Out",
              type: "uint256",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
          ],
          name: "Swap",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "uint112",
              name: "reserve0",
              type: "uint112",
            },
            {
              indexed: false,
              internalType: "uint112",
              name: "reserve1",
              type: "uint112",
            },
          ],
          name: "Sync",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          constant: true,
          inputs: [],
          name: "DOMAIN_SEPARATOR",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "MINIMUM_LIQUIDITY",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "PERMIT_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "address", name: "", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ internalType: "address", name: "to", type: "address" }],
          name: "burn",
          outputs: [
            { internalType: "uint256", name: "amount0", type: "uint256" },
            { internalType: "uint256", name: "amount1", type: "uint256" },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "factory",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "getReserves",
          outputs: [
            { internalType: "uint112", name: "_reserve0", type: "uint112" },
            { internalType: "uint112", name: "_reserve1", type: "uint112" },
            {
              internalType: "uint32",
              name: "_blockTimestampLast",
              type: "uint32",
            },
          ],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "_token0", type: "address" },
            { internalType: "address", name: "_token1", type: "address" },
          ],
          name: "initialize",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "kLast",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ internalType: "address", name: "to", type: "address" }],
          name: "mint",
          outputs: [
            { internalType: "uint256", name: "liquidity", type: "uint256" },
          ],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
            { internalType: "uint256", name: "deadline", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "permit",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "price0CumulativeLast",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "price1CumulativeLast",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [{ internalType: "address", name: "to", type: "address" }],
          name: "skim",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "uint256", name: "amount0Out", type: "uint256" },
            { internalType: "uint256", name: "amount1Out", type: "uint256" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "bytes", name: "data", type: "bytes" },
          ],
          name: "swap",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [],
          name: "sync",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "token0",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "token1",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: true,
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          payable: false,
          stateMutability: "view",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          constant: false,
          inputs: [
            { internalType: "address", name: "from", type: "address" },
            { internalType: "address", name: "to", type: "address" },
            { internalType: "uint256", name: "value", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          payable: false,
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      sushiToken: [
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "owner",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "spender",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Approval",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegator",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "fromDelegate",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "toDelegate",
              type: "address",
            },
          ],
          name: "DelegateChanged",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "delegate",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "previousBalance",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "newBalance",
              type: "uint256",
            },
          ],
          name: "DelegateVotesChanged",
          type: "event",
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
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: true,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "value",
              type: "uint256",
            },
          ],
          name: "Transfer",
          type: "event",
        },
        {
          inputs: [],
          name: "DELEGATION_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "DOMAIN_TYPEHASH",
          outputs: [{ internalType: "bytes32", name: "", type: "bytes32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "owner", type: "address" },
            { internalType: "address", name: "spender", type: "address" },
          ],
          name: "allowance",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "approve",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "balanceOf",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint32", name: "", type: "uint32" },
          ],
          name: "checkpoints",
          outputs: [
            { internalType: "uint32", name: "fromBlock", type: "uint32" },
            { internalType: "uint256", name: "votes", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "decimals",
          outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            {
              internalType: "uint256",
              name: "subtractedValue",
              type: "uint256",
            },
          ],
          name: "decreaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
          ],
          name: "delegate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegatee", type: "address" },
            { internalType: "uint256", name: "nonce", type: "uint256" },
            { internalType: "uint256", name: "expiry", type: "uint256" },
            { internalType: "uint8", name: "v", type: "uint8" },
            { internalType: "bytes32", name: "r", type: "bytes32" },
            { internalType: "bytes32", name: "s", type: "bytes32" },
          ],
          name: "delegateBySig",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "delegator", type: "address" },
          ],
          name: "delegates",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
          ],
          name: "getCurrentVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "account", type: "address" },
            { internalType: "uint256", name: "blockNumber", type: "uint256" },
          ],
          name: "getPriorVotes",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "spender", type: "address" },
            { internalType: "uint256", name: "addedValue", type: "uint256" },
          ],
          name: "increaseAllowance",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_to", type: "address" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "mint",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "name",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "nonces",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "", type: "address" }],
          name: "numCheckpoints",
          outputs: [{ internalType: "uint32", name: "", type: "uint32" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          name: "symbol",
          outputs: [{ internalType: "string", name: "", type: "string" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalSupply",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transfer",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "sender", type: "address" },
            { internalType: "address", name: "recipient", type: "address" },
            { internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "transferFrom",
          outputs: [{ internalType: "bool", name: "", type: "bool" }],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      masterChef: [
        {
          inputs: [
            {
              internalType: "contract SushiToken",
              name: "_sushi",
              type: "address",
            },
            { internalType: "address", name: "_devaddr", type: "address" },
            {
              internalType: "uint256",
              name: "_sushiPerBlock",
              type: "uint256",
            },
            { internalType: "uint256", name: "_startBlock", type: "uint256" },
            {
              internalType: "uint256",
              name: "_bonusEndBlock",
              type: "uint256",
            },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pid",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Deposit",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pid",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "EmergencyWithdraw",
          type: "event",
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
          anonymous: false,
          inputs: [
            {
              indexed: true,
              internalType: "address",
              name: "user",
              type: "address",
            },
            {
              indexed: true,
              internalType: "uint256",
              name: "pid",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "Withdraw",
          type: "event",
        },
        {
          inputs: [],
          name: "BONUS_MULTIPLIER",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_allocPoint", type: "uint256" },
            {
              internalType: "contract IERC20",
              name: "_lpToken",
              type: "address",
            },
            { internalType: "bool", name: "_withUpdate", type: "bool" },
          ],
          name: "add",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "bonusEndBlock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "deposit",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "_devaddr", type: "address" },
          ],
          name: "dev",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "devaddr",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
          name: "emergencyWithdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_from", type: "uint256" },
            { internalType: "uint256", name: "_to", type: "uint256" },
          ],
          name: "getMultiplier",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "massUpdatePools",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
          name: "migrate",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "migrator",
          outputs: [
            {
              internalType: "contract IMigratorChef",
              name: "",
              type: "address",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "address", name: "_user", type: "address" },
          ],
          name: "pendingSushi",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          name: "poolInfo",
          outputs: [
            {
              internalType: "contract IERC20",
              name: "lpToken",
              type: "address",
            },
            { internalType: "uint256", name: "allocPoint", type: "uint256" },
            {
              internalType: "uint256",
              name: "lastRewardBlock",
              type: "uint256",
            },
            {
              internalType: "uint256",
              name: "accSushiPerShare",
              type: "uint256",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "poolLength",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
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
          inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "uint256", name: "_allocPoint", type: "uint256" },
            { internalType: "bool", name: "_withUpdate", type: "bool" },
          ],
          name: "set",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            {
              internalType: "contract IMigratorChef",
              name: "_migrator",
              type: "address",
            },
          ],
          name: "setMigrator",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [],
          name: "startBlock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sushi",
          outputs: [
            { internalType: "contract SushiToken", name: "", type: "address" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "sushiPerBlock",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "totalAllocPoint",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [{ internalType: "uint256", name: "_pid", type: "uint256" }],
          name: "updatePool",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "", type: "uint256" },
            { internalType: "address", name: "", type: "address" },
          ],
          name: "userInfo",
          outputs: [
            { internalType: "uint256", name: "amount", type: "uint256" },
            { internalType: "uint256", name: "rewardDebt", type: "uint256" },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "uint256", name: "_pid", type: "uint256" },
            { internalType: "uint256", name: "_amount", type: "uint256" },
          ],
          name: "withdraw",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      baseInfo: [
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
          inputs: [],
          name: "getInfo",
          outputs: [
            {
              components: [
                {
                  internalType: "uint256",
                  name: "BONUS_MULTIPLIER",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "bonusEndBlock",
                  type: "uint256",
                },
                { internalType: "address", name: "devaddr", type: "address" },
                { internalType: "address", name: "migrator", type: "address" },
                { internalType: "address", name: "owner", type: "address" },
                {
                  internalType: "uint256",
                  name: "startBlock",
                  type: "uint256",
                },
                { internalType: "address", name: "sushi", type: "address" },
                {
                  internalType: "uint256",
                  name: "sushiPerBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "totalAllocPoint",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "sushiTotalSupply",
                  type: "uint256",
                },
                {
                  internalType: "address",
                  name: "sushiOwner",
                  type: "address",
                },
              ],
              internalType: "struct BaseInfo",
              name: "",
              type: "tuple",
            },
            {
              components: [
                { internalType: "string", name: "logo", type: "string" },
                { internalType: "string", name: "name", type: "string" },
                {
                  internalType: "contract IUniswapPair",
                  name: "lpToken",
                  type: "address",
                },
                {
                  internalType: "uint256",
                  name: "allocPoint",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "lastRewardBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "accSushiPerShare",
                  type: "uint256",
                },
                {
                  internalType: "contract IERC20",
                  name: "token0",
                  type: "address",
                },
                {
                  internalType: "contract IERC20",
                  name: "token1",
                  type: "address",
                },
                { internalType: "string", name: "token0name", type: "string" },
                { internalType: "string", name: "token1name", type: "string" },
                {
                  internalType: "string",
                  name: "token0symbol",
                  type: "string",
                },
                {
                  internalType: "string",
                  name: "token1symbol",
                  type: "string",
                },
                {
                  internalType: "uint256",
                  name: "token0decimals",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "token1decimals",
                  type: "uint256",
                },
              ],
              internalType: "struct PoolInfo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          inputs: [
            { internalType: "address", name: "names_", type: "address" },
            { internalType: "address", name: "masterChef_", type: "address" },
          ],
          name: "setContracts",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
      userInfo: [
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
          inputs: [{ internalType: "address", name: "token", type: "address" }],
          name: "getETHRate",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "getMyInfoInUSDT",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "block", type: "uint256" },
                { internalType: "uint256", name: "timestamp", type: "uint256" },
                { internalType: "uint256", name: "eth_rate", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "sushiBalance",
                  type: "uint256",
                },
                { internalType: "address", name: "delegates", type: "address" },
                {
                  internalType: "uint256",
                  name: "currentVotes",
                  type: "uint256",
                },
                { internalType: "uint256", name: "nonces", type: "uint256" },
              ],
              internalType: "struct UserInfo",
              name: "",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "lastRewardBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "accSushiPerShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "balance", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "totalSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "uniBalance",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "uniTotalSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "uniAllowance",
                  type: "uint256",
                },
                { internalType: "uint256", name: "reserve0", type: "uint256" },
                { internalType: "uint256", name: "reserve1", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "token0rate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "token1rate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rewardDebt",
                  type: "uint256",
                },
                { internalType: "uint256", name: "pending", type: "uint256" },
              ],
              internalType: "struct UserPoolInfo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "who", type: "address" },
            { internalType: "address", name: "currency", type: "address" },
          ],
          name: "getUserInfo",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "block", type: "uint256" },
                { internalType: "uint256", name: "timestamp", type: "uint256" },
                { internalType: "uint256", name: "eth_rate", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "sushiBalance",
                  type: "uint256",
                },
                { internalType: "address", name: "delegates", type: "address" },
                {
                  internalType: "uint256",
                  name: "currentVotes",
                  type: "uint256",
                },
                { internalType: "uint256", name: "nonces", type: "uint256" },
              ],
              internalType: "struct UserInfo",
              name: "",
              type: "tuple",
            },
            {
              components: [
                {
                  internalType: "uint256",
                  name: "lastRewardBlock",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "accSushiPerShare",
                  type: "uint256",
                },
                { internalType: "uint256", name: "balance", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "totalSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "uniBalance",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "uniTotalSupply",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "uniAllowance",
                  type: "uint256",
                },
                { internalType: "uint256", name: "reserve0", type: "uint256" },
                { internalType: "uint256", name: "reserve1", type: "uint256" },
                {
                  internalType: "uint256",
                  name: "token0rate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "token1rate",
                  type: "uint256",
                },
                {
                  internalType: "uint256",
                  name: "rewardDebt",
                  type: "uint256",
                },
                { internalType: "uint256", name: "pending", type: "uint256" },
              ],
              internalType: "struct UserPoolInfo[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [],
          name: "owner",
          outputs: [{ internalType: "address", name: "", type: "address" }],
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
          inputs: [
            { internalType: "address", name: "uniFactory_", type: "address" },
            { internalType: "address", name: "masterChef_", type: "address" },
            { internalType: "address", name: "sushi_", type: "address" },
            { internalType: "address", name: "WETH_", type: "address" },
          ],
          name: "setContracts",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        {
          inputs: [
            { internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "transferOwnership",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
      ],
    };
  }

  update(web3) {
    let chainId = web3.givenProvider.chainId;
    if (chainId == "0x1") {
      this.token = new web3.eth.Contract(
        this.abis.sushiToken,
        "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2"
      );
      this.chef = new web3.eth.Contract(
        this.abis.masterChef,
        "0xc2EdaD668740f1aA35E4D8f227fB8E17dcA888Cd"
      );
      this.baseInfo = new web3.eth.Contract(
        this.abis.baseInfo,
        "0xBb7dF27209ea65Ae02Fe02E76cC1C0247765dcFF"
      );
      this.userInfo = new web3.eth.Contract(
        this.abis.userInfo,
        "0x39Ec6247dE60d885239aD0bcE1bC9f1553f4EF75"
      );
    } else if (chainId == "0x3") {
      this.token = new web3.eth.Contract(
        this.abis.sushiToken,
        "0x81db9c598b3ebbdc92426422fc0a1d06e77195ec"
      );
      this.chef = new web3.eth.Contract(
        this.abis.masterChef,
        "0xFF281cEF43111A83f09C656734Fa03E6375d432A"
      );
      this.baseInfo = new web3.eth.Contract(
        this.abis.baseInfo,
        "0x39Bb002c6400f7F1679090fdAc722BC08e2a8C1e"
      );
      this.userInfo = new web3.eth.Contract(
        this.abis.userInfo,
        "0xe8f852908A61e074032382E9B5058F86fe2a0ea7"
      );
    } else {
      console.log("Unknown network");
    }
  }
}

class SushiSwap {
  constructor(web3, currency) {
    this.base = { loaded: false };
    this.pools = [];
    this.contracts = new SushiContracts(web3);
    this.update(web3, currency);
  }

  auto_update(callback, insta_call, web3) {
    // Call the callback directly once on subscribe.
    if (insta_call) {
      callback();
    }
    this.subscription = web3.eth.subscribe("newBlockHeaders", callback);
  }

  update(web3, currency) {
    this.contracts.update(web3);

    this.web3 = web3;

    let chainId = web3.givenProvider.chainId;
    if (chainId == "0x1") {
      this.currency = currency || "0xdac17f958d2ee523a2206206994597c13d831ec7";
      this.sushi_pool = 12;
    } else if (chainId == "0x3") {
      this.currency = currency || "0x292c703A980fbFce4708864Ae6E8C40584DAF323";
      this.sushi_pool = 1;
    }
  }

  ETHtoCurrency(value) {
    return (value * this.base.eth_rate) / JSBI.BigInt("1000000000000000000");
  }

  async getInfo(address) {
    if (!this.base.loaded) {
      var result = await this.contracts.baseInfo.methods
        .getInfo()
        .call({ gas: 5000000 });
      this.base = {};
      this.base.BONUS_MULTIPLIER = JSBI.BigInt(result[0].BONUS_MULTIPLIER); // Multiplier during the bonus period
      this.base.bonusEndBlock = JSBI.BigInt(result[0].bonusEndBlock); // Last block of the bonus period
      this.base.devaddr = result[0].devaddr; // Address that receives 10% of SUSHI distributed
      this.base.migrator = result[0].migrator; // Address of migration contract
      this.base.owner = result[0].owner; // Address of the owner of the masterchef contract
      this.base.startBlock = JSBI.BigInt(result[0].startBlock); // Block at which SUSHI distribution started
      this.base.sushi = result[0].sushi; // Address of the sushi token contract
      this.base.sushiPerBlock = JSBI.BigInt(result[0].sushiPerBlock); // Base number of sushi distributed per block
      this.base.totalAllocPoint = JSBI.BigInt(result[0].totalAllocPoint); // Total allocPoints of all pools, this must match adding all the pool allocPoints

      this.base.sushiTotalSupply = JSBI.BigInt(result[0].sushiTotalSupply); // Total amount of minted SUSHI
      this.base.sushiOwner = result[0].sushiOwner; // Owner of the SUSHI token contract

      this.pools = [];
      for (var i in result[1]) {
        let pool = {};
        pool.id = this.pools.length;
        pool.logo = result[1][i].logo; // The character used as logo for the pool
        pool.name = result[1][i].name; // The name of the pool, like Tutle Tether
        pool.lpToken = result[1][i].lpToken; // Address of LP token contract. Currently uniswap, soon SushiSwap
        pool.allocPoint = JSBI.BigInt(result[1][i].allocPoint); // How many allocation points assigned to this pool. Share of allocPoints out of total determines sushi/block.
        pool.lastRewardBlock = JSBI.BigInt(result[1][i].lastRewardBlock); // Last block number that SUSHIs accululation occured.
        pool.accSushiPerShare = JSBI.BigInt(result[1][i].accSushiPerShare); // Accumulated SUSHIs per share, times 1e12.
        pool.token0 = result[1][i].token0; // Token address (first) of the token in the LP pair
        pool.token1 = result[1][i].token1; // Token address (second) of the token in the LP pair
        pool.token0name = result[1][i].token0name; // Name of the first token
        pool.token1name = result[1][i].token1name; // Name of the second token
        pool.token0symbol = result[1][i].token0symbol; // Symbol of the first token
        pool.token1symbol = result[1][i].token1symbol; // Symbol of the second token
        pool.token0decimals = JSBI.BigInt(result[1][i].token0decimals); // Decimals of the first token
        pool.token1decimals = JSBI.BigInt(result[1][i].token1decimals); // Decimals of the scond token
        this.pools.push(pool);
      }
    }

    var result = await this.contracts.userInfo.methods
      .getUserInfo(address, this.currency)
      .call({ gas: 5000000 });
    this.base.block = JSBI.BigInt(result[0].block); // The block for which this info it valid
    this.base.timestamp = JSBI.BigInt(result[0].timestamp); // The timestamp of that block?
    this.base.eth_rate = JSBI.BigInt(result[0].eth_rate); // The 'price' of 1 wrapped Ether expressed in currency token
    this.base.sushiBalance = JSBI.BigInt(result[0].sushiBalance); // User's balance of SUSHI (not pending)
    this.base.delegates = result[0].delegates; // See smart contract, just included it for completeness
    this.base.currentVotes = JSBI.BigInt(result[0].currentVotes); // See smart contract, just included it for completeness
    this.base.nonces = JSBI.BigInt(result[0].nonces); // See smart contract, just included it for completeness
    this.base.pending = JSBI.BigInt(0); // Total pending SUSHI
    this.base.multiplier =
      this.base.block < this.base.bonusEndBlock
        ? this.base.BONUS_MULTIPLIER
        : JSBI.BigInt(1); // Current base multiplier

    this.base.sushiRate = JSBI.BigInt(result[1][this.sushi_pool].token0rate); // The amount of SUSHIs in 1 wrapped Ether, times 1e18. This is taken from the ETH/SUSHI pool
    this.base.sushiValueInETH =
      (JSBI.BigInt("1000000000000000000") *
        JSBI.BigInt("1000000000000000000")) /
      this.base.sushiRate;
    this.base.sushiValueInCurrency = this.ETHtoCurrency(
      this.base.sushiValueInETH
    );

    for (i in result[1]) {
      let pool = this.pools[i];
      pool.lastRewardBlock = JSBI.BigInt(result[1][i].lastRewardBlock); // Last block number that SUSHIs accululation occured
      pool.accSushiPerShare = JSBI.BigInt(result[1][i].accSushiPerShare); // Accumulated SUSHIs per share, times 1e12
      pool.balance = JSBI.BigInt(result[1][i].balance); // User's balance of pool tokens staked in the Masterchef contract
      pool.totalSupply = JSBI.BigInt(result[1][i].totalSupply); // Total balance of pool tokens in the Masterchef contract
      pool.uniBalance = JSBI.BigInt(result[1][i].uniBalance); // Users's balance of lp tokens not staked
      pool.uniTotalSupply = JSBI.BigInt(result[1][i].uniTotalSupply); // TotalSupply of lp tokens
      pool.reserve0 = JSBI.BigInt(result[1][i].reserve0); // Reserve of token0 in lp token pool
      pool.reserve1 = JSBI.BigInt(result[1][i].reserve1); // Reserve of token1 in lp token pool
      pool.token0rate = JSBI.BigInt(result[1][i].token0rate); // The amount of token0 in 1 wrapped Ether, times 1e18.
      pool.token1rate = JSBI.BigInt(result[1][i].token1rate); // The amount of token1 in 1 wrapped Ether, times 1e18.
      pool.rewardDebt = JSBI.BigInt(result[1][i].rewardDebt); // Used internally to calculate pending SUSHI, just use pending.
      pool.pending = JSBI.BigInt(result[1][i].pending); // Pending SUSHI
      this.base.pending += pool.pending;

      pool.sushiPerBlock =
        (this.base.sushiPerBlock * this.base.multiplier * pool.allocPoint) /
        this.base.totalAllocPoint; // SUSHI rewarded to this pool every block
      pool.sushiPerBlockInETH =
        (pool.sushiPerBlock * JSBI.BigInt("1000000000000000000")) /
        this.base.sushiRate; // SUSHI value rewarded to this pool every block in ETH
      pool.sushiPerBlockInCurrency =
        (pool.sushiPerBlockInETH * this.base.eth_rate) /
        JSBI.BigInt("1000000000000000000"); // SUSHI value rewarded to this pool every block in currncy tokens

      pool.shareOfUniswapPool = pool.uniTotalSupply
        ? (pool.totalSupply * JSBI.BigInt("1000000000000000000")) /
          pool.uniTotalSupply
        : 0n; // Staked share of all lp tokens. 100% = 1e18.
      pool.totalStakedToken0 =
        (pool.reserve0 * pool.shareOfUniswapPool) /
        JSBI.BigInt("1000000000000000000"); // Staked lp tokens contain this much of token0.
      pool.totalStakedToken1 =
        (pool.reserve1 * pool.shareOfUniswapPool) /
        JSBI.BigInt("1000000000000000000"); // Staked lp tokens contain this much of token1.
      pool.valueStakedToken0 =
        (pool.totalStakedToken0 * JSBI.BigInt("1000000000000000000")) /
        pool.token0rate; // Value of token0 in staked lp tokens in wrapped Ether
      pool.valueStakedToken1 =
        (pool.totalStakedToken1 * JSBI.BigInt("1000000000000000000")) /
        pool.token1rate; // Value of token1 in staked lp tokens in wrapped Ether

      pool.shareOfPool = pool.totalSupply
        ? (pool.balance * JSBI.BigInt("1000000000000000000")) / pool.totalSupply
        : 0n;
      pool.userStakedToken0 =
        (pool.totalStakedToken0 * pool.shareOfPool) /
        JSBI.BigInt("1000000000000000000"); // Staked lp tokens contain this much of token0.
      pool.userStakedToken1 =
        (pool.totalStakedToken1 * pool.shareOfPool) /
        JSBI.BigInt("1000000000000000000"); // Staked lp tokens contain this much of token1.
      pool.valueUserStakedToken0 =
        (pool.userStakedToken0 * JSBI.BigInt("1000000000000000000")) /
        pool.token0rate; // Value of token0 in staked lp tokens in wrapped Ether
      pool.valueUserStakedToken1 =
        (pool.userStakedToken1 * JSBI.BigInt("1000000000000000000")) /
        pool.token1rate; // Value of token1 in staked lp tokens in wrapped Ether

      pool.hourlyROI =
        pool.valueStakedToken0 + pool.valueStakedToken1
          ? (pool.sushiPerBlockInETH * JSBI.BigInt(276000000)) /
            (pool.valueStakedToken0 + pool.valueStakedToken1)
          : 0n; // Hourly ROI
      pool.dailyROI =
        pool.valueStakedToken0 + pool.valueStakedToken1
          ? (pool.sushiPerBlockInETH * JSBI.BigInt(6613000000)) /
            (pool.valueStakedToken0 + pool.valueStakedToken1)
          : 0n; // Daily ROI
      pool.monthlyROI = pool.dailyROI * JSBI.BigInt(30); // Monthly ROI
      pool.yearlyROI = pool.dailyROI * JSBI.BigInt(365); // Yearly ROI

      pool.valueInCurrency =
        ((pool.valueStakedToken0 + pool.valueStakedToken1) *
          this.base.eth_rate) /
        JSBI.BigInt("1000000000000000000"); // Value of lp tokens staked in currency
    }
    this.base.loaded = true;
    return this;
  }

  async getTokenList() {
    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          this.tokenlist = JSON.parse(xhr.responseText);
          console.log(this.tokenlist);
          resolve(this.tokenlist);
        } else {
          reject();
        }
      };
      xhr.open("GET", "tokenlist.json");
      xhr.send();
    });
  }

  async harvest(from, pool_id) {
    console.log(pool_id);
    this.contracts.chef.methods.withdraw(pool_id, 0).send({ from: from });
  }

  async stake(amount) {
    //this.contracts.masterChef.methods.
  }

  close() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

export default SushiSwap;
