import { Data, IProductInput } from "@/types";
import { toSlug } from "./utils";

const products: IProductInput[] = [
  // T-Shirts
  {
    name: "Nike Mens Slim-fit Long-Sleeve T-Shirt",
    slug: toSlug("Nike Mens Slim-fit Long-Sleeve T-Shirt"),
    category: "T-Shirts",
    images: ["/images/tshirt1.jpg", "/images/tshirt2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 21.8,
    listPrice: 0,
    brand: "Nike",
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    numSales: 9,
    countInStock: 11,
    description:
      "Made with chemicals safer for human health and the environment",
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Red", "Black"],

    reviews: [],
  },
  {
    name: "Jerzees Long-Sleeve Heavyweight Blend T-Shirt",
    slug: toSlug("Jerzees Long-Sleeve Heavyweight Blend T-Shirt"),
    category: "T-Shirts",
    images: [
      "/images/tshirtBanner1.jpg",
      "/images/tshirt2.jpg",
      "/images/tshirtBanner3.jpg",
      "/images/tshirt4.jpg",
    ],
    tags: ["featured"],
    isPublished: true,
    price: 23.78,
    listPrice: 0,
    brand: "Jerzees",
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 29,
    countInStock: 12,
    description:
      "Made with sustainably sourced USA grown cotton; Shoulder-to-shoulder tape; double-needle coverstitched front neck; Set-in sleeves; Rib cuffs with concealed seams; Seamless body for a wide printing area",

    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Yellow", "Red", "Black"],

    reviews: [],
  },
  {
    name: "Jerzees Men's Long-Sleeve T-Shirt",
    slug: toSlug("Jerzees Men Long-Sleeve T-Shirt"),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/tshirt5.jpg", "/images/tshirt6.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 13.86,
    listPrice: 16.03,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 55,
    countInStock: 13,
    description:
      "The Jerzees long sleeve t-shirt is made with dri-power technology that wicks away moisture to keep you cool and dry throughout your day. We also included a rib collar and cuffs for added durability, and a lay-flat collar for comfort. If you are looking for a versatile shirt that you can wear throughout the transitioning seasons, then look no further.",
    sizes: ["XL", "XXL"],
    colors: ["Green", "White"],

    reviews: [],
  },
  {
    name: "Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts",
    slug: toSlug(
      "Decrum Mens Plain Long Sleeve T-Shirt - Comfortable Soft Fashion V Neck Full Sleeves Jersey Shirts"
    ),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/tshirt7.jpg", "/images/tshirt8.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 26.95,
    listPrice: 46.03,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 14,
    description:
      "Elevate your outfit with this soft long sleeve t shirt men. This full sleeves tee is the ultimate upgrade from your regular cotton t-shirt. ",
    sizes: ["XL", "XXL"],
    colors: ["Yellow", "White"],

    reviews: [],
  },
  {
    name: "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt",
    slug: toSlug(
      "Muscle Cmdr Men's Slim Fit Henley Shirt Long&Short Business Sleeve Casual 3 Metal Buton Placket Casual Stylish T-Shirt"
    ),
    category: "T-Shirts",
    brand: " Muscle Cmdr",
    images: ["/images/tshirt1.jpg", "/images/tshirt9.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 29.99,
    listPrice: 35.99,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    numSales: 54,
    countInStock: 15,
    description:
      "Slim Fit Design:Men's Muscle Slim Fit Button Henley Shirts are designed to fit snugly against your body, accentuating your muscles and creating a sleek silhouette that's perfect for any occasion. ",
    sizes: ["XL", "XXL"],
    colors: ["Green", "Yellow"],

    reviews: [],
  },
  {
    name: "Hanes Mens Long Sleeve Beefy Henley Shirt",
    slug: toSlug("Hanes Mens Long Sleeve Beefy Henley Shirt"),
    category: "T-Shirts",
    brand: "Jerzees",
    images: ["/images/tshirtBanner1.jpg", "/images/tshirt2.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 25.3,
    listPrice: 32.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 16,
    numSales: 56,
    description:
      "Heavyweight cotton (Heathers are 60% cotton/40% polyester; Pebblestone is 75% cotton/25% polyester)",
    sizes: ["XL", "XXL"],
    colors: ["Grey", "White"],

    reviews: [],
  },

  // Jeans
  {
    name: "Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans",
    slug: toSlug("Silver Jeans Co. Mens Jace Slim Fit Bootcut Jeans"),
    category: "Jeans",
    brand: "Silver Jeans Co",
    images: ["/images/jeansBanner1.jpg", "/images/jeansBanner2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 54,
    numSales: 21,
    description:
      "Silver Jeans Co. Jace Slim Fit Bootcut Jeans - Consider Jace a modern cowboy jean. It sits below the waist and features a slim fit through the hip and thigh. Finished with an 18” bootcut leg opening that complements the slimmer silhouette while still fitting over boots",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)",
    slug: toSlug(
      "Levi's mens 505 Regular Fit Jeans (Also Available in Big & Tall)"
    ),
    category: "Jeans",
    brand: "Levi's",
    images: ["/images/jeans3.jpg", "/images/jeans4.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 59.99,
    listPrice: 69.99,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 22,
    numSales: 54,
    description:
      "A veritable classic, this 505 is made to have a comfortable look and style.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Essentials Mens Straight-Fit Stretch Jean",
    slug: toSlug("Essentials Mens Straight-Fit Stretch Jean"),
    category: "Jeans",
    brand: "Essentials",
    images: ["/images/jeans5.jpg", "/images/jeans6.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 38.9,
    listPrice: 45,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 23,
    numSales: 54,
    description:
      "These classic 5-pocket straight-fit jeans are crafted with a bit of stretch for additional comfort and to help maintain their shape",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Grey", "Blue"],

    reviews: [],
  },
  {
    name: "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans",
    slug: toSlug(
      "Buffalo David Bitton Mens Men's Driven Relaxed Denim JeansJeans"
    ),
    category: "Jeans",
    brand: "Buffalo David Bitton",
    images: ["/images/jeans7.jpg", "/images/jeans8.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 69.99,
    listPrice: 100,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 24,
    numSales: 53,
    description:
      "Stretch recycled denim jeans in an authentic and sanded wash blue. Features a comfortable low-rise waist with a relaxed fit at the leg. The distressed look gives these jeans an effortlessly worn-in feel. The eco-friendly logo patch in tan and red is at the back waistband. The signature maple leaf graphic is debossed at the zip-fly.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Dickies Mens Relaxed Fit Carpenter Jean",
    slug: toSlug("Dickies Mens Relaxed Fit Carpenter Jean"),
    category: "Jeans",
    brand: "Dickies",
    images: ["/images/jeans10.jpg", "/images/jeans9.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 95.34,
    listPrice: 0,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 25,
    numSales: 48,
    description:
      "Relaxed work jean with traditional carpenter-style pockets and logo patch at back pockets",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },
  {
    name: "Wrangler mens Premium Performance Cowboy Cut Slim Fit Jean",
    slug: toSlug("Wrangler mens Premium Performance Cowboy Cut Slim Fit Jean"),
    category: "Jeans",
    brand: "Wrangler",
    images: ["/images/jeans1.jpg", "/images/jeans2.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 81.78,
    listPrice: 149.99,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 26,
    numSales: 48,
    description:
      "Designed with a functional fit in mind, these jeans are made to stack over your favorite pair of boots. Constructed with a slim fit in the waist, seat, and thigh, this jean is made for both function and comfort for long days in the saddle.",
    sizes: ["30Wx30L", "34Wx30L", "36Wx30L"],
    colors: ["Blue", "Grey"],

    reviews: [],
  },

  // Watches
  {
    name: "Seiko Men's Analogue Watch with Black Dial",
    slug: toSlug("Seiko Men's Analogue Watch with Black Dial"),
    category: "Wrist Watches",
    brand: "Seiko",
    images: ["/images/watch1.jpg", "/images/watch2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 530.0,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 31,
    numSales: 48,
    description:
      "Casing: Case made of stainless steel Case shape: round Case colour: silver Glass: Hardlex Clasp type: Fold over clasp with safety",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch",
    slug: toSlug(
      "SEIKO 5 Sport SRPJ83 Beige Dial Nylon Automatic Watch, Beige, Automatic Watch"
    ),
    category: "Wrist Watches",
    brand: "Seiko",
    images: ["/images/watch3.jpg", "/images/watchBanner4.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 375.83,
    listPrice: 400,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 32,
    numSales: 48,
    description:
      "Seiko 5 Sports Collection Inspired by vintage field/aviator style: Automatic with manual winding capability",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch ",
    slug: toSlug(
      "Casio Men's Heavy Duty Analog Quartz Stainless Steel Strap, Silver, 42 Casual Watch"
    ),
    category: "Wrist Watches",
    brand: "Casio",
    images: ["/images/watchBanner5.jpg", "/images/watch6.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 60.78,
    listPrice: 0,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 33,
    numSales: 48,
    description:
      "The Casio range is growing with this model  MWA-100H-1AVEF. Sporting a stainless steel case with a brushed finish, it will easily withstand all the shocks of everyday life.",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch",
    slug: toSlug(
      "Casio Classic Silver-Tone Stainless Steel Band Date Indicator Watch"
    ),
    category: "Wrist Watches",
    brand: "Casio",
    images: ["/images/watch7.jpg", "/images/watch8.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 34.22,
    listPrice: 54.99,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 34,
    numSales: 48,
    description:
      "The new MTPVD01D-7EV is a classic 50 meter water resistant stainless steel watch now updated with a white dial. This elegant 3 hand, date display timepiece is perfect for any setting.",
    sizes: [],
    colors: [],

    reviews: [],
  },
  {
    name: "Fossil Men's Grant Stainless Steel Quartz Chronograph Watch",
    slug: toSlug("Fossil Men's Grant Stainless Steel Quartz Chronograph Watch"),
    category: "Wrist Watches",
    brand: "Fossil",
    images: ["/images/watch10.jpg", "/images/watch9.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 171.22,
    listPrice: 225,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 35,
    numSales: 48,
    description:
      "Chronograph watch featuring silver- and blue-tone case, blue sunray dial, and silver-tone Roman numeral indices",
    sizes: [],
    colors: ["Blue", "Black", "Sliver"],

    reviews: [],
  },
  {
    name: "Fossil Men's Machine Stainless Steel Quartz Watch",
    slug: toSlug("Fossil Men's Machine Stainless Steel Quartz Watch"),
    category: "Wrist Watches",
    brand: "Fossil",
    images: ["/images/watch11.jpg", "/images/watch12.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 158.21,
    listPrice: 229.0,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 36,
    numSales: 49,
    description:
      "In masculine black-on-black, our industrial-inspired Machine watch will add a fresh, modern touch to your casual look. This Machine watch also features a three hand movement on a stainless steel bracelet.",
    sizes: [],
    colors: ["Brown", "Sliver", "Black"],

    reviews: [],
  },

  // Sneakers
  {
    name: "adidas Mens Grand Court 2.0 Training Shoes Training Shoes",
    slug: toSlug("adidas Mens Grand Court 2.0 Training Shoes Training Shoes"),
    category: "Shoes",
    brand: "adidas",
    images: ["/images/sneaker1.jpg", "/images/sneakerBanner2.jpg"],
    tags: ["new-arrival"],
    isPublished: true,
    price: 81.99,
    listPrice: 0,
    avgRating: 4.71,
    numReviews: 7,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 2 },
      { rating: 5, count: 5 },
    ],
    countInStock: 41,
    numSales: 48,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10"],
    colors: ["White", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes",
    slug: toSlug(
      "ziitop Men's Running Walking Shoes Fashion Sneakers Mesh Dress Shoes Business Oxfords Shoes Lightweight Casual Breathable Work Formal Shoes"
    ),
    category: "Shoes",
    brand: "ziitop",
    images: ["/images/sneaker3.jpg", "/images/sneaker4.jpg"],
    tags: ["featured"],
    isPublished: true,
    price: 39.97,
    listPrice: 49.96,
    avgRating: 4.2,
    numReviews: 10,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 0 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 42,
    numSales: 50,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10"],
    colors: ["Beige", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "Skechers mens Summits High Range Hands Free Slip-in Shoes Work shoe",
    slug: toSlug(
      "Skechers mens Summits High Range Hands Free Slip-in Shoes Work shoe"
    ),
    category: "Shoes",
    brand: "Skechers",
    images: ["/images/sneaker5.jpg", "/images/sneaker5.jpg"],
    tags: ["best-seller"],
    isPublished: true,
    price: 99.99,
    listPrice: 0,
    avgRating: 4,
    numReviews: 12,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 0 },
      { rating: 3, count: 2 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 43,
    numSales: 72,
    description:
      "Step into easy-wearing comfort with Skechers Hands Free Slip-ins™: Summits - High Range. Along with our Exclusive Heel Pillow™ holds your foot securely in place, this vegan style features a unique pop-up Skechers Slip-ins™ molded heel panel, a mesh upper with fixed laces",
    sizes: ["8", "9", "10"],
    colors: ["Navy", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "DLWKIPV Mens Running Shoes Tennis Cross Training Sneakers Fashion Non Slip Outdoor Walking Jogging Shoes Mesh Light Flexible Comfortable Breathable Shoes",
    slug: toSlug(
      "DLWKIPV Mens Running Shoes Tennis Cross Training Sneakers Fashion Non Slip Outdoor Walking Jogging Shoes Mesh Light Flexible Comfortable Breathable Shoes"
    ),
    category: "Shoes",
    brand: "DLWKIPV",
    images: ["/images/sneaker7.jpg", "/images/sneaker8.jpg"],
    tags: ["todays-deal"],
    isPublished: true,
    price: 36.99,
    listPrice: 56.9,
    avgRating: 3.85,
    numReviews: 14,
    ratingDistribution: [
      { rating: 1, count: 0 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 44,
    numSales: 72,
    description:
      "Design: Mesh vamp, ventilation. Sole anti-slip groove design, shock absorption and anti-slip. The inside of the shoe is wide and soft, bringing you a good comfortable experience",
    sizes: ["8", "9", "10", "11", "12"],
    colors: ["Brown", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "ASICS Men's GT-2000 13 Running Shoes",
    slug: toSlug("ASICS Men's GT-2000 13 Running Shoes"),
    category: "Shoes",
    brand: "ASICS",
    images: ["/images/sneakerBanner9.jpg", "/images/sneaker10.jpg"],
    tags: ["new-arrival", "featured"],
    isPublished: true,
    price: 179.95,
    listPrice: 200,
    avgRating: 3.66,
    numReviews: 15,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 5 },
    ],
    countInStock: 45,
    numSales: 64,
    description:
      "At least 50% of the shoe's main upper material is made with recycled content to reduce waste and carbon emissions",
    sizes: ["8", "9", "10", "11"],
    colors: ["Blue", "Black", "Grey"],

    reviews: [],
  },
  {
    name: "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes",
    slug: toSlug(
      "Mens Wearbreeze Shoes, Urban - Ultra Comfortable Shoes, Breeze Shoes for Men, Men's Mesh Dress Sneakers Business Shoes"
    ),
    category: "Shoes",
    brand: "Generic",
    images: ["/images/sneaker11.jpg", "/images/sneaker12.jpg"],
    tags: ["best-seller", "todays-deal"],
    isPublished: true,
    price: 32.99,
    listPrice: 80,
    avgRating: 3.46,
    numReviews: 13,
    ratingDistribution: [
      { rating: 1, count: 1 },
      { rating: 2, count: 2 },
      { rating: 3, count: 3 },
      { rating: 4, count: 4 },
      { rating: 5, count: 3 },
    ],
    countInStock: 46,
    numSales: 48,
    description:
      "Cloudfoam Comfort sockliner is ultra-soft and plush, with two layers of cushioning topped with soft, breathable mesh",
    sizes: ["8", "9", "10", "11"],
    colors: ["Green", "Black", "Grey"],

    reviews: [],
  },
];
// const reviews = [
//   {
//     rating: 1,
//     title: "Poor quality",
//     comment:
//       "Very disappointed. The item broke after just a few uses. Not worth the money.",
//   },
//   {
//     rating: 2,
//     title: "Disappointed",
//     comment:
//       "Not as expected. The material feels cheap, and it didn't fit well. Wouldn't buy again.",
//   },
//   {
//     rating: 2,
//     title: "Needs improvement",
//     comment:
//       "It looks nice but doesn't perform as expected. Wouldn't recommend without upgrades.",
//   },
//   {
//     rating: 3,
//     title: "not bad",
//     comment:
//       "This product is decent, the quality is good but it could use some improvements in the details.",
//   },
//   {
//     rating: 3,
//     title: "Okay, not great",
//     comment:
//       "It works, but not as well as I hoped. Quality is average and lacks some finishing.",
//   },
//   {
//     rating: 3,
//     title: "Good product",
//     comment:
//       "This product is amazing, I love it! The quality is top notch, the material is comfortable and breathable.",
//   },
//   {
//     rating: 4,
//     title: "Pretty good",
//     comment:
//       "Solid product! Great value for the price, but there's room for minor improvements.",
//   },
//   {
//     rating: 4,
//     title: "Very satisfied",
//     comment:
//       "Good product! High quality and worth the price. Would consider buying again.",
//   },
//   {
//     rating: 4,
//     title: "Absolutely love it!",
//     comment:
//       "Perfect in every way! The quality, design, and comfort exceeded all my expectations.",
//   },
//   {
//     rating: 4,
//     title: "Exceeded expectations!",
//     comment:
//       "Fantastic product! High quality, feels durable, and performs well. Highly recommend!",
//   },
//   {
//     rating: 5,
//     title: "Perfect purchase!",
//     comment:
//       "Couldn't be happier with this product. The quality is excellent, and it works flawlessly!",
//   },
//   {
//     rating: 5,
//     title: "Highly recommend",
//     comment:
//       "Amazing product! Worth every penny, great design, and feels premium. I'm very satisfied.",
//   },
//   {
//     rating: 5,
//     title: "Just what I needed",
//     comment:
//       "Exactly as described! Quality exceeded my expectations, and it arrived quickly.",
//   },
//   {
//     rating: 5,
//     title: "Excellent choice!",
//     comment:
//       "This product is outstanding! Everything about it feels top-notch, from material to functionality.",
//   },
//   {
//     rating: 5,
//     title: "Couldn't ask for more!",
//     comment:
//       "Love this product! It's durable, stylish, and works great. Would buy again without hesitation.",
//   },
// ];

const data: Data = {
  products,
  headerMenus: [
    {
      name: "Today's Deal",
      href: "/search?tag=todays-deal",
    },
    {
      name: "New Arrivals",
      href: "/search?tag=new-arrival",
    },
    {
      name: "Featured Products",
      href: "/search?tag=featured",
    },
    {
      name: "Best Sellers",
      href: "/search?tag=best-seller",
    },
    {
      name: "Browsing History",
      href: "/#browsing-history",
    },
    {
      name: "Customer Service",
      href: "/page/customer-service",
    },
    {
      name: "About Us",
      href: "/page/about-us",
    },
    {
      name: "Help",
      href: "/page/help",
    },
  ],
  carousels: [
    {
      title: "Most Popular Shoes For Sale",
      buttonCaption: "Shop Now",
      image: "/images/appleBanner.jpg",
      url: "/search?category=Shoes",
      isPublished: true,
    },

    {
      title: "Best Sellers in jeans",
      buttonCaption: "Shop Now",
      image: "/images/jeansBanner2.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },

    {
      title: "Best Deals on Wrist Watches",
      buttonCaption: "See More",
      image: "/images/padBanner3.jpg",
      url: "/search?category=Wrist Watches",
      isPublished: true,
    },

    {
      title: "Best Sellers in T-Shirts",
      buttonCaption: "Shop Now",
      image: "/images/sneakerBanner2.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },

    {
      title: "Best Sellers in Shirts",
      buttonCaption: "Shop Now",
      image: "/images/tshirtBanner1.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },

    {
      title: "Best Sellers in Tops",
      buttonCaption: "Shop Now",
      image: "/images/watchBanner4.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
    {
      title: "Best Sellers in watches",
      buttonCaption: "Shop Now",
      image: "/images/watchBanner5.jpg",
      url: "/search?category=T-Shirts",
      isPublished: true,
    },
  ],
};

export default data;
