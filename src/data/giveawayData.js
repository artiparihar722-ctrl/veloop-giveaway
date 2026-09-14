import iphoneImage from "../assets/iphone.png";
import appleWatchImage from "../assets/apple-watch.png";
import airpodsImage from "../assets/airpods.png";
import amazon2000Image from "../assets/amazon-voucher.png";
import amazon500Image from "../assets/amazon-voucher-500.png";
import voucher20Image from "../assets/voucher-20.png";

export const giveawayData = [
  {
    id: "iphone-15-pro",
    slug: "iphone-15-pro",

    title: "iPhone 15 Pro",
    shortTitle: "iPhone 15 Pro",
    prize: "iPhone 15 Pro",
    prizeValue: "Premium Smartphone",

    position: "1st Prize",
    status: "active",
    featured: true,

    description:
      "Complete eligible activities, earn entries and get a chance to win the iPhone 15 Pro.",

    image: iphoneImage,

    participants: "2.3K+",
    totalEntries: 1250,

    entry: {
      cost: 250,
      currency: "VEs",
    },

    winnerCount: 1,

    prizeType: "PHYSICAL",
    claimType: "PHYSICAL",

    endDate: "2026-09-28T17:30:00",

    eligibility:
      "Available to eligible VELOOP Rewards users who meet the giveaway requirements.",

    rules: [
      "User must be logged in to participate.",
      "Only one participation is allowed per giveaway.",
      "Required entry currency and entry cost must be available.",
      "Winner selection takes place after the giveaway ends.",
      "Prize claim must be completed within the specified claim period.",
    ],
  },

  {
    id: "apple-watch-series-9",
    slug: "apple-watch",

    title: "Apple Watch Series 9",
    shortTitle: "Apple Watch",
    prize: "Apple Watch Series 9",
    prizeValue: "Smart Watch",

    position: "2nd Prize",
    status: "active",
    featured: true,

    description:
      "Use your VEs to participate and get a chance to win the Apple Watch Series 9.",

    image: appleWatchImage,

    participants: "1.8K+",
    totalEntries: 980,

    entry: {
      cost: 200,
      currency: "VEs",
    },

    winnerCount: 1,

    prizeType: "PHYSICAL",
    claimType: "PHYSICAL",

    endDate: "2026-09-30T17:30:00",

    eligibility:
      "Available to eligible VELOOP Rewards users who meet the giveaway requirements.",

    rules: [
      "User must be logged in to participate.",
      "Only one participation is allowed per giveaway.",
      "Required VEs must be available before joining.",
      "Winner is selected after the giveaway ends.",
      "Winner must submit valid claim information.",
    ],
  },

  {
    id: "airpods-pro-2",
    slug: "airpods",

    title: "AirPods Pro 2",
    shortTitle: "AirPods Pro 2",
    prize: "AirPods Pro 2",
    prizeValue: "Wireless Earbuds",

    position: "3rd Prize",
    status: "active",
    featured: true,

    description:
      "Enter with SVEs and get a chance to win premium AirPods Pro 2 with active noise cancellation.",

    image: airpodsImage,

    participants: "3.1K+",
    totalEntries: 760,

    entry: {
      cost: 500,
      currency: "SVEs",
    },

    winnerCount: 1,

    prizeType: "PHYSICAL",
    claimType: "PHYSICAL",

    endDate: "2026-10-02T17:30:00",

    eligibility:
      "Available to eligible VELOOP Rewards users with sufficient SVEs.",

    rules: [
      "User must be logged in.",
      "Required SVEs must be available.",
      "One participation is allowed for this giveaway.",
      "Winner selection occurs after the giveaway ends.",
      "Prize claim information must be submitted correctly.",
    ],
  },

  {
    id: "amazon-2000",
    slug: "amazon-2000",

    title: "₹2,000 Amazon Voucher",
    shortTitle: "Amazon ₹2,000",

    prize: "₹2,000 Amazon Voucher",
    prizeValue: "Shopping Voucher",

    position: "Lucky Reward",
    status: "active",
    featured: true,

    description:
      "Use your VEs to enter and get a chance to win a ₹2,000 Amazon shopping voucher.",

    image: amazon2000Image,

    participants: "1.3K+",
    totalEntries: 640,

    entry: {
      cost: 500,
      currency: "VEs",
    },

    winnerCount: 1,

    prizeType: "GIFT_CARD",
    claimType: "EMAIL",

    endDate: "2026-10-05T17:30:00",

    eligibility:
      "Available to eligible VELOOP Rewards users with sufficient VEs.",

    rules: [
      "User must be logged in to participate.",
      "Required VEs must be available.",
      "One participation is allowed for this giveaway.",
      "Winner receives the reward after verification.",
      "Gift card claim requires a valid email address.",
    ],
  },

  {
    id: "amazon-500",
    slug: "amazon-500",

    title: "₹500 Amazon Voucher",
    shortTitle: "Amazon ₹500",

    prize: "₹500 Amazon Voucher",
    prizeValue: "Shopping Voucher",

    position: "Reward Pick",
    status: "active",
    featured: false,

    description:
      "Use your VEs to enter this reward opportunity and get a chance to win a ₹500 Amazon voucher.",

    image: amazon500Image,

    participants: "850+",
    totalEntries: 420,

    entry: {
      cost: 300,
      currency: "VEs",
    },

    winnerCount: 1,

    prizeType: "GIFT_CARD",
    claimType: "EMAIL",

    endDate: "2026-10-08T17:30:00",

    eligibility:
      "Available to eligible VELOOP Rewards users with sufficient VEs.",

    rules: [
      "User must be logged in.",
      "Required VEs must be available.",
      "One participation is allowed per giveaway.",
      "Winner is selected after the giveaway ends.",
      "Gift card claim requires a valid email address.",
    ],
  },

  {
    id: "amazon-20",
    slug: "amazon-20",

    title: "₹20 Voucher",
    shortTitle: "₹20 Voucher",
    prize: "₹20 Voucher",
    prizeValue: "Reward Voucher",

    position: "Token Reward",
    status: "upcoming",
    featured: false,

    description:
      "Get ready for another reward opportunity and use your Tokens to participate.",

    image: voucher20Image,

    participants: "Coming Soon",
    totalEntries: 0,

    entry: {
      cost: 2000,
      currency: "Tokens",
    },

    winnerCount: 1,

    prizeType: "DIGITAL",
    claimType: "EMAIL",

    startDate: "2026-09-20T10:00:00",
    endDate: "2026-10-12T17:30:00",

    eligibility:
      "Available to eligible VELOOP Rewards users after the giveaway starts.",

    rules: [
      "Participation becomes available when the giveaway starts.",
      "User must be logged in.",
      "Required Tokens must be available.",
      "One participation is allowed per giveaway.",
      "Digital reward delivery requires a valid email address.",
    ],
  },
];

/* ---------------------------------
   Giveaway Statistics
---------------------------------- */

export const giveawayStats = {
  totalGiveaways: 24,
  totalParticipants: "8,500+",
  prizesWon: "1,200+",
};

/* ---------------------------------
   Current Demo User
---------------------------------- */

export const currentUser = {
  userId: "VE10025",

  isLoggedIn: true,

  balances: {
    VEs: 750,
    SVEs: 800,
    Tokens: 5000,
  },

  participation: {
    "iphone-15-pro": {
      isParticipating: true,
      entries: 24,
    },

    "apple-watch-series-9": {
      isParticipating: false,
      entries: 0,
    },

    "airpods-pro-2": {
      isParticipating: false,
      entries: 0,
    },

    "amazon-2000": {
      isParticipating: false,
      entries: 0,
    },

    "amazon-500": {
      isParticipating: false,
      entries: 0,
    },

    "amazon-20": {
      isParticipating: false,
      entries: 0,
    },
  },
};

/* ---------------------------------
   Winner Announcements
---------------------------------- */

export const winnerAnnouncements = [
  {
    id: "announcement-001",
    userId: "VE****21",
    prize: "iPhone 15 Pro",
    message: "VE****21 won an iPhone 15 Pro!",
  },

  {
    id: "announcement-002",
    userId: "VE****83",
    prize: "Apple Watch Series 9",
    message: "VE****83 won an Apple Watch Series 9!",
  },

  {
    id: "announcement-003",
    userId: "VE****54",
    prize: "AirPods Pro 2",
    message: "VE****54 won AirPods Pro 2!",
  },

  {
    id: "announcement-004",
    userId: "VE****92",
    prize: "₹2,000 Amazon Voucher",
    message: "VE****92 won a ₹2,000 Amazon Voucher!",
  },
];

/* ---------------------------------
   Previous Winners
---------------------------------- */

export const previousWinners = [
  {
    id: "winner-001",
    userId: "VE10025",
    prize: "Apple Watch Series 9",
    giveawayTitle: "Apple Watch Giveaway",
    date: "August 10, 2026",
    status: "completed",
  },

  {
    id: "winner-002",
    userId: "VE10482",
    prize: "AirPods Pro 2",
    giveawayTitle: "AirPods Giveaway",
    date: "August 10, 2026",
    status: "completed",
  },

  {
    id: "winner-003",
    userId: "VE10831",
    prize: "₹2,000 Amazon Voucher",
    giveawayTitle: "Amazon Voucher Giveaway",
    date: "August 10, 2026",
    status: "completed",
  },
];

/* ---------------------------------
   Winner Claim Demo Data
---------------------------------- */

export const winnerClaimData = {
  winnerUserId: "VE10025",

  prize: "Apple Watch Series 9",

  claimStatus: "not-submitted",

  physicalPrizeFields: ["fullName", "phone", "address", "city", "state", "pin"],

  giftCardFields: ["email"],
};
