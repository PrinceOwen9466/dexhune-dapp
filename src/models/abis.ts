export const ABI_DEXHUNE_EXCHANGE = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "DepositFailed",
		type: "error",
	},
	{
		inputs: [],
		name: "FailedStringToNumberConversion",
		type: "error",
	},
	{
		inputs: [],
		name: "FailedToSendReward",
		type: "error",
	},
	{
		inputs: [],
		name: "FailedToTakeOrder",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256",
			},
		],
		name: "InsufficientBalance",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "listingPrice",
				type: "uint256",
			},
		],
		name: "InsufficientBalanceForListing",
		type: "error",
	},
	{
		inputs: [],
		name: "InvalidTokenContract",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "x",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "y",
				type: "uint256",
			},
		],
		name: "MulDiv18Overflow",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "x",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "y",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "denominator",
				type: "uint256",
			},
		],
		name: "MulDivOverflow",
		type: "error",
	},
	{
		inputs: [],
		name: "NoSuitableOrderFound",
		type: "error",
	},
	{
		inputs: [],
		name: "OnlyOwnerMustSetDefaultToken",
		type: "error",
	},
	{
		inputs: [],
		name: "OrderDoesNotExist",
		type: "error",
	},
	{
		inputs: [],
		name: "ParityShouldNotHavePrice",
		type: "error",
	},
	{
		inputs: [],
		name: "RejectedZeroAmount",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "contractAddr",
				type: "address",
			},
		],
		name: "TokenAlreadyExists",
		type: "error",
	},
	{
		inputs: [],
		name: "TokenLimitReached",
		type: "error",
	},
	{
		inputs: [],
		name: "TokenNotListed",
		type: "error",
	},
	{
		inputs: [],
		name: "TokenNotSupported_TooManyDecimals",
		type: "error",
	},
	{
		inputs: [],
		name: "TokenOrderLimitReachedRetryOrClear",
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
		name: "UnauthorizedAccount",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "targetAddr",
				type: "address",
			},
		],
		name: "AVAXTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "AssignedPriceDAO",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "orderType",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
		],
		name: "OrderCreated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "orderType",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "address",
				name: "maker",
				type: "address",
			},
		],
		name: "OrderReverted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "orderType",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "address",
				name: "maker",
				type: "address",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "isPartial",
				type: "bool",
			},
		],
		name: "OrderSettled",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "orderType",
				type: "bool",
			},
			{
				indexed: false,
				internalType: "address",
				name: "maker",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "taker",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "token",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "bool",
				name: "isPartial",
				type: "bool",
			},
		],
		name: "OrderTaken",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "string",
				name: "name",
				type: "string",
			},
			{
				indexed: true,
				internalType: "string",
				name: "symbol",
				type: "string",
			},
			{
				indexed: false,
				internalType: "enum DexhuneExchangeBase.PricingScheme",
				name: "pricingScheme",
				type: "uint8",
			},
			{
				indexed: false,
				internalType: "address",
				name: "addr",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "TokenListed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
			{
				indexed: false,
				internalType: "address",
				name: "targetAddr",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "TokenTransferred",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "oldOwner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "TransferredOwnership",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "assignPriceDAO",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "clearOrders",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "clearTokenOrders",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "createBuyOrder",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "createSellOrder",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "deposit",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "depositToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "address",
				name: "fromAddress",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "depositTokenFrom",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getBalance",
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
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "address",
				name: "parityAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "reward",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "rewardThreshold",
				type: "uint256",
			},
		],
		name: "listParityToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "reward",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "rewardThreshold",
				type: "uint256",
			},
			{
				internalType: "string",
				name: "price",
				type: "string",
			},
		],
		name: "listToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "listingCost",
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
				name: "",
				type: "uint256",
			},
		],
		name: "orders",
		outputs: [
			{
				internalType: "address payable",
				name: "makerAddr",
				type: "address",
			},
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "bool",
				name: "orderType",
				type: "bool",
			},
			{
				internalType: "uint256",
				name: "created",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "price",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "principal",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "pending",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "tokenIndex",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "userIndex",
				type: "uint256",
			},
		],
		stateMutability: "view",
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
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "bool",
				name: "isAVAX",
				type: "bool",
			},
		],
		name: "queryBalance",
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
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "bool",
				name: "orderType",
				type: "bool",
			},
		],
		name: "settleOrders",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "takeBuyOrder",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "takeSellOrder",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_address",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "updateTokenBalance",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "viewOrder",
		outputs: [
			{
				components: [
					{
						internalType: "address payable",
						name: "makerAddr",
						type: "address",
					},
					{
						internalType: "address",
						name: "tokenAddr",
						type: "address",
					},
					{
						internalType: "bool",
						name: "orderType",
						type: "bool",
					},
					{
						internalType: "uint256",
						name: "created",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "principal",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "pending",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "tokenIndex",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "userIndex",
						type: "uint256",
					},
				],
				internalType: "struct DexhuneExchangeBase.Order",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "makerAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "viewOrderByMaker",
		outputs: [
			{
				components: [
					{
						internalType: "address payable",
						name: "makerAddr",
						type: "address",
					},
					{
						internalType: "address",
						name: "tokenAddr",
						type: "address",
					},
					{
						internalType: "bool",
						name: "orderType",
						type: "bool",
					},
					{
						internalType: "uint256",
						name: "created",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "principal",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "pending",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "tokenIndex",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "userIndex",
						type: "uint256",
					},
				],
				internalType: "struct DexhuneExchangeBase.Order",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "index",
				type: "uint256",
			},
		],
		name: "viewOrderByToken",
		outputs: [
			{
				components: [
					{
						internalType: "address payable",
						name: "makerAddr",
						type: "address",
					},
					{
						internalType: "address",
						name: "tokenAddr",
						type: "address",
					},
					{
						internalType: "bool",
						name: "orderType",
						type: "bool",
					},
					{
						internalType: "uint256",
						name: "created",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "principal",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "pending",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "tokenIndex",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "userIndex",
						type: "uint256",
					},
				],
				internalType: "struct DexhuneExchangeBase.Order",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "viewPrice",
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
				internalType: "address",
				name: "tokenAddr",
				type: "address",
			},
		],
		name: "viewToken",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "tokenNo",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "string",
						name: "sym",
						type: "string",
					},
					{
						internalType: "address",
						name: "addr",
						type: "address",
					},
					{
						internalType: "address",
						name: "parityAddr",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "reward",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "rewardThreshold",
						type: "uint256",
					},
					{
						internalType: "enum DexhuneExchangeBase.PricingScheme",
						name: "scheme",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "orders",
						type: "uint256",
					},
				],
				internalType: "struct DexhuneExchangeBase.TokenDataModel",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "tokenNo",
				type: "uint256",
			},
		],
		name: "viewTokenByIndex",
		outputs: [
			{
				components: [
					{
						internalType: "uint256",
						name: "tokenNo",
						type: "uint256",
					},
					{
						internalType: "string",
						name: "name",
						type: "string",
					},
					{
						internalType: "string",
						name: "sym",
						type: "string",
					},
					{
						internalType: "address",
						name: "addr",
						type: "address",
					},
					{
						internalType: "address",
						name: "parityAddr",
						type: "address",
					},
					{
						internalType: "uint256",
						name: "reward",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "rewardThreshold",
						type: "uint256",
					},
					{
						internalType: "enum DexhuneExchangeBase.PricingScheme",
						name: "scheme",
						type: "uint8",
					},
					{
						internalType: "uint256",
						name: "price",
						type: "uint256",
					},
					{
						internalType: "uint256",
						name: "orders",
						type: "uint256",
					},
				],
				internalType: "struct DexhuneExchangeBase.TokenDataModel",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
		type: "function",
	},
] as const;

export const ABI_DEXHUNE_ERC20 = [
	{
		inputs: [],
		name: "DuplicateTransferAddress",
		type: "error",
	},
	{
		inputs: [],
		name: "ExchangeAddressNotSet",
		type: "error",
	},
	{
		inputs: [],
		name: "InsufficientBalance",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
			{
				internalType: "int128",
				name: "balance",
				type: "int128",
			},
		],
		name: "InvalidBalance",
		type: "error",
	},
	{
		inputs: [],
		name: "MintLimitReached",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "timeRemaining",
				type: "uint256",
			},
		],
		name: "MintedTooEarly",
		type: "error",
	},
	{
		inputs: [
			{
				internalType: "uint256",
				name: "allowance",
				type: "uint256",
			},
			{
				internalType: "uint256",
				name: "expectedAllowance",
				type: "uint256",
			},
		],
		name: "NotEnoughAllowance",
		type: "error",
	},
	{
		inputs: [],
		name: "PriceDaoAddressNotSet",
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
		name: "UnauthorizedAccount",
		type: "error",
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
		inputs: [
			{
				internalType: "address",
				name: "_owner",
				type: "address",
			},
			{
				internalType: "address",
				name: "_spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				internalType: "uint256",
				name: "remaining",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_spender",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
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
		name: "balanceOf",
		outputs: [
			{
				internalType: "uint256",
				name: "balance",
				type: "uint256",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "daoMintingStartsAfter",
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
		name: "decimals",
		outputs: [
			{
				internalType: "uint8",
				name: "",
				type: "uint8",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "exchangeMintingStartsAfter",
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
		name: "getOwner",
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
		name: "mint",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "mintToDao",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "mintToExchange",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "mintingStartsAfter",
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
		name: "name",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "setDaoAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "setExchangeAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "symbol",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "pure",
		type: "function",
	},
	{
		inputs: [],
		name: "totalSupply",
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
				internalType: "address",
				name: "_to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_value",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "from",
				type: "address",
			},
			{
				internalType: "address",
				name: "to",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "value",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				internalType: "bool",
				name: "",
				type: "bool",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
] as const;

export const ABI_DEXHUNE_PRICE_DAO = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		inputs: [],
		name: "AlreadyVoted",
		type: "error",
	},
	{
		inputs: [],
		name: "NoActiveProposal",
		type: "error",
	},
	{
		inputs: [],
		name: "NotEligible",
		type: "error",
	},
	{
		inputs: [],
		name: "ProposalAlreadyFinalized",
		type: "error",
	},
	{
		inputs: [],
		name: "ProposalDoesNotExist",
		type: "error",
	},
	{
		inputs: [],
		name: "ProposalHasExpired",
		type: "error",
	},
	{
		inputs: [],
		name: "ProposalIsStillActive",
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
		name: "UnauthorizedAccount",
		type: "error",
	},
	{
		inputs: [],
		name: "VotingDeactivated",
		type: "error",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "AssignedNFTCollection",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "AssignedToken",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "string",
				name: "price",
				type: "string",
			},
			{
				indexed: false,
				internalType: "string",
				name: "description",
				type: "string",
			},
			{
				indexed: false,
				internalType: "address",
				name: "proposer",
				type: "address",
			},
		],
		name: "ProposalCreated",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint16",
				name: "_for",
				type: "uint16",
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "_against",
				type: "uint16",
			},
		],
		name: "ProposalDenied",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint16",
				name: "_for",
				type: "uint16",
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "_against",
				type: "uint16",
			},
			{
				indexed: false,
				internalType: "string",
				name: "newPrice",
				type: "string",
			},
		],
		name: "ProposalPassed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "oldOwner",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "TransferredOwnership",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "voter",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "votes",
				type: "uint16",
			},
		],
		name: "VotedDown",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "voter",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint16",
				name: "votes",
				type: "uint16",
			},
		],
		name: "VotedUp",
		type: "event",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "assignNFTCollection",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "addr",
				type: "address",
			},
		],
		name: "assignTokenAddress",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "finalizeProposal",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "getPrice",
		outputs: [
			{
				internalType: "string",
				name: "",
				type: "string",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "latestProposal",
		outputs: [
			{
				components: [
					{
						internalType: "address",
						name: "proposerAddr",
						type: "address",
					},
					{
						internalType: "string",
						name: "value",
						type: "string",
					},
					{
						internalType: "string",
						name: "description",
						type: "string",
					},
					{
						internalType: "bool",
						name: "finalized",
						type: "bool",
					},
				],
				internalType: "struct DexhunePriceDAOBase.PriceProposal",
				name: "",
				type: "tuple",
			},
		],
		stateMutability: "view",
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
		name: "proposalExpiresAt",
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
				internalType: "string",
				name: "price",
				type: "string",
			},
			{
				internalType: "string",
				name: "description",
				type: "string",
			},
		],
		name: "proposePrice",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_address",
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
		name: "voteDown",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "voteUp",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "votingEndsAt",
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
] as const;

export const ABI_IERC20 = [
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [
			{
				name: "",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_spender",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "approve",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_from",
				type: "address",
			},
			{
				name: "_to",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "transferFrom",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [
			{
				name: "",
				type: "uint8",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
		],
		name: "balanceOf",
		outputs: [
			{
				name: "balance",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [
			{
				name: "",
				type: "string",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{
				name: "_to",
				type: "address",
			},
			{
				name: "_value",
				type: "uint256",
			},
		],
		name: "transfer",
		outputs: [
			{
				name: "",
				type: "bool",
			},
		],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{
				name: "_owner",
				type: "address",
			},
			{
				name: "_spender",
				type: "address",
			},
		],
		name: "allowance",
		outputs: [
			{
				name: "",
				type: "uint256",
			},
		],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		payable: true,
		stateMutability: "payable",
		type: "fallback",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				name: "owner",
				type: "address",
			},
			{
				indexed: true,
				name: "spender",
				type: "address",
			},
			{
				indexed: false,
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
				name: "from",
				type: "address",
			},
			{
				indexed: true,
				name: "to",
				type: "address",
			},
			{
				indexed: false,
				name: "value",
				type: "uint256",
			},
		],
		name: "Transfer",
		type: "event",
	},
];
