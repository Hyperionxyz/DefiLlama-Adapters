const { sumTokens2 } = require('../helper/unwrapLPs')
const { getUniTVL } = require('../helper/unknownTokens')


const chainConfig = {
  ethereum: {
    factory: '0x91fAe1bc94A9793708fbc66aDcb59087C46dEe10',
    radio: '0x7a5d3A9Dcd33cb8D527f7b5F96EB4Fef43d55636',
    shack: '0x5f018e73C185aB23647c82bD039e762813877f0e',
    coreAssets: [
    ],
    stakingContracts: ['0x3E747B459981d06F70bE99f6aeDbb4E8f26D0066', '0x37c5888e3f8ce7c98022a1640d931563598edc28'],
  },
  polygon: {
    factory: '0xB581D0A3b7Ea5cDc029260e989f768Ae167Ef39B',
    radio: '0x613a489785C95afEB3b404CC41565cCff107B6E0',
    shack: '0x6E65Ae5572DF196FAe40Be2545Ebc2A9A24eAcE9',
    coreAssets: [
      '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', // WMATIC
      '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC
      '0xc2132d05d31c914a87c6611c10748aeb04b58e8f', // USDT
      '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063', // DAI
    ],
    stakingContracts: ['0x1D72b58d2b73942451b1D0DFE2B6ef2c5a52a301', '0x01d97Df7dc98E97da0c14ffB27Adf00fda0245DD', '0x9E8C85c40001a7264a1a1B11999F8f7b0503D60a'],
  },
  bsc: {
    factory: '0x98957ab49b8bc9f7ddbCfD8BcC83728085ecb238',
    radio: '0x30807D3b851A31d62415B8bb7Af7dCa59390434a',
    shack: '0xe79a1163a95734ccFBd006cBAaba954f3e846BeB',
    coreAssets: [
      '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c', // wbnb
      '0xe9e7cea3dedca5984780bafc599bd69add087d56', // busd
      '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d', // USDC
      '0x55d398326f99059ff775485246999027b3197955', // USDT
      '0x2170ed0880ac9a755fd29b2688956bd959f933f8', // ETH
    ],
    stakingContracts: ['0xACc89554Fb28A94e5578d8A1B04E88Aa7788D261', '0x68b761d63e488c1d7c5f282c9b7d9a9791c17d3a'],
  },
  avax: {
    factory: '0xa0fbfda09b8815dd42ddc70e4f9fe794257cd9b6',
    radio: '0x02Bfd11499847003De5f0F5AA081C43854d48815',
    shack: '0x9AD274e20a153451775Ff29D546949a254C4a1bc',
    coreAssets: [
      '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7', // wavax
      '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e', // USDC
      '0xc7198437980c041c805a1edcba50c1ce5db95118', // USDT
    ],
    stakingContracts: ['0x1a55aBd871a8A5aA973980Ac5f4e7b9E732532C0', '0x37c5888e3f8CE7C98022a1640D931563598EDc28'],
  },
  fantom: {
    factory: '0x5eF0153590D4a762F129dCf3c59186D91365e4e1',
    radio: '0xf899e3909B4492859d44260E1de41A9E663e70F5',
    shack: '0x462Fa81050f0fF732D59df121BFd9b8Bab072018',
    coreAssets: [
      '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83', // wftm
      '0x04068da6c83afcfa0e13ba15a6696662335d5b75', // USDC
      '0x049d68029688eabf473097a2fc38ef61633a3c7a', // USDT
      '0x8d11ec38a3eb5e956b052f67da8bdc9bef8abf3e', // DAI
    ],
  },
  cronos: {
    factory: '0x5eF0153590D4a762F129dCf3c59186D91365e4e1',
    radio: '0xf899e3909B4492859d44260E1de41A9E663e70F5',
    shack: '0x671D2E0E1a9c8E117A071bFC5763aF3fBe9bDF0b',
    coreAssets: [
      "0x5C7F8A570d578ED84E63fdFA7b1eE72dEae1AE23",
      "0xc21223249CA28397B4B6541dfFaEcC539BfF0c59",
      "0x66e428c3f67a68878562e79A0234c1F83c208770",
      "0xe243CCab9E66E6cF1215376980811ddf1eb7F689",
    ],
    stakingContracts: ['0x68797130D8E63745761C524C33121fdD7290cB72'],
  },
  // fantom: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // arbitrum: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // xdai: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // heco: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // harmony: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // okex: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // celo: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // palm: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // moonriver: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
  // fuse: {
  //   factory: '0x43eA90e2b786728520e4f930d2A71a477BF2737C'
  // },
  // telos: {
  //   factory: '0xc35DADB65012eC5796536bD9864eD8773aBc74C4'
  // },
}

const moduleExports = Object.keys(chainConfig).reduce((agg, chain) => {
  const {
    factory, stakingContracts, radio, shack, coreAssets,
  } = chainConfig[chain]

  async function staking(ts, ethBlock, chainBlocks) {
    const block = chainBlocks[chain]
    const tokens = [radio]
    if (shack) tokens.push(shack)
    const balances = {}

    if (!stakingContracts || !stakingContracts.length) return balances
    return sumTokens2({ chain, block, owners: stakingContracts, tokens, })
  }

  agg[chain] = { tvl: getUniTVL({
    chain, factory, coreAssets,
  }), staking }

  return agg
}, {})

module.exports = {
  ...moduleExports
}