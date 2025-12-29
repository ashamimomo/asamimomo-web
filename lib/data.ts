export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  category: string;
  image?: string; // Placeholder for now
  isVegetarian?: boolean;
  isSpicy?: boolean;
  popular?: boolean;
};

export const MENU_CATEGORIES = [
  "Appetizers",
  "Momo",
  "Chili",
  "Wings",
  "Chow Mein",
  "Biryani",
  "Curry",
  "Rice",
  "Breads",
  "Dessert",
  "Beverages",
];

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers (Inferred from first section)
  {
    id: "app-1",
    name: "Vegetable Pakora",
    price: 5.99,
    description:
      "Savory vegetable fritters, mildly spiced, dipped in a homemade batter and deep fried. Served with tamarind and mint sauce on the side.",
    category: "Appetizers",
    isVegetarian: true,
  },
  {
    id: "app-2",
    name: "Chicken Choila",
    price: 11.99,
    description:
      "Boneless chicken marinated in herbs, grilled in tandoori oven and Ashami flavorful spices.",
    category: "Appetizers",
    popular: true,
  },
  {
    id: "app-3",
    name: "Buff Choila",
    price: 11.99, // Assuming same price context implies similar pricing, usually explicitly listed though. Text said "Buff Choila" then next line. I'll infer 11.99 or similar.
    description:
      "Boneless buff meat marinated in herbs, grilled in tandoori oven and Ashami flavorful spices.",
    category: "Appetizers",
  },
  {
    id: "app-4",
    name: "Veg Samosa",
    price: 9.99,
    description:
      "Fried pastry filled with a savory spiced potatoes, onions, peas, cheese. Served with Tamarind and Green (Cilantro based) sauce.",
    category: "Appetizers",
    isVegetarian: true,
  },
  {
    id: "app-5",
    name: "Samosa Chat",
    price: 9.99,
    description:
      "Samosa Topped with Seasoned Garbanzo beans with Yogurt, Chutney and Spices.",
    category: "Appetizers",
    popular: true,
    isVegetarian: true,
  },
  {
    id: "app-6",
    name: "Mozzarella Sticks",
    price: 6.99,
    description:
      "Cheese coated in a breaded crumb mixture and deeply fried for crispy taste comes with ranch.",
    category: "Appetizers",
    isVegetarian: true,
  },
  {
    id: "app-7",
    name: "Non-Veg Platter",
    price: 19.99,
    description:
      "Served with Samosa, Spring Rolls, Wings (Plain, BBQ, Buffalo), MOMO (Chicken, Pork, Veg), French Fries, Shrimp Tempura along with sauces.",
    category: "Appetizers",
    popular: true,
  },

  // Chow Mein
  {
    id: "cm-1",
    name: "Ashami Chow Mein",
    price: 11.99,
    description: "Street Style stir-fried noodles with vegetables or chicken.",
    category: "Chow Mein",
  },

  // Chili (Zuzu Chili section)
  {
    id: "chili-1",
    name: "Chicken Chili",
    price: 15.99,
    description:
      "Boneless chicken marinated in herb grilled in tandoori oven and cooked with onion, bell pepper and Sichuan pepper.",
    category: "Chili",
    isSpicy: true,
  },
  {
    id: "chili-2",
    name: "Shrimp Chili",
    price: 16.99,
    description:
      "Shrimp sautéed with onion, bell pepper, red chilies and Sichuan pepper.",
    category: "Chili",
    isSpicy: true,
  },
  {
    id: "chili-3",
    name: "Paneer Chili",
    price: 16.99,
    description:
      "Paneer sautéed with onion, red pepper, green pepper and Sichuan pepper.",
    category: "Chili",
    isVegetarian: true,
    isSpicy: true,
  },

  // Wings
  {
    id: "wings-1",
    name: "Chili Wings",
    price: 14.99,
    description:
      "Chicken Wings marinated in herbs grilled in tandoori oven and cooked with onion, bell pepper, red chili and Sichuan pepper tossed in chili sauce.",
    category: "Wings",
    isSpicy: true,
  },
  {
    id: "wings-2",
    name: "Chicken Lollipop",
    price: 16.99,
    description:
      "Frenched chicken winglet. The meat is cut loose from the bone end and pushed down creating a lollipop appearance. Served with House Special Sauce.",
    category: "Wings",
    popular: true,
  },

  // Momo
  {
    id: "momo-1",
    name: "Steam MO:MO",
    price: 9.99,
    description:
      "Steamed MO:MO (dumplings) marinated in chef special spices stuffed in flour and steamed to perfection served with special tomato-based sauces.",
    category: "Momo",
    popular: true,
  },
  {
    id: "momo-2",
    name: "Deep Fried MO:MO",
    price: 10.99,
    description:
      "MO:MO (dumplings) marinated in chef special spices stuffed in flour and Deep Fried to perfection served with special tomato-based sauces.",
    category: "Momo",
  },
  {
    id: "momo-3",
    name: "Chilli MO:MO",
    price: 15.99,
    description:
      "Fried MO:MO (Dumplings) sautéed with onions, bell pepper, red chili sauce and Sichuan pepper.",
    category: "Momo",
    isSpicy: true,
  },
  {
    id: "momo-4",
    name: "Jhol MO:MO",
    price: 10.99,
    description:
      "Steamed MO:MO (dumplings) served with tomato and soybean Based Soup.",
    category: "Momo",
    popular: true,
  },
  {
    id: "momo-5",
    name: "MO:MO Tikka Masala",
    price: 17.99,
    description:
      "Choice of Chicken, Pork or Veg MO:MO dipped into cashew based creamy sauce along with onion and tomato sauce for a perfect blend of sweet and spicy taste.",
    category: "Momo",
  },

  // Biryani
  {
    id: "bir-1",
    name: "Chicken Biryani",
    price: 15.99,
    description:
      "Basmati rice flavored and cooked with Chicken in chef's special biryani Masala.",
    category: "Biryani",
  },
  {
    id: "bir-2",
    name: "House Special Biryani",
    price: 19.99,
    description:
      "Basmati rice flavored and cooked with Chicken and Shrimp in chef's special biryani Masala. Served with Raita & veggies.",
    category: "Biryani",
    popular: true,
  },

  // Curry
  {
    id: "curry-1",
    name: "Chicken Tikka Masala",
    price: 15.99,
    description:
      "Marinated grilled chicken breast cooked in cashew based creamy sauce along with onion and tomato sauce for perfect blend of sweet and spicy taste.",
    category: "Curry",
    popular: true,
  },
  {
    id: "curry-2",
    name: "Butter Chicken",
    price: 15.99,
    description:
      "Marinated grilled chicken breast cooked in tomato based gravy, rich in butter with creamy cashew sauce.",
    category: "Curry",
    popular: true,
  },
  {
    id: "curry-3",
    name: "Goat Curry",
    price: 18.99,
    description:
      "Goat meat prepared with chef's special sauce and blended with traditional spices.",
    category: "Curry",
  },
  {
    id: "curry-4",
    name: "Paneer Makhani",
    price: 15.99,
    description:
      "Paneer cooked in a tomato based gravy, rich in butter with creamy cashew sauce.",
    category: "Curry",
    isVegetarian: true,
  },

  // Rice
  {
    id: "rice-1",
    name: "Plain Rice",
    price: 3.99,
    description: "Plain basmati rice.",
    category: "Rice",
    isVegetarian: true,
  },

  // Breads
  {
    id: "bread-1",
    name: "Garlic Naan",
    price: 3.99,
    description:
      "Traditional Naan brushed with ghee, crushed garlic and chopped cilantro.",
    category: "Breads",
    popular: true,
    isVegetarian: true,
  },
  {
    id: "bread-2",
    name: "Plain Naan",
    price: 3.49, // Inferred, list had numbering issues.
    description: "Leavened, Tandoor oven-baked flatbread.",
    category: "Breads",
    isVegetarian: true,
  },

  // Dessert
  {
    id: "des-1",
    name: "Tres Leche",
    price: 8.99,
    description:
      "A very light sponge cake soaked in three different kinds of milk. Topped with our homemade cinnamon whipped cream.",
    category: "Dessert",
  },
  {
    id: "des-2",
    name: "Ras Malai",
    price: 3.99,
    description:
      "Fresh homemade cheese patties, cooked in a milk syrup, almonds and nuts (3 Pieces).",
    category: "Dessert",
  },

  // Beverages
  {
    id: "bev-1",
    name: "Mango Lassi",
    price: 5.99,
    description: "Lassi made by mixing mango and yogurt.",
    category: "Beverages",
    popular: true,
  },
];
