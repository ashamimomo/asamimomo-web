export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string;
  isVegetarian?: boolean;
  isVegan?: boolean;
  isSpicy?: boolean;
  popular?: boolean;
};

export const MENU_CATEGORIES = [
  "Appetizers",
  "Chaat & Noodles",
  "Ashami Chili",
  "Fried Wings",
  "Momo",
];

export const MENU_ITEMS: MenuItem[] = [
  /* =======================
     APPETIZERS
  ======================== */
  {
    id: "app-1",
    name: "Vegetable Pakora",
    price: 6.99,
    description:
      "Crispy mixed vegetables dipped in a lightly spiced batter and deep fried until golden. Served with tamarind and fresh mint sauce.",
    category: "Appetizers",
    isVegetarian: true,
    isVegan: true,
    image: "/menu/appetizers/vegetable-pakora.jpg",
  },
  {
    id: "app-2",
    name: "Chicken Choila",
    price: 12.99,
    description:
      "Boneless chicken marinated with herbs, grilled in a tandoor oven, and tossed with Ashami special spices (served cold).",
    category: "Appetizers",
    image: "/menu/appetizers/chicken-choila.jpg",
  },
  {
    id: "app-3",
    name: "Buff Choila",
    price: 17.99,
    description:
      "Tender boneless buffalo meat marinated in herbs, grilled, and seasoned with Ashami spices (served cold).",
    category: "Appetizers",
    image: "/menu/appetizers/buff-choila.jpg",
  },
  {
    id: "app-4",
    name: "Pork Choila",
    price: 14.99,
    description:
      "Juicy grilled pork marinated with herbs and Ashami spices for a smoky flavor (served cold).",
    category: "Appetizers",
    image: "/menu/appetizers/pork-choila.jpg",
  },
  {
    id: "app-5",
    name: "Veg Samosa",
    price: 4.99,
    description:
      "Golden fried pastry filled with spiced potatoes, onions, and peas. Served with tamarind and cilantro chutney.",
    category: "Appetizers",
    isVegetarian: true,
    image: "/menu/appetizers/veg-samosa.jpg",
  },
  {
    id: "app-6",
    name: "Shrimp Tempura",
    price: 6.99,
    description:
      "Lightly battered shrimp deep fried until crispy outside and juicy inside.",
    category: "Appetizers",
    image: "/menu/appetizers/shrimp-tampora.jpg",
  },
  {
    id: "app-7",
    name: "Mozzarella Sticks",
    price: 6.99,
    description:
      "Breaded mozzarella fried until crispy, served with ranch dressing.",
    category: "Appetizers",
    isVegetarian: true,
    image: "/menu/appetizers/veg-samosa.jpg",
  },
  {
    id: "app-8",
    name: "French Fries",
    price: 6.99,
    description: "Classic crispy deep-fried potatoes, lightly salted.",
    category: "Appetizers",
    isVegetarian: true,
    isVegan: true,
    image: "/menu/appetizers/french-fries.jpg",
  },
  {
    id: "app-9",
    name: "Spring Roll",
    price: 6.99,
    description:
      "Crispy vegetable rolls served with Ashami tamarind and cilantro sauce.",
    category: "Appetizers",
    isVegetarian: true,
    isVegan: true,
    image: "/menu/appetizers/spring-roll.jpg",
  },
  {
    id: "app-10",
    name: "Onion Rings",
    price: 6.99,
    description:
      "Thick-cut onion rings fried golden, served with chipotle mayo.",
    category: "Appetizers",
    isVegetarian: true,
    image: "/menu/appetizers/onion-rings.jpg",
  },
  {
    id: "app-11",
    name: "Pani Puri",
    price: 7.99,
    description:
      "Crispy fried puri filled with spiced potatoes, onion, peas, and tangy spicy refreshing water.",
    category: "Appetizers",
    isVegetarian: true,
    image: "/menu/appetizers/pani-puri.jpg",
  },
  {
    id: "app-12",
    name: "Chatpate",
    price: 8.99,
    description:
      "Spicy, tangy Nepali street mix with puffed rice, veggies, lemon, and bold spices.",
    category: "Appetizers",
    isVegetarian: true,
    image: "/menu/appetizers/chatpate.jpg",
  },

  /* =======================
     CHAAT & NOODLES
  ======================== */
  {
    id: "cn-1",
    name: "Samosa Chaat",
    price: 8.99,
    description:
      "Crispy samosa topped with peas, yogurt, chutneys, and spices.",
    category: "Chaat & Noodles",
    isVegetarian: true,
    image: "/menu/appetizers/samosa-chat.jpg",
  },
  {
    id: "cn-2",
    name: "Ashami Chow Mein",
    price: 11.99,
    description: "Street-style stir-fried noodles with vegetables or chicken.",
    category: "Chaat & Noodles",
    image: "/menu/chowmein/ashami-chow-mein.jpg",
  },

  /* =======================
     ASHAMI CHILI
  ======================== */
  {
    id: "chili-1",
    name: "Chicken Chili",
    price: 13.99,
    description:
      "Crispy fried chicken cooked with onions, bell peppers and chef special spices.",
    category: "Ashami Chili",
    isSpicy: true,
    image: "/menu/chili/chicken-chili.jpg",
  },
  {
    id: "chili-2",
    name: "Smokey Pork Belly Chili",
    price: 14.99,
    description:
      "Grilled pork belly cooked with onions, bell peppers and chef special spices.",
    category: "Ashami Chili",
    isSpicy: true,
    image: "/menu/chili/smokey-pork-belly-chili.jpg",
  },
  {
    id: "chili-3",
    name: "Shrimp Chili",
    price: 16.99,
    description:
      "Shrimp tossed with onions, bell peppers and chef special spices.",
    category: "Ashami Chili",
    isSpicy: true,
    image: "/menu/chili/shrimp-chili.jpg",
  },
  {
    id: "chili-4",
    name: "Potato Chili",
    price: 11.99,
    description:
      "Potatoes fried cooked with onions, bell peppers and chef special spices.",
    category: "Ashami Chili",
    isVegan: true,
    isSpicy: true,
    image: "/menu/chili/potato-chili.jpg",
  },
  {
    id: "chili-5",
    name: "Paneer Chili",
    price: 14.99,
    description:
      "Paneer cubes cooked with onions, bell peppers and chef special spices.",
    category: "Ashami Chili",
    isVegetarian: true,
    isSpicy: true,
    image: "/menu/chili/paneer-chili.jpg",
  },
  {
    id: "chili-6",
    name: "Chicken 65",
    price: 14.99,
    description:
      "Crispy fried chicken tossed with Ashami spices, onions, and peppers.",
    category: "Ashami Chili",
    isSpicy: true,
    image: "/menu/chili/chicken-65.jpg",
  },
  {
    id: "chili-7",
    name: "Gobi Manchurian",
    price: 13.99,
    description:
      "Crispy cauliflower cooked with onions, bell peppers and chef special spices.",
    category: "Ashami Chili",
    isVegan: true,
    isSpicy: true,
    image: "/menu/chili/gobi-manchurian.jpg",
  },

  /* =======================
     FRIED WINGS
  ======================== */
  {
    id: "wings-1",
    name: "BBQ Fried Wings",
    price: 11.99,
    description: "Crispy wings tossed in sweet and smoky BBQ sauce.",
    category: "Fried Wings",
    image: "/menu/wings/bbq-fried-wings.jpg",
  },
  {
    id: "wings-2",
    name: "Buffalo Fried Wings",
    price: 11.99,
    description: "Fried wings coated in spicy buffalo sauce.",
    category: "Fried Wings",
    isSpicy: true,
    image: "/menu/wings/buffalo-fried-wings.jpg",
  },
  {
    id: "wings-3",
    name: "Plain Fried Wings",
    price: 10.99,
    description: "Crispy fried wings served with side of sauce.",
    category: "Fried Wings",
    image: "/menu/wings/plain-fried-wings.jpg",
  },
  {
    id: "wings-4",
    name: "Chili Wings",
    price: 14.99,
    description:
      "Grilled wings tossed with chili sauce, onions, peppers, and Sichuan pepper.",
    category: "Fried Wings",
    isSpicy: true,
    image: "/menu/wings/chili-wings.jpg",
  },
  {
    id: "wings-5",
    name: "Chicken Lollipop",
    price: 14.99,
    description: "Frenched chicken wings cooked with chef special spices.",
    category: "Fried Wings",
    image: "/menu/wings/chicken-lollipop.jpg",
  },

  /* =======================
     MO:MO (DUMPLINGS)
  ======================== */
  {
    id: "momo-1",
    name: "Steam Momo",
    price: 9.99,
    description: "Steamed dumplings filled with chicken, pork, or vegetables.",
    category: "Momo",
    popular: true,
    image: "/menu/momo/steam-momo.jpg",
  },
  {
    id: "momo-2",
    name: "Deep Fried Momo",
    price: 10.99,
    description: "Crispy fried dumplings served with tomato sauce.",
    category: "Momo",
    image: "/menu/momo/deep-fried-momo.jpg",
  },
  {
    id: "momo-3",
    name: "Chili Momo",
    price: 13.99,
    description:
      "Fried momo tossed with onions, peppers, chili sauce, and Sichuan pepper.",
    category: "Momo",
    isSpicy: true,
    image: "/menu/momo/chilli-momo.jpg",
  },
  {
    id: "momo-4",
    name: "Kothey Momo",
    price: 12.99,
    description: "Steamed momo lightly pan-fried for a crispy bottom.",
    category: "Momo",
    image: "/menu/momo/kothey-momo.jpg",
  },
  {
    id: "momo-5",
    name: "Jhol Momo",
    price: 12.99,
    description: "Steamed momo served in tomato based cold soup.",
    category: "Momo",
    image: "/menu/momo/jhol-momo.jpg",
  },
  {
    id: "momo-6",
    name: "Sadheko Momo",
    price: 13.99,
    description: "Fried momo marinated with traditional Nepali spices.",
    category: "Momo",
    image: "/menu/momo/sadheko-momo.jpg",
  },
  {
    id: "momo-7",
    name: "Tato Jhol Momo",
    price: 12.99,
    description: "Steamed momo served with hot tomato based soup.",
    category: "Momo",
    image: "/menu/momo/tato-jhol-momo.jpg",
  },
];

export const SHOWCASE_VIDEOS = [
  {
    id: 1,
    url: "/story/ashami-story-1.mp4",
    poster: "/story/poster/ashami-story-1.png",
    title: "Handcrafted With Love",
    description: "Ashami Style Haku choila",
  },
  {
    id: 2,
    url: "/story/ashami-story-2.mp4",
    poster: "/story/poster/ashami-story-2.png",
    title: "The Perfect Texture",
    description: "Ashami Style Catering",
  },
  {
    id: 3,
    url: "/story/ashami-story-3.mp4",
    poster: "/story/poster/ashami-story-3.png",
    title: "Vibrant Flavors",
    description: "Ashami Style Momo",
  },
  {
    id: 4,
    url: "/story/ashami-story-4.mp4",
    poster: "/story/poster/ashami-story-4.png",
    title: "Served With Pride",
    description: "Ashami Authentic Xoilaa",
  },
];
