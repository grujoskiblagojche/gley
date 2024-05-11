import { PriceModelCard } from "./priceModelTypes";

const mockPriceModels: PriceModelCard[] = [
  {
    title: "Watch with ads",
    price: "Free",
    features: [
      "Access to a Vast Library",
      "Unlimited Streaming ",
      "Multiple Devices",
      "No Subscription Fee",
    ],
  },
  {
    isOptimal: true,
    title: "Pay to watch",
    price: "499den./month",
    features: [
      "Access to a Vast Library",
      "Unlimited Streaming ",
      "Watch without ads",
      "Offline Viewing",
    ],
  },
  {
    title: "Engage and receive points",
    price: "Watch with points",
    features: [
      "Earn points when you engage",
      "Claim rewards with earned points",
      "No Subscription Fee",
    ],
  },
];

export const priceModelsMockData = (): PriceModelCard[] => mockPriceModels;
