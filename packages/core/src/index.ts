// NOTE: We explicitly export the symbols in the root index.ts file to have better control over package's public API.

export {
  ChainId,
  BNB,
  BUSD,
  Chain,
  Config,
  DEFAULT_SUPPORTED_CHAINS,
  Dai,
  ERC20,
  ERC20Interface,
  ERC20Mock,
  ERC20MockInterface,
  Ether,
  FullConfig,
  KovanDai,
  KovanEther,
  MultiCall,
  MultiCall2,
  MultiCall2ABI,
  MultiCallABI,
  MulticallAddresses,
  NATIVE_CURRENCY,
  NodeUrls,
  TestBNB,
  TestBUSD,
} from './constants'
export {
  DAppProvider,
  DAppProviderProps,
  AddNotificationPayload,
  RemoveNotificationPayload,
  ChainState,
  Notification,
  Notifications,
  RawCall,
  RawCallResult,
  State,
  StoredTransaction,
  StoredTransactions,
  Network,
  getStoredTransactionState,
  multicall,
  multicall2,
  useBlockNumber,
  useConfig,
  useNetwork,
  useUpdateConfig,
} from './providers'
export {
  Call,
  ContractCall,
  Web3Ethers,
  useBlockMeta,
  useCall,
  useCalls,
  useContractCall,
  useContractCalls,
  useChainCall,
  useChainCalls,
  useChainMeta,
  useChainState,
  useContractFunction,
  useEtherBalance,
  useEthers,
  useGasPrice,
  useLookupAddress,
  useMulticallAddress,
  useNotifications,
  useSendTransaction,
  useToken,
  useTokenAllowance,
  useTokenBalance,
  useTokenList,
  TokenList,
  useTransactions,
} from './hooks'
export {
  Currency,
  CurrencyValue,
  CurrencyFormatOptions,
  FiatCurrency,
  NativeCurrency,
  Token,
  TransactionOptions,
  TransactionState,
  TransactionStatus,
  transactionErrored,
} from './model'
export * from './model/chain'
export {
  CallResult,
  isLocalChain,
  isTestChain,
  addressEqual,
  compareAddress,
  shortenAddress,
  shortenIfAddress,
  shortenIfTransactionHash,
  shortenTransactionHash,
  getChainName,
  getExplorerAddressLink,
  getExplorerTransactionLink,
} from './helpers'
