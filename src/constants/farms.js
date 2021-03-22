import React from "react";

import Boar from "../assets/emojis/boar.png";
import Crocodile from "../assets/emojis/crocodile.png";
import Cyclone from "../assets/emojis/cyclone.png";
import Duck from "../assets/emojis/duck.png";
import Corn from "../assets/emojis/ear-of-corn.png";
import Chick from "../assets/emojis/front-facing-baby-chick.png";
import Frog from "../assets/emojis/frog.png";
import Gorilla from "../assets/emojis/gorilla.png";
import Honeybee from "../assets/emojis/honeybee.png";
import HotSprings from "../assets/emojis/hot-springs.png";
import Chef from "../assets/emojis/chef.png";
import Mushroom from "../assets/emojis/mushroom.png";
import Ox from "../assets/emojis/ox.png";
import Rhinoceros from "../assets/emojis/rhinoceros.png";
import Yam from "../assets/emojis/roasted-sweet-potato.png";
import Shark from "../assets/emojis/shark.png";
import Shield from "../assets/emojis/shield.png";
import Snail from "../assets/emojis/snail.png";
import Snake from "../assets/emojis/snake.png";
import Squid from "../assets/emojis/squid.png";
import Sushi from "../assets/emojis/sushi.png";
import TRex from "../assets/emojis/t-rex.png";
import Turtle from "../assets/emojis/turtle.png";
import Unicorn from "../assets/emojis/unicorn.png";
import Whale from "../assets/emojis/whale.png";

import Doge from "../assets/icons/doge-sushi.png";
import Tornado from "../assets/emojis/tornado.png";

export const emojis = {
  Boar,
  Crocodile,
  Cyclone,
  Duck,
  Corn,
  Chick,
  Frog,
  Gorilla,
  Honeybee,
  HotSprings,
  Chef,
  Mushroom,
  Ox,
  Rhinoceros,
  Yam,
  Shark,
  Shield,
  Snail,
  Snake,
  Squid,
  Sushi,
  TRex,
  Turtle,
  Unicorn,
  Whale,
  Doge,
  Tornado,
};

const menuSetup = {
  onsen: [
    22,
    31,
    33,
    35,
    36,
    42,
    48,
    53,
    59,
    60,
    63,
    65,
    66,
    67,
    68,
    69,
    70,
    //71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    //84,
    85,
    86,
    87,
    88,
    89,
    //90,
    91,
    92,
    93,
    94,
    95,
    96,
    //97,
    98,
    99,
    100,
    103,
    104,
    105,
    106,
    107,
    108,
    109,
    110,
    111,
    112,
    113,
    114,
    115,
    116,
    117,
    118,
    119,
    120,
    121,
    122,
    123,
    127,
    128,
    129,
    130,
    131,
    132,
    133,
    134,
    135,
    136,
    137,
    138,
    139,
    140,
    141,
    142,
    143,
    144,
    145,
    146,
    147,
    148,
    149,
    150,
    151,
    152,
    153,
    154,
    155,
    156,
    157,
    158,
    159,
    160,
    162,
    163,
    164,
    165,
    166,
    167,
    168,
  ],
  upcoming: [],
  previous: [],
  permanent: [12, 58, 25, 1, 2, 21, 0, 11, 3, 8, 37, 4, 6, 7, 9, 18, 44, 13, 17, 101],
};

export const menus = {
  onsen: menuSetup.onsen.sort((a, b) => a - b),
  upcoming: menuSetup.upcoming.sort((a, b) => a - b),
  previous: menuSetup.previous.sort((a, b) => a - b), // previous now overridden by any pool with allocPoint === 0
  permanent: menuSetup.permanent.sort((a, b) => a - b),
  active: menuSetup.permanent.concat(menuSetup.onsen).reduce(function(a, b) {
    if (a.indexOf(b) < 0) a.push(b);
    return a;
  }, []),
};

// For tokens that suffer a protocol exploit and need a warning
export const TOKEN_WARNINGS = [
  "0x5d8d9f5b96f4438195be9b99eee6118ed4304286", // COVER
];

export const FARM_DETAILS = [
  { pid: 0, name: "Tether Turtle", symbol: "USDT-ETH SLP", icon: "Turtle" },
  { pid: 1, name: "Circle Snail", symbol: "USDC-ETH SLP", icon: "Snail" },
  { pid: 2, name: "Donald DAI", symbol: "DAI-ETH SLP", icon: "Duck" },
  { pid: 3, name: "Spartan Dollar", symbol: "SUSD-ETH SLP", icon: "Gorilla" },
  { pid: 4, name: "Comp Truffle", symbol: "COMP-ETH SLP", icon: "Mushroom" },
  { pid: 5, name: "LEND (Old)", symbol: "LEND-ETH SLP", icon: "Boar" },
  { pid: 6, name: "Synth Snake", symbol: "SNX-ETH SLP", icon: "Snake" },
  { pid: 7, name: "Umami Squid", symbol: "UMA-ETH SLP", icon: "Squid" },
  { pid: 8, name: "Toadie Marine", symbol: "LINK-ETH SLP", icon: "Frog" },
  { pid: 9, name: "Band-osaurus", symbol: "BAND-ETH SLP", icon: "TRex" },
  { pid: 10, name: "Ample Chicks", symbol: "AMPL-ETH SLP", icon: "Chick" },
  { pid: 11, name: "YFI Whale", symbol: "YFI-ETH SLP", icon: "Whale" },
  { pid: 12, name: "Sushi Party!", symbol: "SUSHI-ETH SLP", icon: "Sushi" },
  { pid: 13, name: "REN Rhino", symbol: "REN-ETH SLP", icon: "Rhinoceros" },
  { pid: 14, name: "BASED Bull", symbol: "BASED-sUSD SLP", icon: "Ox" },
  { pid: 15, name: "SRM Shark", symbol: "SRM-ETH SLP", icon: "Shark" },
  { pid: 16, name: "YAMv2 (Old)", symbol: "YAMv2-ETH SLP", icon: "Yam" },
  { pid: 17, name: "CRV Crocodile", symbol: "CRV-ETH SLP", icon: "Crocodile" },
  { pid: 18, name: "UNI Unicorn", symbol: "UNI-ETH SLP", icon: "Unicorn" },
  { pid: 19, name: "Chef's Menu", symbol: "xSUSHI-ETH SLP", icon: "Chef" },
  { pid: 20, name: "Chef's Menu", symbol: "cDAI-DAI SLP", icon: "Chef" },
  { pid: 21, name: "BitCorn", symbol: "WBTC-ETH SLP", icon: "Corn" },
  { pid: 22, name: "Onsen", symbol: "CREAM-ETH SLP", icon: "HotSprings" },
  { pid: 22, name: "Chef's Menu", symbol: "CREAM-ETH SLP", icon: "Chef" },
  { pid: 23, name: "Chef's Menu", symbol: "MEME-ETH SLP", icon: "Chef" },
  { pid: 24, name: "Chef's Menu", symbol: "wNXM-ETH SLP", icon: "Chef" },
  { pid: 25, name: "Yearn Synergy", symbol: "yUSD-ETH", icon: "Cyclone" },
  { pid: 25, name: "Chef's Menu", symbol: "yUSD-ETH SLP", icon: "Chef" },
  { pid: 26, name: "Chef's Menu", symbol: "yUSD-WBTC SLP", icon: "Chef" },
  { pid: 27, name: "Chef's Menu", symbol: "CRO-ETH SLP", icon: "Chef" },
  { pid: 28, name: "Chef's Menu", symbol: "renBTC-WBTC SLP", icon: "Chef" },
  { pid: 31, name: "Onsen", symbol: "HEGIC-ETH SLP", icon: "HotSprings" },
  { pid: 31, name: "Chef's Menu", symbol: "HEGIC-ETH SLP", icon: "Chef" },
  { pid: 32, name: "Chef's Menu", symbol: "wBTC-tBTC SLP", icon: "Chef" },
  { pid: 33, name: "Onsen", symbol: "MKR-ETH SLP", icon: "HotSprings" },
  { pid: 33, name: "Chef's Menu", symbol: "MKR-ETH SLP", icon: "Chef" },
  { pid: 34, name: "Chef's Menu", symbol: "CORE-ETH SLP", icon: "Chef" },
  { pid: 35, name: "Onsen", symbol: "PICKLE-ETH SLP", icon: "HotSprings" },
  { pid: 35, name: "Chef's Menu", symbol: "PICKLE-ETH SLP", icon: "Chef" },
  { pid: 36, name: "Onsen", symbol: "OMG-ETH SLP", icon: "HotSprings" },
  { pid: 36, name: "Chef's Menu", symbol: "OMG-ETH SLP", icon: "Chef" },
  { pid: 37, name: "Aave Boar", symbol: "AAVE-ETH SLP", icon: "Boar" },
  { pid: 37, name: "Chef's Menu", symbol: "AAVE-ETH SLP", icon: "Chef" },
  { pid: 38, name: "Chef's Menu", symbol: "AMP-ETH SLP", icon: "Chef" },
  { pid: 39, name: "Chef's Menu", symbol: "xSUSHI-USDC SLP", icon: "Chef" },
  { pid: 40, name: "Chef's Menu", symbol: "GHST-ETH SLP", icon: "Chef" },
  { pid: 41, name: "Chef's Menu", symbol: "RARI-ETH SLP", icon: "Chef" },
  { pid: 42, name: "Onsen", symbol: "DPI-ETH SLP", icon: "HotSprings" },
  { pid: 42, name: "Chef's Menu", symbol: "DPI-ETH SLP", icon: "Chef" },
  { pid: 43, name: "Chef's Menu", symbol: "vBTC-tBTC SLP", icon: "Chef" },
  { pid: 44, name: "YAM", symbol: "YAM-ETH SLP", icon: "Yam" },
  { pid: 46, name: "Chef's Menu", symbol: "FARM-ETH SLP", icon: "Chef" },
  { pid: 47, name: "Chef's Menu", symbol: "renBTC-ETH SLP", icon: "Chef" },
  { pid: 48, name: "Onsen", symbol: "DOUGH-ETH SLP", icon: "HotSprings" },
  { pid: 48, name: "Chef's Menu", symbol: "DOUGH-ETH SLP", icon: "Chef" },
  { pid: 49, name: "Chef's Menu", symbol: "STAKE-ETH SLP", icon: "Chef" },
  { pid: 50, name: "Chef's Menu", symbol: "RSR-ETH SLP", icon: "Chef" },
  { pid: 51, name: "Chef's Menu", symbol: "tBTC-ETH SLP", icon: "Chef" },
  { pid: 52, name: "Chef's Menu", symbol: "AUDIO-ETH SLP", icon: "Chef" },
  { pid: 53, name: "Onsen", symbol: "AKRO-ETH SLP", icon: "HotSprings" },
  { pid: 53, name: "Chef's Menu", symbol: "AKRO-ETH SLP", icon: "Chef" },
  { pid: 54, name: "Chef's Menu", symbol: "HEZ-ETH SLP", icon: "Chef" },
  { pid: 55, name: "Chef's Menu", symbol: "YAX-ETH SLP", icon: "Chef" },
  { pid: 56, name: "Chef's Menu", symbol: "OUSD-USDT SLP", icon: "Chef" },
  { pid: 57, name: "Chef's Menu", symbol: "SURF-ETH SLP", icon: "Chef" },
  { pid: 58, name: "Bee KP3R", symbol: "KP3R-ETH SLP", icon: "Honeybee" },
  { pid: 58, name: "Chef's Menu", symbol: "KP3R-ETH SLP", icon: "Chef" },
  { pid: 59, name: "Onsen", symbol: "SEEN-ETH SLP", icon: "HotSprings" },
  { pid: 59, name: "Chef's Menu", symbol: "SEEN-ETH SLP", icon: "Chef" },
  { pid: 60, name: "Onsen", symbol: "AXS-ETH SLP", icon: "HotSprings" },
  { pid: 63, name: "Onsen", symbol: "ESD-ETH SLP", icon: "HotSprings" },
  { pid: 65, name: "Onsen", symbol: "PNK-ETH SLP", icon: "HotSprings" },
  { pid: 66, name: "Onsen", symbol: "CVP-ETH SLP", icon: "HotSprings" },
  { pid: 67, name: "Onsen", symbol: "YETI-ETH SLP", icon: "HotSprings" },
  { pid: 68, name: "Onsen", symbol: "ARCH-ETH SLP", icon: "HotSprings" },
  { pid: 69, name: "Onsen", symbol: "INJ-ETH SLP", icon: "HotSprings" },
  { pid: 70, name: "Onsen", symbol: "BOR-ETH SLP", icon: "HotSprings" },
  { pid: 71, name: "Onsen", symbol: "SFI-ETH SLP", icon: "HotSprings" },
  { pid: 72, name: "Onsen", symbol: "DFD-ETH SLP", icon: "HotSprings" },
  { pid: 73, name: "Onsen", symbol: "BADGER-WBTC SLP", icon: "HotSprings" },
  { pid: 74, name: "Onsen", symbol: "zLOT-ETH SLP", icon: "HotSprings" },
  { pid: 75, name: "Onsen", symbol: "INDEX-ETH SLP", icon: "HotSprings" },
  { pid: 76, name: "Onsen", symbol: "SWAG-ETH SLP", icon: "HotSprings" },
  { pid: 77, name: "Onsen", symbol: "JRT-ETH SLP", icon: "HotSprings" },
  { pid: 78, name: "Onsen", symbol: "UWL-ETH", icon: "HotSprings" },
  { pid: 79, name: "Onsen", symbol: "ICHI-ETH SLP", icon: "HotSprings" },
  { pid: 80, name: "Onsen", symbol: "ROPE-ETH SLP", icon: "HotSprings" },
  { pid: 81, name: "Onsen", symbol: "oBTC-ETH SLP", icon: "HotSprings" },
  { pid: 82, name: "Onsen", symbol: "mbBASED-ETH SLP", icon: "HotSprings" },
  { pid: 83, name: "Onsen", symbol: "DSD-USDC SLP", icon: "HotSprings" },
  { pid: 84, name: "Onsen", symbol: "nTRUMP-DAI SLP", icon: "HotSprings" },
  { pid: 85, name: "Onsen", symbol: "UST-ETH SLP", icon: "HotSprings" },
  { pid: 86, name: "Onsen", symbol: "FNX-ETH SLP", icon: "HotSprings" },
  { pid: 87, name: "Onsen", symbol: "BCP-ETH SLP", icon: "HotSprings" },
  { pid: 88, name: "Onsen", symbol: "YPIE-ETH SLP", icon: "HotSprings" },
  { pid: 89, name: "Onsen", symbol: "DEFI+L-ETH SLP", icon: "HotSprings" },
  { pid: 90, name: "Onsen", symbol: "BASE-ETH SLP", icon: "HotSprings" },
  { pid: 91, name: "Onsen", symbol: "DDX-USDC SLP", icon: "HotSprings" },
  { pid: 92, name: "Onsen", symbol: "MPH-ETH SLP", icon: "HotSprings" },
  { pid: 93, name: "Onsen", symbol: "FRONT-USDT SLP", icon: "HotSprings" },
  { pid: 94, name: "Onsen", symbol: "UOP-ETH SLP", icon: "HotSprings" },
  { pid: 95, name: "Onsen", symbol: "TRU-ETH SLP", icon: "HotSprings" },
  { pid: 96, name: "Onsen", symbol: "ALPHA-ETH SLP", icon: "HotSprings" },
  { pid: 97, name: "Onsen", symbol: "ALPA-ETH SLP", icon: "HotSprings" },
  { pid: 98, name: "Onsen", symbol: "CRETH2-ETH SLP", icon: "HotSprings" },
  { pid: 99, name: "Onsen", symbol: "DUSD-ETH SLP", icon: "HotSprings" },
  { pid: 100, name: "Onsen", symbol: "ANTv2-ETH SLP", icon: "HotSprings" },
  { pid: 101, name: "COVER Shield", symbol: "COVER-ETH SLP", icon: "Shield" },
  { pid: 102, name: "Dummy Token", symbol: "SAFFRON-ETH SLP", icon: "" },
  { pid: 103, name: "Onsen", symbol: "DIGG-WBTC SLP", icon: "HotSprings" },
  { pid: 104, name: "Onsen", symbol: "NFTX-ETH SLP", icon: "HotSprings" },
  { pid: 105, name: "Onsen", symbol: "API3-ETH SLP", icon: "HotSprings" },
  { pid: 106, name: "Onsen", symbol: "COMBO-ETH SLP", icon: "HotSprings" },
  { pid: 107, name: "Onsen", symbol: "HBTC-CREAM SLP", icon: "HotSprings" },
  { pid: 108, name: "Onsen", symbol: "MARS-USDT SLP", icon: "HotSprings" },
  { pid: 109, name: "Onsen", symbol: "LDO-ETH SLP", icon: "HotSprings" },
  { pid: 110, name: "Onsen", symbol: "BAC-BAB SLP", icon: "HotSprings" },
  { pid: 111, name: "Onsen", symbol: "pWING-ETH SLP", icon: "HotSprings" },
  { pid: 112, name: "Onsen", symbol: "TUSD-ETH SLP", icon: "HotSprings" },
  { pid: 113, name: "Onsen", symbol: "ALEPH-ETH SLP", icon: "HotSprings" },
  { pid: 114, name: "Onsen", symbol: "SPANK-ETH SLP", icon: "HotSprings" },
  { pid: 115, name: "Onsen", symbol: "MTA-ETH SLP", icon: "HotSprings" },
  { pid: 116, name: "Onsen", symbol: "BAO-ETH SLP", icon: "HotSprings" },
  { pid: 117, name: "Onsen", symbol: "RGT-ETH SLP", icon: "HotSprings" },
  { pid: 118, name: "Onsen", symbol: "IDLE-ETH SLP", icon: "HotSprings" },
  { pid: 119, name: "Onsen", symbol: "aETH-USDT SLP", icon: "HotSprings" },
  { pid: 120, name: "Onsen", symbol: "SDT-ETH SLP", icon: "HotSprings" },
  { pid: 121, name: "Onsen", symbol: "GNO-ETH SLP", icon: "HotSprings" },
  { pid: 122, name: "Onsen", symbol: "BAC-ETH SLP", icon: "HotSprings" },
  { pid: 123, name: "Onsen", symbol: "aETH-ETH SLP", icon: "HotSprings" },
  { pid: 127, name: "Onsen", symbol: "ARMOR-ETH SLP", icon: "HotSprings" },
  { pid: 128, name: "Onsen", symbol: "ASSY-ETH SLP", icon: "HotSprings" },
  { pid: 129, name: "Onsen", symbol: "ibETHv2-ALPHA SLP", icon: "HotSprings" },
  { pid: 130, name: "Onsen", symbol: "renDOGE-ETH SLP", icon: "Doge" },
  { pid: 131, name: "Onsen", symbol: "NCT-ETH SLP", icon: "HotSprings" },
  { pid: 132, name: "Onsen", symbol: "yveCRV-ETH SLP", icon: "HotSprings" },
  { pid: 132, name: "Onsen", symbol: "yveCRV-ETH SLP", icon: "HotSprings" },
  { pid: 133, name: "Onsen", symbol: "TORN-ETH SLP", icon: "Tornado" },
  { pid: 134, name: "Onsen", symbol: "mBTC-ETH SLP", icon: "HotSprings" },
  { pid: 135, name: "Onsen", symbol: "VSP-ETH SLP", icon: "HotSprings" },
  { pid: 136, name: "Onsen", symbol: "YLD-ETH SLP", icon: "HotSprings" },
  { pid: 137, name: "Onsen", symbol: "stETH(StakeHound)-ETH SLP", icon: "HotSprings" },
  { pid: 138, name: "Onsen", symbol: "DAO-ETH SLP", icon: "HotSprings" },
  { pid: 139, name: "Onsen", symbol: "GRT-ETH SLP", icon: "HotSprings" },
  { pid: 140, name: "Onsen", symbol: "FTM-ETH SLP", icon: "HotSprings" },
  { pid: 141, name: "Onsen", symbol: "ANY-ETH SLP", icon: "HotSprings" },
  { pid: 142, name: "Onsen", symbol: "PUNK-ETH SLP", icon: "HotSprings" },
  { pid: 143, name: "Onsen", symbol: "MASK-ETH SLP", icon: "HotSprings" },
  { pid: 144, name: "Onsen", symbol: "PUNK-BASIC-ETH SLP", icon: "HotSprings" },
  { pid: 145, name: "Onsen", symbol: "PUNK-FEMALE-ETH SLP", icon: "HotSprings" },
  { pid: 146, name: "Onsen", symbol: "PUNK-ATTR-4-ETH SLP", icon: "HotSprings" },
  { pid: 147, name: "Onsen", symbol: "PUNK-ATTR-5-ETH SLP", icon: "HotSprings" },
  { pid: 148, name: "Onsen", symbol: "PUNK-ZOMBIE-ETH SLP", icon: "HotSprings" },
  { pid: 149, name: "Onsen", symbol: "XFT-ETH SLP", icon: "HotSprings" },
  { pid: 150, name: "Onsen", symbol: "ZRX-ETH SLP", icon: "HotSprings" },
  { pid: 151, name: "Onsen", symbol: "USDN-ETH SLP", icon: "HotSprings" },
  { pid: 152, name: "Onsen", symbol: "DERI-USDT SLP", icon: "HotSprings" },
  { pid: 153, name: "Onsen", symbol: "PREMIA-ETH SLP", icon: "HotSprings" },
  { pid: 154, name: "Onsen", symbol: "BANK-ETH SLP", icon: "HotSprings" },
  { pid: 155, name: "Onsen", symbol: "LINA-ETH SLP", icon: "HotSprings" },
  { pid: 156, name: "Onsen", symbol: "PERP-ETH SLP", icon: "HotSprings" },
  { pid: 157, name: "Onsen", symbol: "wSCRT-ETH SLP", icon: "HotSprings" },
  { pid: 158, name: "Onsen", symbol: "USDP-ETH SLP", icon: "HotSprings" },
  { pid: 159, name: "Onsen", symbol: "USDP-DUCK SLP", icon: "HotSprings" },
  { pid: 160, name: "Onsen", symbol: "DEXTF-ETH SLP", icon: "HotSprings" },
  { pid: 162, name: "Onsen", symbol: "oneVBTC-ETH SLP", icon: "HotSprings" },
  { pid: 163, name: "Onsen", symbol: "TRDL-ETH SLP", icon: "HotSprings" },
  { pid: 164, name: "Onsen", symbol: "RLC-ETH SLP", icon: "HotSprings" },
  { pid: 165, name: "Onsen", symbol: "bDIGG-ETH  SLP", icon: "HotSprings" },
  { pid: 166, name: "Onsen", symbol: "bBADGER-ETH SLP", icon: "HotSprings" },
  { pid: 167, name: "Onsen", symbol: "YLA-USDC SLP", icon: "HotSprings" },
  { pid: 168, name: "Onsen", symbol: "PUNK-BASIC-NFTX SLP", icon: "HotSprings" }
];
