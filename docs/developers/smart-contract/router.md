---
id: router
title: Router
sidebar_position: 2
---

:::warning
DipoleSwap is based on Uniswap v2. Read the [Uniswap v2 documentation](https://docs.uniswap.org/protocol/V2/introduction).\
For more in-depth information on the core contract logic, read the [Uniswap v2 Core whitepaper](https://github.com/Uniswap/docs/blob/main/static/whitepaper.pdf).
:::

## Read functions

### WETH

`function WETH() external pure returns (address);`

Returns the canonical address for [PlatON: WLAT token](https://scan.platon.network/contract-detail?address=0x02406D561069cBed27eF8Ea20AFD41779A90e2Bf) (WETH being a vestige from Ethereum network origins).

### factory

`function factory() external pure returns (address);`

Returns the canonical address for DipoleFactory.

:::warning
For explanations of the following, view the [Uniswap v2 Internal Functions documentation](https://uniswap.org/docs/v2/smart-contracts/library/#internal-functions).
:::

### getAmountOut

`function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) internal pure returns (uint amountOut);`

### getAmountIn

`function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) internal pure returns (uint amountIn);`

### getAmountsOut

`function getAmountsOut(uint amountIn, address[] memory path) internal view returns (uint[] memory amounts);`

### getAmountsIn

`function getAmountsIn(uint amountOut, address[] memory path) internal view returns (uint[] memory amounts);`

### quote

`function quote(uint amountA, uint reserveA, uint reserveB) internal pure returns (uint amountB);`

## Write functions

### addLiquidity

```
function addLiquidity(
  address tokenA,
  address tokenB,
  uint amountADesired,
  uint amountBDesired,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB, uint liquidity);
```

Adds liquidity to a PRC20⇄PRC20 pool.

| Name           | Type      |                                                                   |
| -------------- | --------- | ----------------------------------------------------------------- |
| tokenA         | `address` | The contract address of one token from your liquidity pair.       |
| tokenB         | `address` | The contract address of the other token from your liquidity pair. |
| amountADesired | `uint`    | The amount of tokenA you'd like to provide as liquidity.          |
| amountBDesired | `uint`    | The amount of tokenA you'd like to provide as liquidity.          |
| amountAMin     | `uint`    | The minimum amount of tokenA to provide (slippage impact).        |
| amountBMin     | `uint`    | The minimum amount of tokenB to provide (slippage impact).        |
| to             | `address` | Address of LP Token recipient.                                    |
| deadline       | `uint`    | Unix timestamp deadline by which the transaction must confirm.    |

### addLiquidityETH

```
function addLiquidityETH(
  address token,
  uint amountTokenDesired,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external payable returns (uint amountToken, uint amountETH, uint liquidity);
```

Adds liquidity to a PRC20⇄WLAT pool.

| Name               | Type      |                                                                |
| ------------------ | --------- | -------------------------------------------------------------- |
| addLiquidityETH    | `uint`    | The payable amount in LAT.                                     |
| token              | `address` | The contract address of the token to add liquidity.            |
| amountTokenDesired | `uint`    | The amount of the token you'd like to provide as liquidity.    |
| amountTokenMin     | `uint`    | The minimum amount of the token to provide (slippage impact).  |
| amountETHMin       | `uint`    | The minimum amount of LAT to provide (slippage impact).        |
| to                 | `address` | Address of LP Token recipient.                                 |
| deadline           | `uint`    | Unix timestamp deadline by which the transaction must confirm. |

### removeLiquidity

```
function removeLiquidity(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline
) external returns (uint amountA, uint amountB);
```

Removes liquidity from a PRC20⇄PRC20 pool.

| Name       | Type      |                                                                   |
| ---------- | --------- | ----------------------------------------------------------------- |
| tokenA     | `address` | The contract address of one token from your liquidity pair.       |
| tokenB     | `address` | The contract address of the other token from your liquidity pair. |
| liquidity  | `uint`    | The amount of LP Tokens to remove.                                |
| amountAMin | `uint`    | The minimum amount of tokenA to remove (slippage impact).         |
| amountBMin | `uint`    | The minimum amount of tokenB to remove (slippage impact).         |
| to         | `address` | Address of LP Token recipient.                                    |
| deadline   | `uint`    | Unix timestamp deadline by which the transaction must confirm.    |

### removeLiquidityETH

```
function removeLiquidityETH(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountToken, uint amountETH);
```

Removes liquidity from a PRC20⇄WLAT pool.

| Name           | Type      |                                                                |
| -------------- | --------- | -------------------------------------------------------------- |
| token          | `address` | The contract address of the token to remove liquidity.         |
| liquidity      | `uint`    | The amount of LP Tokens to remove.                             |
| amountTokenMin | `uint`    | The minimum amount of the token to remove (slippage impact).   |
| amountETHMin   | `uint`    | The minimum amount of LAT to remove (slippage impact).         |
| to             | `address` | Address of LP Token recipient.                                 |
| deadline       | `uint`    | Unix timestamp deadline by which the transaction must confirm. |

### removeLiquidityETHSupportingFeeOnTransferTokens

```
function removeLiquidityETHSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline
) external returns (uint amountETH);
```

Removes liquidity from a PRC20⇄WLAT for tokens that take a fee on transfer.

| Name           | Type      |                                                                |
| -------------- | --------- | -------------------------------------------------------------- |
| token          | `address` | The contract address of the token to remove liquidity.         |
| liquidity      | `uint`    | The amount of LP Tokens to remove.                             |
| amountTokenMin | `uint`    | The minimum amount of the token to remove (slippage impact).   |
| amountETHMin   | `uint`    | The minimum amount of LAT to remove (slippage impact).         |
| to             | `address` | Address of LP Token recipient.                                 |
| deadline       | `uint`    | Unix timestamp deadline by which the transaction must confirm. |

### removeLiquidityETHWithPermit

```
function removeLiquidityETHWithPermit(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountToken, uint amountETH);
```

Removes liquidity from a PRC20⇄WLAT and receives LAT, without pre-approval, via permit.

| Name           | Type      |                                                                                     |
| -------------- | --------- | ----------------------------------------------------------------------------------- |
| token          | `address` | The contract address of the token to remove liquidity.                              |
| liquidity      | `uint`    | The amount of LP Tokens to remove.                                                  |
| amountTokenMin | `uint`    | The minimum amount of the token to remove (slippage impact).                        |
| amountETHMin   | `uint`    | The minimum amount of LAT to remove (slippage impact).                              |
| to             | `address` | Address of LP Token recipient.                                                      |
| deadline       | `uint`    | Unix timestamp deadline by which the transaction must confirm.                      |
| approveMax     | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`. |
| v              | `uint8`   | The v component of the permit signature.                                            |
| r              | `bytes32` | The r component of the permit signature.                                            |
| s              | `bytes32` | The s component of the permit signature.                                            |

### removeLiquidityETHWithPermitSupportingFeeOnTransferTokens

```
function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
  address token,
  uint liquidity,
  uint amountTokenMin,
  uint amountETHMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountETH);
```

Removes liquidity from a PRC20⇄WLAT and receives LAT via permit for tokens that take a fee on transfer.

| Name           | Type      |                                                                                     |
| -------------- | --------- | ----------------------------------------------------------------------------------- |
| token          | `address` | The contract address of the token to remove liquidity.                              |
| liquidity      | `uint`    | The amount of LP Tokens to remove.                                                  |
| amountTokenMin | `uint`    | The minimum amount of the token to remove (slippage impact).                        |
| amountETHMin   | `uint`    | The minimum amount of LAT to remove (slippage impact).                              |
| to             | `address` | Address of LP Token recipient.                                                      |
| deadline       | `uint`    | Unix timestamp deadline by which the transaction must confirm.                      |
| approveMax     | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`. |
| v              | `uint8`   | The v component of the permit signature.                                            |
| r              | `bytes32` | The r component of the permit signature.                                            |
| s              | `bytes32` | The s component of the permit signature.                                            |

### removeLiquidityWithPermit

```
function removeLiquidityWithPermit(
  address tokenA,
  address tokenB,
  uint liquidity,
  uint amountAMin,
  uint amountBMin,
  address to,
  uint deadline,
  bool approveMax, uint8 v, bytes32 r, bytes32 s
) external returns (uint amountA, uint amountB);
```

Removes liquidity from a PRC20⇄PRC20, without pre-approval, via permit.

| Name           | Type      |                                                                                     |
| -------------- | --------- | ----------------------------------------------------------------------------------- |
| tokenA         | `address` | The contract address of one token from your liquidity pair.                         |
| tokenB         | `address` | The contract address of the other token from your liquidity pair.                   |
| liquidity      | `uint`    | The amount of LP Tokens to remove.                                                  |
| amountTokenMin | `uint`    | The minimum amount of the token to remove (slippage impact).                        |
| amountETHMin   | `uint`    | The minimum amount of LAT to remove (slippage impact).                              |
| to             | `address` | Address of LP Token recipient.                                                      |
| deadline       | `uint`    | Unix timestamp deadline by which the transaction must confirm.                      |
| approveMax     | `bool`    | Whether or not the approval amount in the signature is for liquidity or `uint(-1)`. |
| v              | `uint8`   | The v component of the permit signature.                                            |
| r              | `bytes32` | The r component of the permit signature.                                            |
| s              | `bytes32` | The s component of the permit signature.                                            |

### swapETHForExactTokens

```
function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Receive an exact amount of output tokens for as little LAT as possible.

| Name                  | Type      |                                                                                                                                      |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| swapETHForExactTokens | `uint`    | Payable LAT amount.                                                                                                                  |
| amountOut             | `uint`    | The amount tokens to receive.                                                                                                        |
| path (address\[])     | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                    | `address` | Address of recipient.                                                                                                                |
| deadline              | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapExactETHForTokens

```
function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  payable
  returns (uint[] memory amounts);
```

Receive as many output tokens as possible for an exact amount of LAT.

| Name                  | Type      |                                                                                                                                      |
| --------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| swapExactETHForTokens | `uint`    | Payable LAT amount.                                                                                                                  |
| amountOutMin          | `uint`    | The minimum amount tokens to receive.                                                                                                |
| path (address\[])     | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                    | `address` | Address of recipient.                                                                                                                |
| deadline              | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapExactETHForTokensSupportingFeeOnTransferTokens

```
function swapExactETHForTokensSupportingFeeOnTransferTokens(
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external payable;
```

Receive as many output tokens as possible for an exact amount of LAT. Supports tokens that take a fee on transfer.

| Name                                               | Type      |                                                                                                                                      |
| -------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| swapExactETHForTokensSupportingFeeOnTransferTokens | `uint`    | Payable LAT amount.                                                                                                                  |
| amountOutMin                                       | `uint`    | The minimum amount tokens to receive.                                                                                                |
| path (address\[])                                  | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                                                 | `address` | Address of recipient.                                                                                                                |
| deadline                                           | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapExactTokensForETH

```
function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Receive as much LAT as possible for an exact amount of input tokens.

| Name              | Type      |                                                                                                                                      |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| amountIn          | `uint`    | Payable amount of input tokens.                                                                                                      |
| amountOutMin      | `uint`    | The minimum amount tokens to receive.                                                                                                |
| path (address\[]) | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                | `address` | Address of recipient.                                                                                                                |
| deadline          | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapExactTokensForETHSupportingFeeOnTransferTokens

```
function swapExactTokensForETHSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

Receive as much LAT as possible for an exact amount of tokens. Supports tokens that take a fee on transfer.

| Name              | Type      |                                                                                                                                      |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| amountIn          | `uint`    | Payable amount of input tokens.                                                                                                      |
| amountOutMin      | `uint`    | The minimum amount tokens to receive.                                                                                                |
| path (address\[]) | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                | `address` | Address of recipient.                                                                                                                |
| deadline          | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapExactTokensForTokens

```
function swapExactTokensForTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Receive as many output tokens as possible for an exact amount of input tokens.

| Name              | Type      |                                                                                                                                      |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| amountIn          | `uint`    | Payable amount of input tokens.                                                                                                      |
| amountOutMin      | `uint`    | The minimum amount tokens to receive.                                                                                                |
| path (address\[]) | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                | `address` | Address of recipient.                                                                                                                |
| deadline          | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapExactTokensForTokensSupportingFeeOnTransferTokens

```
function swapExactTokensForTokensSupportingFeeOnTransferTokens(
  uint amountIn,
  uint amountOutMin,
  address[] calldata path,
  address to,
  uint deadline
) external;
```

Receive as many output tokens as possible for an exact amount of input tokens. Supports tokens that take a fee on transfer.

| Name              | Type      |                                                                                                                                      |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| amountIn          | `uint`    | Payable amount of input tokens.                                                                                                      |
| amountOutMin      | `uint`    | The minimum amount tokens to receive.                                                                                                |
| path (address\[]) | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                | `address` | Address of recipient.                                                                                                                |
| deadline          | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapTokensForExactETH

```
function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
  external
  returns (uint[] memory amounts);
```

Receive an exact amount of ETH for as few input tokens as possible.

| Name              | Type      |                                                                                                                                      |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| amountOut         | `uint`    | Payable amount of input tokens.                                                                                                      |
| amountInMax       | `uint`    | The minimum amount tokens to input.                                                                                                  |
| path (address\[]) | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                | `address` | Address of recipient.                                                                                                                |
| deadline          | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

### swapTokensForExactTokens

```
function swapTokensForExactTokens(
  uint amountOut,
  uint amountInMax,
  address[] calldata path,
  address to,
  uint deadline
) external returns (uint[] memory amounts);
```

Receive an exact amount of output tokens for as few input tokens as possible.

| Name              | Type      |                                                                                                                                      |
| ----------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| amountOut         | `uint`    | Payable amount of input tokens.                                                                                                      |
| amountInMax       | `uint`    | The minimum amount tokens to input.                                                                                                  |
| path (address\[]) | `address` | An array of token addresses. `path.length` must be >= 2. Pools for each consecutive pair of addresses must exist and have liquidity. |
| to                | `address` | Address of recipient.                                                                                                                |
| deadline          | `uint`    | Unix timestamp deadline by which the transaction must confirm.                                                                       |

## Interface

```
pragma solidity >=0.6.2;
interface IDipoleRouter01 {
    function factory() external pure returns (address);
    function WETH() external pure returns (address);
    function addLiquidity(
        address tokenA,
        address tokenB,
        uint amountADesired,
        uint amountBDesired,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB, uint liquidity);
    function addLiquidityETH(
        address token,
        uint amountTokenDesired,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external payable returns (uint amountToken, uint amountETH, uint liquidity);
    function removeLiquidity(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETH(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountToken, uint amountETH);
    function removeLiquidityWithPermit(
        address tokenA,
        address tokenB,
        uint liquidity,
        uint amountAMin,
        uint amountBMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountA, uint amountB);
    function removeLiquidityETHWithPermit(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountToken, uint amountETH);
    function swapExactTokensForTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapTokensForExactTokens(
        uint amountOut,
        uint amountInMax,
        address[] calldata path,
        address to,
        uint deadline
    ) external returns (uint[] memory amounts);
    function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function swapTokensForExactETH(uint amountOut, uint amountInMax, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline)
        external
        returns (uint[] memory amounts);
    function swapETHForExactTokens(uint amountOut, address[] calldata path, address to, uint deadline)
        external
        payable
        returns (uint[] memory amounts);
    function quote(uint amountA, uint reserveA, uint reserveB) external pure returns (uint amountB);
    function getAmountOut(uint amountIn, uint reserveIn, uint reserveOut) external pure returns (uint amountOut);
    function getAmountIn(uint amountOut, uint reserveIn, uint reserveOut) external pure returns (uint amountIn);
    function getAmountsOut(uint amountIn, address[] calldata path) external view returns (uint[] memory amounts);
    function getAmountsIn(uint amountOut, address[] calldata path) external view returns (uint[] memory amounts);
}
// File: contracts\interfaces\IDipoleRouter02.sol
pragma solidity >=0.6.2;
interface IDipoleRouter02 is IDipoleRouter01 {
    function removeLiquidityETHSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline
    ) external returns (uint amountETH);
    function removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(
        address token,
        uint liquidity,
        uint amountTokenMin,
        uint amountETHMin,
        address to,
        uint deadline,
        bool approveMax, uint8 v, bytes32 r, bytes32 s
    ) external returns (uint amountETH);
    function swapExactTokensForTokensSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external payable;
    function swapExactTokensForETHSupportingFeeOnTransferTokens(
        uint amountIn,
        uint amountOutMin,
        address[] calldata path,
        address to,
        uint deadline
    ) external;
}
```
