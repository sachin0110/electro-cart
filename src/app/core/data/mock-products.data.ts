import {
  Product,
  ProductType,
  PriceRange,
  ProductReview,
} from '../models/product.model';

// Initial mock products
export const initialMockProducts: Product[] = [
  {
    id: 1,
    name: 'Samsung 65" QLED 4K TV',
    type: 'TVs',
    price: 1299.99,
    rating: 4.5,
    imageUrl: 'https://placehold.co/300x200?text=Samsung+TV',
    shortDescription: '65" QLED 4K Smart TV with HDR',
    longDescription:
      'Experience stunning picture quality with Quantum Dot technology, delivering over a billion shades of color. Features AI-powered 4K upscaling and smart TV capabilities.',
    reviews: [
      {
        id: 1,
        userName: 'John D.',
        rating: 5,
        comment: 'Amazing picture quality!',
        date: '2024-03-15',
      },
      {
        id: 2,
        userName: 'Sarah M.',
        rating: 4,
        comment: 'Great TV, but setup was a bit tricky',
        date: '2024-03-14',
      },
    ],
  },
  {
    id: 2,
    name: 'iPhone 15 Pro',
    type: 'Phones',
    price: 999.99,
    rating: 4.8,
    imageUrl: 'https://placehold.co/300x200?text=iPhone+15+Pro',
    shortDescription: 'Latest iPhone with Pro camera system',
    longDescription:
      'The iPhone 15 Pro features a revolutionary camera system, powerful A17 Pro chip, and stunning Super Retina XDR display with ProMotion.',
    reviews: [
      {
        id: 3,
        userName: 'Mike R.',
        rating: 5,
        comment: "Best phone I've ever had!",
        date: '2024-03-13',
      },
      {
        id: 4,
        userName: 'Emily W.',
        rating: 4.5,
        comment: 'Camera is incredible',
        date: '2024-03-12',
      },
    ],
  },
  {
    id: 3,
    name: 'Sony PlayStation 5',
    type: 'Video Games',
    price: 499.99,
    rating: 4.9,
    imageUrl: 'https://placehold.co/300x200?text=PlayStation+5',
    shortDescription: 'Next-gen gaming console with SSD',
    longDescription:
      'The PS5 offers lightning-fast loading with an ultra-high-speed SSD, deeper immersion with haptic feedback and adaptive triggers, and stunning 4K graphics.',
    reviews: [
      {
        id: 5,
        userName: 'James K.',
        rating: 5,
        comment: 'Best console ever made!',
        date: '2024-03-10',
      },
      {
        id: 6,
        userName: 'Melissa T.',
        rating: 4.5,
        comment: 'Amazing graphics but still hard to find games',
        date: '2024-03-08',
      },
    ],
  },
  {
    id: 4,
    name: 'Dell XPS 15 Laptop',
    type: 'Computers',
    price: 1599.99,
    rating: 4.7,
    imageUrl: 'https://placehold.co/300x200?text=Dell+XPS+15',
    shortDescription: 'Premium 15-inch laptop with 4K display',
    longDescription:
      'The Dell XPS 15 features a stunning 4K InfinityEdge display, powerful Intel Core processors, and NVIDIA graphics in a sleek, lightweight design.',
    reviews: [
      {
        id: 7,
        userName: 'Alex T.',
        rating: 5,
        comment: 'Powerful and beautiful design!',
        date: '2024-03-05',
      },
      {
        id: 8,
        userName: 'Rachel P.',
        rating: 4,
        comment: 'Great laptop but runs hot under load',
        date: '2024-03-02',
      },
    ],
  },
  {
    id: 5,
    name: 'Bose QuietComfort Headphones',
    type: 'Audio',
    price: 329.99,
    rating: 4.6,
    imageUrl: 'https://placehold.co/300x200?text=Bose+Headphones',
    shortDescription: 'Wireless noise-cancelling headphones',
    longDescription:
      'Industry-leading noise cancellation with premium sound quality. Features 20 hours of battery life, comfortable design, and seamless Bluetooth connectivity.',
    reviews: [
      {
        id: 9,
        userName: 'Mark L.',
        rating: 5,
        comment: 'Best noise cancellation on the market!',
        date: '2024-02-28',
      },
      {
        id: 10,
        userName: 'Jessica B.',
        rating: 4,
        comment: 'Great sound but ear cushions could be more comfortable',
        date: '2024-02-25',
      },
    ],
  },
];

// Price ranges
export const mockPriceRanges: PriceRange[] = [
  { id: 1, min: 0, max: 500, label: 'Under $500' },
  { id: 2, min: 500, max: 1000, label: '$500 - $1000' },
  { id: 3, min: 1000, max: 2000, label: '$1000 - $2000' },
  { id: 4, min: 2000, max: null, label: 'Over $2000' },
];

// Product types
export const mockProductTypes: ProductType[] = [
  'All',
  'TVs',
  'Appliances',
  'Phones',
  'Video Games',
  'Computers',
  'Audio',
];

// Data for generating additional products
const productCategories = [
  'TVs',
  'Appliances',
  'Phones',
  'Video Games',
  'Computers',
  'Audio',
] as const;
type ProductCategory = (typeof productCategories)[number];

const brands: Record<ProductCategory, string[]> = {
  TVs: [
    'Sony',
    'LG',
    'Samsung',
    'TCL',
    'Vizio',
    'Hisense',
    'Philips',
    'Panasonic',
  ],
  Phones: [
    'Apple',
    'Samsung',
    'Google',
    'OnePlus',
    'Xiaomi',
    'Motorola',
    'Sony',
    'Nokia',
  ],
  'Video Games': [
    'PlayStation',
    'Xbox',
    'Nintendo',
    'Steam',
    'Oculus',
    'ASUS ROG',
    'Alienware',
    'MSI',
  ],
  Computers: [
    'Dell',
    'HP',
    'Lenovo',
    'ASUS',
    'Acer',
    'Microsoft',
    'Apple',
    'MSI',
  ],
  Audio: [
    'Bose',
    'Sony',
    'JBL',
    'Sennheiser',
    'Audio-Technica',
    'Beats',
    'Anker',
    'Sonos',
  ],
  Appliances: [
    'Samsung',
    'LG',
    'Whirlpool',
    'GE',
    'Bosch',
    'Dyson',
    'KitchenAid',
    'Maytag',
  ],
};

const tvModels = [
  'OLED',
  'QLED',
  'NanoCell',
  'Crystal UHD',
  'Mini-LED',
  '4K HDR',
  '8K Ultra',
  'Smart TV',
];
const phoneModels = [
  'Pro',
  'Ultra',
  'Max',
  'Plus',
  'Fold',
  'Flip',
  'Mini',
  'Elite',
];
const consoleGames = [
  'Controller',
  'Console',
  'Gaming Headset',
  'VR Headset',
  'Racing Wheel',
  'Gaming Chair',
  'Gaming Monitor',
  'Streaming Deck',
];
const computerModels = [
  'Ultrabook',
  'Gaming Laptop',
  'All-in-One',
  'Desktop',
  'Tower',
  'Workstation',
  'Mini PC',
  'Convertible',
];
const audioModels = [
  'Headphones',
  'Earbuds',
  'Speaker',
  'Soundbar',
  'Turntable',
  'Receiver',
  'Amplifier',
  'Subwoofer',
];
const applianceModels = [
  'Refrigerator',
  'Washing Machine',
  'Dishwasher',
  'Microwave',
  'Vacuum',
  'Air Purifier',
  'Coffee Maker',
  'Blender',
];

const modelsByType: Record<ProductCategory, string[]> = {
  TVs: tvModels,
  Phones: phoneModels,
  'Video Games': consoleGames,
  Computers: computerModels,
  Audio: audioModels,
  Appliances: applianceModels,
};

type DescriptionData = {
  short: string[];
  long: string[];
};

const descriptions: Record<ProductCategory, DescriptionData> = {
  TVs: {
    short: [
      '4K Smart TV with HDR',
      'Ultra HD Smart Television',
      'Smart LED TV with Streaming',
      'AI-Powered Smart TV',
    ],
    long: [
      'Experience stunning picture quality with vibrant colors and deep blacks. Features smart streaming capabilities and voice control.',
      'Enjoy crystal clear resolution with amazing contrast and brightness. Comes with built-in streaming apps and game mode.',
      'Immerse yourself in lifelike picture quality with HDR technology. Smart features allow easy access to your favorite content.',
      'Revolutionary display technology delivers incredible picture quality with true-to-life colors and perfect blacks.',
    ],
  },
  Phones: {
    short: [
      '5G Smartphone with Pro Camera',
      'Flagship Phone with AMOLED Display',
      'Premium Smartphone with All-Day Battery',
      'Ultra-Fast Smartphone with AI',
    ],
    long: [
      'Experience lightning-fast performance with the latest processor and 5G connectivity. Features a professional-grade camera system.',
      'Stunning AMOLED display with high refresh rate for smooth scrolling. Long-lasting battery and fast charging technology.',
      'Capture amazing photos in any lighting with the advanced camera system. All-day battery life and premium build quality.',
      'Powered by advanced AI for intelligent features and optimized performance. Features a stunning display and premium design.',
    ],
  },
  'Video Games': {
    short: [
      'Next-Gen Gaming Experience',
      'Immersive Gaming System',
      'High-Performance Gaming',
      'Premium Gaming Accessory',
    ],
    long: [
      'Take your gaming to the next level with cutting-edge graphics and ultra-fast loading times. Experience games like never before.',
      'Immerse yourself in stunning worlds with realistic graphics and 3D audio. Features advanced haptic feedback for deeper immersion.',
      'Designed for competitive gamers with precision controls and minimal latency. Built to withstand intense gaming sessions.',
      'Enhanced gaming experience with premium materials and ergonomic design. Compatible with all major gaming platforms.',
    ],
  },
  Computers: {
    short: [
      'High-Performance Laptop',
      'Premium PC with SSD',
      'Powerful Workstation',
      'Ultra-Thin Laptop with Long Battery Life',
    ],
    long: [
      'Blazing-fast performance for demanding tasks with the latest processor and graphics. Features a premium display and build quality.',
      'Lightning-fast SSD storage and ample RAM for smooth multitasking. Designed for both work and entertainment.',
      'Professional-grade performance for creative and technical workflows. Features expanded connectivity and upgrade options.',
      'All-day battery life in an incredibly thin and light design. Perfect for productivity on the go with premium build quality.',
    ],
  },
  Audio: {
    short: [
      'Premium Sound System',
      'Wireless Audio with Deep Bass',
      'High-Fidelity Audio Experience',
      'Noise Cancelling Sound',
    ],
    long: [
      'Immerse yourself in rich, detailed sound with powerful bass and crystal-clear highs. Features wireless connectivity and long battery life.',
      'Experience music the way it was meant to be heard with studio-quality sound reproduction and comfortable design.',
      'Advanced noise cancellation technology blocks out the world around you. Enjoy your music without distractions.',
      'Fill your room with immersive, multi-dimensional sound. Smart features allow seamless integration with your home setup.',
    ],
  },
  Appliances: {
    short: [
      'Smart Home Appliance',
      'Energy-Efficient Appliance',
      'Premium Kitchen Appliance',
      'Connected Home Solution',
    ],
    long: [
      'Make your home smarter with this connected appliance featuring intelligent sensors and smartphone control.',
      'Save on energy costs while enjoying premium performance. Features quiet operation and durable construction.',
      'Professional-grade performance brings commercial quality to your home. Features intuitive controls and premium finish.',
      'Simplify your daily routine with this efficient and reliable appliance. Features modern design and advanced technology.',
    ],
  },
};

const userNames = [
  'Michael S.',
  'Jennifer K.',
  'David L.',
  'Emma R.',
  'Robert T.',
  'Sophia G.',
  'William P.',
  'Olivia M.',
  'Thomas B.',
  'Ava C.',
  'James H.',
  'Isabella N.',
  'Richard F.',
  'Mia J.',
  'Joseph D.',
  'Charlotte W.',
];

const comments = [
  'Absolutely love this product!',
  'Great value for the price.',
  'Exceeded my expectations.',
  'Would definitely recommend to friends.',
  'Good quality but shipping was slow.',
  'Works exactly as described.',
  'Perfect for my needs.',
  'Very impressed with the quality.',
  'Easy to set up and use.',
  'Could be better but overall satisfied.',
  'Love the design and functionality.',
  "Best purchase I've made this year.",
  'Solid performance.',
  'Great customer service when I had questions.',
  'Better than expected quality.',
  'A bit pricey but worth the investment.',
];

/**
 * Generates additional mock products
 * @param count Number of products to generate
 * @param startId Starting ID for the generated products
 * @returns Array of generated products
 */
export function generateMockProducts(
  count: number,
  startId: number
): Product[] {
  const products: Product[] = [];

  for (let i = 0; i < count; i++) {
    const id = startId + i;
    const typeIndex = Math.floor(Math.random() * productCategories.length);
    const type = productCategories[typeIndex];

    if (type) {
      const brandIndex = Math.floor(Math.random() * brands[type].length);
      const brand = brands[type][brandIndex];

      const modelIndex = Math.floor(Math.random() * modelsByType[type].length);
      const model = modelsByType[type][modelIndex];

      const shortDescriptionIndex = Math.floor(
        Math.random() * descriptions[type].short.length
      );
      const shortDescription = descriptions[type].short[shortDescriptionIndex];

      const longDescriptionIndex = Math.floor(
        Math.random() * descriptions[type].long.length
      );
      const longDescription = descriptions[type].long[longDescriptionIndex];

      // Generate a random price based on product type
      let price = 0;
      switch (type) {
        case 'TVs':
          price = Math.floor(Math.random() * 2000) + 399;
          break;
        case 'Phones':
          price = Math.floor(Math.random() * 800) + 299;
          break;
        case 'Video Games':
          price = Math.floor(Math.random() * 400) + 49;
          break;
        case 'Computers':
          price = Math.floor(Math.random() * 1500) + 499;
          break;
        case 'Audio':
          price = Math.floor(Math.random() * 300) + 79;
          break;
        case 'Appliances':
          price = Math.floor(Math.random() * 1000) + 199;
          break;
        default:
          price = Math.floor(Math.random() * 500) + 99;
      }

      // Round to .99
      price = Math.floor(price) + 0.99;

      // Generate a random rating between 3.5 and 5.0
      const rating = (Math.random() * 1.5 + 3.5).toFixed(1);

      // Create between 2-4 reviews
      const reviews: ProductReview[] = [];
      const numReviews = Math.floor(Math.random() * 3) + 2;

      for (let j = 0; j < numReviews; j++) {
        const reviewId = id * 10 + j;
        const userNameIndex = Math.floor(Math.random() * userNames.length);
        const userName = userNames[userNameIndex];

        const reviewRating = (Math.random() * 2 + 3).toFixed(1);

        const commentIndex = Math.floor(Math.random() * comments.length);
        const comment = comments[commentIndex];

        // Generate a random date within the last 3 months
        const date = new Date();
        date.setDate(date.getDate() - Math.floor(Math.random() * 90));
        const dateString = date.toISOString().split('T')[0];

        reviews.push({
          id: reviewId,
          userName,
          rating: parseFloat(reviewRating),
          comment,
          date: dateString,
        });
      }

      const name = `${brand} ${model}`;
      const imageUrl = `https://placehold.co/300x200?text=${encodeURIComponent(
        name.replace(/\s+/g, ' ')
      )}`;

      products.push({
        id,
        name,
        type,
        price,
        rating: parseFloat(rating),
        imageUrl,
        shortDescription,
        longDescription,
        reviews,
      });
    }
  }

  return products;
}
