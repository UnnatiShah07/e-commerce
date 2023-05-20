import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  // {
  //   _id: uuid(),
  //   title: "You Can WIN",
  //   author: "Shiv Khera",
  //   price: "5000",
  //   categoryName: "non-fiction",
  // },
  // {
  //   _id: uuid(),
  //   title: "You are Winner",
  //   author: "Junaid Qureshi",
  //   price: "3000",
  //   categoryName: "horror",
  // },
  // {
  //   _id: uuid(),
  //   title: "Think and Grow Rich",
  //   author: "Shiv Khera",
  //   price: "1000",
  //   categoryName: "fiction",
  // },
  // {
  //   id: uuid(),
  //   name: "Sansevieria Zeylanica - XL",
  //   image:
  //     "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/AImage_4c19206a-cb83-4c95-abe2-1699b64a115e.jpg?v=1683711699&width=375",
  //   prevPrice: 2999,
  //   price: 2499,
  //   rating: 5.0,
  // },
  {
    id: uuid(),
    name: "Bamboo Palm Plant",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/SpiroCeramicPot-White_7162f78e-ef39-4241-bbf2-0c17e2d30675.jpg?v=1680305362&width=375",
    prevPrice: 499,
    price: 269,
    rating: 4.8,
    category: "Air Plant",
  },
  {
    id: uuid(),
    name: "Rubber Plant",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/Venice12Planter-White_47fd5ba4-8224-4682-a5f8-098e834deced.jpg?v=1681552835&width=375",
    prevPrice: 599,
    price: 399,
    rating: 4.7,
    category: "Air Plant",
  },
  {
    id: uuid(),
    name: "Ixora (Rugmini) Plant - Pink",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/GrailCeramicPot-Peach_af4863b7-d932-4ce8-a94b-f0ec6b5f0f4b.jpg?v=1681553926&width=375",
    prevPrice: 899,
    price: 599,
    rating: 4.8,
    category: "Flowering Plant",
  },
  {
    id: uuid(),
    name: "Kalanchoe Plant - Yellow",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/kalanchoe-plant-yellow-32173764935812.jpg?v=1675560426&width=375",
    prevPrice: 499,
    price: 399,
    rating: 4.9,
    category: "Flowering Plant",
  },
  {
    id: uuid(),
    name: "Betel Leaf (Magai Paan)",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/betel-leaf-magai-paan-with-hanging-pot-31808442531972.jpg?v=1675575911&width=375",
    prevPrice: 1199,
    price: 999,
    rating: 4.6,
    category: "Climbers",
  },
  {
    id: uuid(),
    name: "Syngonium Pink Plant",
    description:
      "The Syngonium Pink Neon aka Syngonium podophyllum 'Neon Robusta' is simply the cutest ornamental creeper you will have met. Its adorable pink arrow-shaped leaves make him look so perfect that it feels it's handmade. Ideal for both tabletops and floor planters, with proper care, it can grow up to 3 to 6 feet. Also known as the Goosefoot or arrowhead plant, it is wonderfully unpredictable because as a baby he grows upright but can either trail or climb as he grows older.",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/LagosPlanter-Mocca_8469d47e-203e-4af4-92ba-866ead1838c8.jpg?v=1680417998&width=375",
    prevPrice: 299,
    price: 179,
    rating: 4.8,
    category: "Climbers",
  },
  {
    id: uuid(),
    name: "Kesar Mango Plant",
    description: "",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/kesar-mango-plant-32113851662468.jpg?v=1673871657&width=375",
    prevPrice: 1249,
    price: 949,
    rating: 5.0,
    category: "Fruit Plant",
  },
  {
    id: uuid(),
    name: "Sapota Plant (Chiku)",
    description: "",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/sapota-plant-32114400493700.jpg?v=1673871839&width=375",
    prevPrice: 1299,
    price: 999,
    rating: 5.0,
    category: "Fruit Plant",
  },
  {
    id: uuid(),
    name: "Turtle Vine",
    description: "",
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/turtle-vine-31263162957956.png?v=1675622173&width=375",
    prevPrice: 1299,
    price: 999,
    rating: 4.5,
    category: "Ground Covers",
  },
  {
    id: uuid(),
    name: "Philodendron Broken Heart",
    description: "One of the most popular houseplants, this easy growing plant with its heart shaped leaves that have holes in the leaf blade is a crowd favourite. Quick to grow with delicate trailing vines that can be styled for every space, the Philodendron broken heart will add an instant tropical feel and charm to your space.",
    image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/philodendron-broken-heart-with-hanging-pot-31808433094788.jpg?v=1675607411&width=375",
    prevPrice: 1199,
    price: 999,
    rating: 5.0,
    category: "Hanging Basket Plants",
  },
  {
    id: uuid(),
    name: "Golden Sedum Plant",
    description: "Sedum plant are golden green tufty perennial plants with leaves clustered on thick stems.These chubby cuties golden sedum plant grow horizontally rather than vertically and are popularly planted in clusters. Their foliage is attractively golden and padded, making them an eye candy for anyone looking to add some minimalist plants to their home decor.",
    image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/LagosPlanter-Mocca_a587b578-a825-42e7-ae03-59858b7c7ee6.jpg?v=1680435249&width=375",
    prevPrice: 299,
    price: 179,
    rating: 5.0,
    category: "Hanging Basket Plants",
  },
  {
    id: uuid(),
    name: "Areca Palm Plant XL",
    description: "Once an endangered species, the Areca Palm is a staple in Indian spaces. One of the most undervalued plants in the indoor plant category. This excellent air purifier is pet friendly and easy to grow. Its delicate leaves/fronds grow outwards in a curved manner and add a tropical feel to any space and can adapt to a variety of growing condition",
    image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/areca-palm-plant-xl-31798831349892.jpg?v=1675575726&width=375",
    prevPrice: 2999,
    price: 2499,
    rating: 5.0,
    category: "Indoor",
  },
  {
    id: uuid(),
    name: "Lucky Bamboo Plant - 3 Layer",
    description: "One of the luckiest plants according to Feng Shui is the Lucky Bamboo 3 Layer plant. This easy to grow and inexpensive plant is a popular choice of plant to keep at homes or offices. An excellent and easy to maintain gifting option that is said to bring luck to the bearer. Place it in a stunning glass bowl and make it a centrepiece.",
    image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Aimage_3.jpg?v=1682523121",
    prevPrice: 499,
    price: 359,
    rating: 4.8,
    category: "Indoor",
  },
  {
    id: uuid(),
    name: "Jade Plant Mini",
    description: "Are you a sucker for succulents? The Crassula Green Mini will be your dream plant kid. One of the easiest houseplants to look after, the Crassula Green Mini boasts a lush foliage which beautifies any room. Also considered lucky as per Feng Shui for its coin like round plump leaves, so go on, bring some green home, the luck just tags along for free.",
    image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375",
    prevPrice: 299,
    price: 179,
    rating: 4.8,
    category: "Cacti & Succulents",
  },
  {
    id: uuid(),
    name: "The Sun-loving Succulent Bundle",
    description: "These are the sun babies! A perfect fit for the sunny corners of your home, they require very little care and thrive on neglect. These succulents have both pattern and form, their rosettes are a work of art. Place them on your sunny windowsills and admire their beauty without worrying about their care. An easy way to add green to your space that suits your busy lifestyle.",
    image: "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/the-sun-loving-succulent-bundle-31263062229124.png?v=1675622523&width=375",
    prevPrice: 1699,
    price: 1499,
    rating: 5.0,
    category: "Cacti & Succulents",
  },
];
