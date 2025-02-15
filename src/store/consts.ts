import { vuex } from '@soramitsu/soraneo-wallet-web';

const { WalletModules } = vuex;

export enum Module {
  Router = 'router',
  Web3 = 'web3',
  Assets = 'assets',
  Settings = 'settings',
  Swap = 'swap',
  Charts = 'charts',
  Referrals = 'referrals',
  Pool = 'pool',
  Moonpay = 'moonpay',
  Bridge = 'bridge',
  AddLiquidity = 'addLiquidity',
  RemoveLiquidity = 'removeLiquidity',
  Rewards = 'rewards',
  DemeterFarming = 'demeterFarming',
  RouteAssets = 'routeAssets',
  SoraCard = 'soraCard',
}

export const Modules = [...Object.values(Module), ...WalletModules];
