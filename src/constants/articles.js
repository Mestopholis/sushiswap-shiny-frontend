import StablecoinList from "../assets/articles/stablecoin-list.jpg";
import OnsenIllustration from "../assets/articles/onsen.jpg";
import CoverWarningLogo from "../assets/articles/cover-warning.jpg";
import MidnightTrading from "../assets/articles/midnight-trading.jpg";

export const articles = [
  // {
  //   title: "Ethereum hits $1000",
  //   description:
  //     "High volatility means higher volume which means more fees for our liquidity providers. Check out pairs to provide liquidity to today!",
  //   image: StablecoinList,
  //   token: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2", // WETH
  // },
  {
    key: "stablecoin",
    title: "Introducing the Stablecoin List",
    description:
      "Stablecoins are back with a new twist - algorithmic stablecoins. Browse stablecoins in our new list. Add liquidity to MIS-USDT only on SushiSwap.",
    image: StablecoinList,
    token: "0x368b3a58b5f49392e5c9e4c998cb0bb966752e51", // MIC
  },
  // {
  //   title: "Introducing the New BTC List",
  //   description:
  //     "Bitcoin's all the rage, but what about wrapped Bitcoin alternatives? Check out the new kids on the block on our new list. Thanks to deep WBTC liquidity, WBTC routing has been added for swaps giving you the lowest slippage on BTC based pairs anywhere!",
  //   image: StablecoinList,
  //   token: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599", // WBTC
  // },
  {
    key: "cover-exploit",
    title: "Warning: COVER Verified Exploit",
    description:
      "COVER has experienced a verified exploit and a warning message has been placed on COVER and related pairs. Proceed with caution. Read more about the exploit here.",
    image: CoverWarningLogo,
    token: "0x5d8d9f5b96f4438195be9b99eee6118ed4304286", // COVER
  },
  {
    key: "onsen",
    title: "Onsen Liquidity Incentives Program",
    image: OnsenIllustration,
    description:
      "New farms, new SUSHI rewards. Check out the Onsen list or head over to Special Farms to provide liquidity to selected projects. Earn accelerated SUSHI rewards on top of trading fees.",
    list: "",
  },
  {
    key: "midnight-trading",
    title: "Experimental: Midnight Trading Interface",
    description:
      "Check out the new experimental interface built using Sushi Plugin. Midnight is an interface tailored to traders full with live pricing and helpful stats.",
    image: MidnightTrading,
    token: "0x6b3595068778dd592e39a122f4f5a5cf09c90fe2", // SUSHI
  },
];
