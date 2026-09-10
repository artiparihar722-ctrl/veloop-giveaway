export const giveawayData = [
  {
    id: "iphone-16",
    title: "iPhone Giveaway",
    shortTitle: "iPhone",
    prize: "iPhone",
    prizeValue: "Premium Smartphone",
    entryCost: 250,
    currency: "VEs",
    status: "active",
    featured: true,
    description:
      "Complete simple activities, earn entries and get a chance to win a premium iPhone.",
    endDate: "2026-09-28T17:30:00",
    totalEntries: 1250,
    image: "/assets/iphone.png",
  },

  {
    id: "apple-watch",
    title: "Apple Watch Giveaway",
    shortTitle: "Apple Watch",
    prize: "Apple Watch",
    prizeValue: "Smart Watch",
    entryCost: 200,
    currency: "VEs",
    status: "active",
    featured: true,
    description:
      "Join the Apple Watch giveaway and use your VEs to enter the reward opportunity.",
    endDate: "2026-09-30T17:30:00",
    totalEntries: 980,
    image: "/assets/apple-watch.png",
  },

  {
    id: "airpods",
    title: "AirPods Giveaway",
    shortTitle: "AirPods",
    prize: "AirPods",
    prizeValue: "Wireless Earbuds",
    entryCost: 500,
    currency: "SVEs",
    status: "active",
    featured: true,
    description:
      "Enter the AirPods giveaway and get a chance to win premium wireless earbuds.",
    endDate: "2026-10-02T17:30:00",
    totalEntries: 760,
    image: "/assets/airpods.png",
  },

  {
    id: "amazon-2000",
    title: "₹2,000 Amazon Voucher",
    shortTitle: "Amazon ₹2,000",
    prize: "₹2,000 Amazon Voucher",
    prizeValue: "Shopping Voucher",
    entryCost: 500,
    currency: "VEs",
    status: "active",
    featured: true,
    description:
      "Use your VEs to enter and get a chance to win a ₹2,000 Amazon voucher.",
    endDate: "2026-10-05T17:30:00",
    totalEntries: 640,
    image: "/assets/amazon-voucher.png",
  },

  {
    id: "amazon-500",
    title: "₹500 Amazon Voucher",
    shortTitle: "Amazon ₹500",
    prize: "₹500 Amazon Voucher",
    prizeValue: "Shopping Voucher",
    entryCost: 300,
    currency: "VEs",
    status: "active",
    featured: false,
    description:
      "Enter this giveaway using your VEs and get a chance to win a ₹500 Amazon voucher.",
    endDate: "2026-10-08T17:30:00",
    totalEntries: 420,
    image: "/assets/amazon-voucher.png",
  },

  {
    id: "amazon-20",
    title: "₹20 Voucher Giveaway",
    shortTitle: "₹20 Voucher",
    prize: "₹20 Voucher",
    prizeValue: "Reward Voucher",
    entryCost: 2000,
    currency: "Tokens",
    status: "upcoming",
    featured: false,
    description:
      "A small reward opportunity where you can use Tokens to participate.",
    endDate: "2026-10-12T17:30:00",
    totalEntries: 0,
    image: "/assets/reward-voucher.png",
  },
];

export const giveawayStats = {
  totalGiveaways: 24,
  totalParticipants: "8,500+",
  prizesWon: "1,200+",
};

export const currentUser = {
  userId: "VE10025",
  isLoggedIn: true,
  isParticipating: true,
  balances: {
    VEs: 750,
    SVEs: 800,
    Tokens: 5000,
  },
};

export const previousWinners = [
  {
    id: "winner-001",
    userId: "VE10025",
    prize: "Apple Watch",
    giveawayTitle: "Apple Watch Giveaway",
    status: "completed",
  },
  {
    id: "winner-002",
    userId: "VE10482",
    prize: "AirPods",
    giveawayTitle: "AirPods Giveaway",
    status: "completed",
  },
  {
    id: "winner-003",
    userId: "VE10831",
    prize: "₹2,000 Amazon Voucher",
    giveawayTitle: "Amazon Voucher Giveaway",
    status: "completed",
  },
];
