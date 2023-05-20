import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  // {
  //   _id: uuid(),
  //   categoryName: "fiction",
  //   description:
  //     "literature in the form of prose, especially novels, that describes imaginary events and people",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "non-fiction",
  //   description:
  //     "Non-fiction is writing that gives information or describes real events, rather than telling a story.",
  // },
  // {
  //   _id: uuid(),
  //   categoryName: "horror",
  //   description:
  //     "Meant to cause discomfort and fear for both the character and readers, horror writers often make use of supernatural and paranormal elements in morbid stories that are sometimes a little too realistic.",
  // },
  {
    id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/SpiroCeramicPot-White_7162f78e-ef39-4241-bbf2-0c17e2d30675.jpg?v=1680305362&width=375",
    category: "Air Plant",
  },
  {
    id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/GrailCeramicPot-Peach_af4863b7-d932-4ce8-a94b-f0ec6b5f0f4b.jpg?v=1681553926&width=375",
    category: "Flowering Plant",
  },
  {
    id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/betel-leaf-magai-paan-with-hanging-pot-31808442531972.jpg?v=1675575911&width=375",
    category: "Climbers",
  },
  {
    id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/philodendron-broken-heart-with-hanging-pot-31808433094788.jpg?v=1675607411&width=375",
    category: "Hanging Basket Plants",
  },
  {
    id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/files/Aimage_3.jpg?v=1682523121",
    category: "Indoor",
  },
  {
    id: uuid(),
    image:
      "https://cdn.shopify.com/s/files/1/0579/7924/0580/products/LagosPlanter-Grey_f26c8dee-c8ce-4e1a-bec7-86006f560c98.jpg?v=1680418283&width=375",
    category: "Cacti & Succulents",
  },
];
