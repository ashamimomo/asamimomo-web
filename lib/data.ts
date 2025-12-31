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
  isGlutenFree?: boolean; // Inferred where possible or default false
  popular?: boolean;
};

export const MENU_CATEGORIES = [
  "Appetizers",
  "Chow Mein",
  "Chili",
  "Wings",
  "Momo",
  "Biryani",
  "Curry",
  "Rice",
  "Breads",
  "Dessert",
  "Beverages",
  "Beer",
];

export const MENU_ITEMS: MenuItem[] = [
  // Appetizers
  {
    id: "app-1",
    name: "Vegetable Pakora",
    price: 5.99,
    description:
      "Savory vegetable fritters, mildly spiced, dipped in a homemade batter and deep fried. Served with tamarind and mint sauce on the side.",
    category: "Appetizers",
    image: "/menu/appetizers/vegetable-pakora.jpg",
    isVegetarian: true,
    isGlutenFree: true, // Besan batter usually GF
  },
  {
    id: "app-2",
    name: "Chicken Choila",
    price: 11.99,
    description:
      "Boneless chicken marinated in herbs, grilled in tandoori oven and Ashami flavorful spices.",
    category: "Appetizers",
    image: "/menu/appetizers/chicken-choila.jpg",
    popular: true,
  },
  {
    id: "app-3",
    name: "Buff Choila",
    price: 11.99, // Inferred from context
    description:
      "Boneless buff meat marinated in herbs, grilled in tandoori oven and Ashami flavorful spices.",
    category: "Appetizers",
    image: "/menu/appetizers/buff-choila.jpg",
  },
  {
    id: "app-4",
    name: "Pork Choila",
    price: 11.99, // Inferred
    description:
      "Boneless pork meat marinated in herbs, grilled in tandoori oven and Ashami flavorful spices.",
    category: "Appetizers",
    image: "/menu/appetizers/pork-choila.jpg",
  },
  {
    id: "app-5",
    name: "Veg Samosa",
    price: 9.99,
    description:
      "Fried pastry filled with savory spiced potatoes, onions, peas, cheese. Served with Tamarind and Green (Cilantro based) sauce on the side.",
    category: "Appetizers",
    image: "/menu/appetizers/veg-samosa.jpg",
    isVegetarian: true,
    popular: true,
  },
  {
    id: "app-6",
    name: "Shrimp Tampora",
    price: 9.99,
    description:
      "Shrimp, mildly spiced, dipped in a homemade batter and deep fried.",
    category: "Appetizers",
    image: "/menu/appetizers/shrimp-tampora.jpg",
  },
  {
    id: "app-7",
    name: "Samosa Chat",
    price: 9.99,
    description:
      "Samosa Topped with Seasoned Garbanzo beans with Yogurt, Chutney and Spices.",
    category: "Appetizers",
    image: "/menu/appetizers/samosa-chat.jpg",
    isVegetarian: true,
  },
  {
    id: "app-8",
    name: "Mozzarella Sticks",
    price: 6.99,
    description:
      "Cheese coated in a breaded crumb mixture and deeply fried for crispy taste comes with ranch.",
    category: "Appetizers",
    image: "/menu/appetizers/mozzarella-sticks.jpg",
    isVegetarian: true,
  },
  {
    id: "app-9",
    name: "French Fries",
    price: 4.99,
    description: "Deep fried crispy potatoes.",
    category: "Appetizers",
    image: "/menu/appetizers/french-fries.jpg",
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "app-10",
    name: "Spring Roll",
    price: 6.99,
    description:
      "Vegetable fritters, mildly spiced wrapped in thin flour wrappers deeply fried served with Ashami tamarind and cilantro sauce.",
    category: "Appetizers",
    image: "/menu/appetizers/spring-roll.jpg",
    isVegetarian: true,
  },
  {
    id: "app-11",
    name: "Onion Rings",
    price: 6.99,
    description:
      "Deep fried breaded onion rings. Served with chipotle mayo on the side.",
    category: "Appetizers",
    image: "/menu/appetizers/onion-rings.jpg",
    isVegetarian: true,
  },
  {
    id: "app-12",
    name: "Non-Veg Platter",
    price: 19.99,
    description:
      "Served with Samosa, Spring Rolls, Wings (Plain, BBQ, Buffalo), MOMO (Chicken, Pork, Veg), French Fries, Shrimp Tempura along with Ketchup, MOMO Sauce, Green Chatney and Tamarind Sauce.",
    category: "Appetizers",
    image: "/menu/appetizers/non-veg-platter.jpg",
  },
  {
    id: "app-13",
    name: "Veg Platter",
    price: 16.99,
    description:
      "Served with pakora, samosa, spring rolls, french fries, onion rings and veg MOMO along with various dipping sauce.",
    category: "Appetizers",
    image: "/menu/appetizers/veg-platter.jpg",
    isVegetarian: true,
  },

  // Chow Mein
  {
    id: "cm-1",
    name: "Ashami Chow Mein",
    price: 11.99,
    description: "Street Style stir-fried noodles with vegetables or chicken.",
    category: "Chow Mein",
    image: "/menu/chowmein/ashami-chow-mein.jpg",
  },

  // Chili
  {
    id: "chili-1",
    name: "Chicken Chili",
    price: 15.99,
    description:
      "Boneless chicken marinated in herb grilled in tandoori oven and cooked with onion, bell pepper and Sichuan pepper.",
    category: "Chili",
    image: "/menu/chili/chicken-chili.jpg",
    isSpicy: true,
  },
  {
    id: "chili-2",
    name: "Smokey Pork Belly Chili",
    price: 15.99, // Inferred similar pricing
    description:
      "Boneless Pork belly marinated in herb grilled in tandoori oven and cooked with onion, bell pepper and Sichuan pepper.",
    category: "Chili",
    image: "/menu/chili/smokey-pork-belly-chili.jpg",
    isSpicy: true,
  },
  {
    id: "chili-3",
    name: "Shrimp Chili",
    price: 16.99,
    description:
      "Shrimp sautéed with onion, bell pepper, red chilies and Sichuan pepper.",
    category: "Chili",
    image: "/menu/chili/shrimp-chili.jpg",
    isSpicy: true,
  },
  {
    id: "chili-4",
    name: "Potato Chili",
    price: 11.99,
    description: "Sautéed with onion, potato, red chili and Sichuan pepper.",
    category: "Chili",
    image: "/menu/chili/potato-chili.jpg",
    isVegetarian: true,
    isVegan: true,
    isSpicy: true,
  },
  {
    id: "chili-5",
    name: "Paneer Chili",
    price: 16.99,
    description:
      "Paneer sautéed with onion, red pepper, green pepper and Sichuan pepper.",
    category: "Chili",
    image: "/menu/chili/paneer-chili.jpg",
    isVegetarian: true,
    isSpicy: true,
  },
  {
    id: "chili-6",
    name: "Chicken 65",
    price: 15.99,
    description:
      "Boneless chicken marinated in herb grilled in tandoori oven and cooked with onion, bell pepper and Sichuan pepper for a flavorful tangy taste.",
    category: "Chili",
    image: "/menu/chili/chicken-65.jpg",
    isSpicy: true,
  },
  {
    id: "chili-7",
    name: "Gobi Manchurian",
    price: 13.99,
    description:
      "Marinated deep fried cauliflower marinated in herbs and spices cooked with onion, bell pepper and Sichuan pepper.",
    category: "Chili",
    image: "/menu/chili/gobi-manchurian.jpg",
    isVegetarian: true,
    isVegan: true,
    isSpicy: true,
  },

  // Fried Wings
  {
    id: "wings-1",
    name: "BBQ Fried Wings",
    price: 11.99,
    description:
      "Fried chicken wings tossed in bbq sauce and comes with ranch or blue cheese on the side.",
    category: "Wings",
    image: "/menu/wings/bbq-fried-wings.jpg",
  },
  {
    id: "wings-2",
    name: "Buffalo Fried Wings",
    price: 11.99,
    description:
      "Fried chicken wings tossed in buffalo sauce and comes with ranch or blue cheese on the side.",
    category: "Wings",
    image: "/menu/wings/buffalo-fried-wings.jpg",
    isSpicy: true,
  },
  {
    id: "wings-3",
    name: "Plain Fried Wings",
    price: 11.99,
    description: "Fried chicken wings with chef’s special spices/masala.",
    category: "Wings",
    image: "/menu/wings/plain-fried-wings.jpg",
  },
  {
    id: "wings-4",
    name: "Chili Wings",
    price: 14.99,
    description:
      "Chicken Wings marinated in herbs grilled in tandoori oven and cooked with onion, bell pepper, red chili and Sichuan pepper tossed in chili sauce.",
    category: "Wings",
    image: "/menu/wings/chili-wings.jpg",
    isSpicy: true,
  },
  // Item 5 in text was empty/broken.
  {
    id: "wings-6",
    name: "Chicken Lollipop",
    price: 16.99,
    description:
      "Frenched chicken winglet. The meat is cut loose from the bone end and pushed down creating a lollipop appearance. Served with House Special Sauce.",
    category: "Wings",
    image: "/menu/wings/chicken-lollipop.jpg",
    popular: true,
  },

  // MO:MO
  {
    id: "momo-1",
    name: "Steam MO:MO",
    price: 9.99,
    description:
      "Steamed MO:MO (dumplings) marinated in chef special spices stuffed in flour and steamed to perfection served with special tomato-based sauces.",
    category: "Momo",
    image: "/menu/momo/steam-momo.jpg",
    popular: true,
  },
  {
    id: "momo-2",
    name: "Deep Fried MO:MO",
    price: 10.99,
    description:
      "MO:MO (dumplings) marinated in chef special spices stuffed in flour and Deep Fried to perfection served with special tomato-based sauces.",
    category: "Momo",
    image: "/menu/momo/deep-fried-momo.jpg",
  },
  {
    id: "momo-3",
    name: "Chilli MO:MO",
    price: 15.99,
    description:
      "Fried MO:MO (Dumplings) sautéed with onions, bell pepper, red chili sauce and Sichuan pepper.",
    category: "Momo",
    image: "/menu/momo/chilli-momo.jpg",
    isSpicy: true,
  },
  {
    id: "momo-4",
    name: "Kothey MO:MO",
    price: 13.99,
    description:
      "Steamed MO:MO (Dumplings) marinated in chef special spices stuffed in flour and pan fried for the light crispy taste.",
    category: "Momo",
    image: "/menu/momo/kothey-momo.jpg",
    popular: true,
  },
  {
    id: "momo-5",
    name: "Jhol MO:MO",
    price: 10.99,
    description:
      "Steamed MO:MO (dumplings) served with tomato and soybean Based Soup.",
    category: "Momo",
    image: "/menu/momo/jhol-momo.jpg",
  },
  {
    id: "momo-6",
    name: "MO:MO Tikka Masala",
    price: 17.99,
    description:
      "Choice of Chicken, Pork or Veg MO:MO dipped into cashew based creamy sauce along with onion and tomato sauce for a perfect blend of sweet and spicy taste. Comes with 6 MO:MOs.",
    category: "Momo",
    image: "/menu/momo/momo-tikka-masala.jpg",
  },
  {
    id: "momo-7",
    name: "Galli Style C-MO:MO",
    price: 13.99, // Inferred
    description:
      "Steamed MO:MO (Dumplings) sautéed with onions, bell pepper, red chili sauce and Sichuan pepper prepare LESS spicy and little TANGY.",
    category: "Momo",
    image: "/menu/momo/galli-style-c-momo.jpg",
  },
  {
    id: "momo-8",
    name: "Tato Jhol Momo",
    price: 10.99, // Inferred
    description: "Hot soup momo.",
    category: "Momo",
    image: "/menu/momo/tato-jhol-momo.jpg",
  },

  // Biryani
  {
    id: "bir-1",
    name: "Chicken Biryani",
    price: 15.99,
    description:
      "Basmati rice flavored and cooked with Chicken in chef's special biryani Masala.",
    category: "Biryani",
    image: "/menu/biryani/chicken-biryani.jpg",
  },
  {
    id: "bir-2",
    name: "Vegetable Biryani",
    price: 14.99,
    description:
      "Basmati rice flavored and cooked with mix vegetable in chef's special biryani Masalas.",
    category: "Biryani",
    image: "/menu/biryani/vegetable-biryani.jpg",
    isVegetarian: true,
  },
  {
    id: "bir-3",
    name: "Shrimp Biryani",
    price: 17.99,
    description:
      "Basmati rice flavored and cooked with shrimp in chef's special biryani Masala. Served with Raita.",
    category: "Biryani",
    image: "/menu/biryani/shirmp-biryani.jpg",
  },
  {
    id: "bir-4",
    name: "Paneer Biryani",
    price: 16.99,
    description:
      "Basmati rice flavor and cooked with paneer in chef's special biryani Masala. Served with Raita.",
    category: "Biryani",
    image: "/menu/biryani/paneer-biryani.jpg",
    isVegetarian: true,
  },
  {
    id: "bir-5",
    name: "Goat Biryani",
    price: 18.99,
    description:
      "Basmati rice flavored and cooked with goat in chef's special biryani Masala. Goat meat comes with bone. Served with Raita.",
    category: "Biryani",
    image: "/menu/biryani/goat-biryani.jpg",
  },
  {
    id: "bir-6",
    name: "House Special Biryani",
    price: 19.99,
    description:
      "Basmati rice flavored and cooked with Chicken and Shrimp in chef's special biryani Masala. Served with Raita.",
    category: "Biryani",
    image: "/menu/biryani/house-special-biryani.jpg",
    popular: true,
  },

  // Curry Dishes
  {
    id: "curry-1",
    name: "Chicken Curry",
    price: 15.99,
    description:
      "Tender piece of boneless chicken breast and thigh cooked with a traditional spices.",
    category: "Curry",
    image: "/menu/curry/chicken-curry.jpg",
  },
  {
    id: "curry-2",
    name: "Shrimp Curry",
    price: 17.99,
    description:
      "Shrimp cooked with traditional herbs tossed in chef's special Sauce.",
    category: "Curry",
    image: "/menu/curry/shrimp-curry.jpg",
  },
  {
    id: "curry-3",
    name: "Goat Curry",
    price: 18.99,
    description:
      "Goat meat prepared with chef's special sauce and blended with traditional spices.",
    category: "Curry",
    image: "/menu/curry/goat-curry.jpg",
  },
  {
    id: "curry-4",
    name: "Chicken Tikka Masala",
    price: 15.99,
    description:
      "Marinated grilled chicken breast cooked in cashew based creamy sauce along with onion and tomato sauce for perfect blend of sweet and spicyy taste.",
    category: "Curry",
    image: "/menu/curry/chicken-tikka-masala.jpg",
    popular: true,
  },
  {
    id: "curry-5",
    name: "Paneer Makhani",
    price: 15.99,
    description:
      "Paneer cooked in a tomato based gravy, rich in butter with creamy cashew sauce.",
    category: "Curry",
    image: "/menu/curry/paneer-makhani.jpg",
    isVegetarian: true,
  },
  {
    id: "curry-6",
    name: "Butter Chicken",
    price: 15.99,
    description:
      "Marinated grilled chicken breast cooked in tomato based gravy, rich in butter with creamy cashew sauce.",
    category: "Curry",
    image: "/menu/curry/butter-chicken.jpg",
    popular: true,
  },
  {
    id: "curry-7",
    name: "Chicken Chili Masala",
    price: 15.99,
    description:
      "Chicken cooked with green chili, bell pepper, onion and ZUZU's special masala.",
    category: "Curry",
    image: "/menu/curry/chicken-chili-masala.jpg",
    isSpicy: true,
  },
  {
    id: "curry-8",
    name: "Aloo Cauli",
    price: 13.99,
    description:
      "Cauliflower and potato sauteed in spice with tomato, onion and ginger.",
    category: "Curry",
    image: "/menu/curry/aloo-cauli.jpg",
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "curry-9",
    name: "Malai Kofta",
    price: 15.99,
    description:
      "Vegetarian dish with balls (kofta) made of potato and paneer deep fried and served with a creamy and spiced tomato based curry.",
    category: "Curry",
    image: "/menu/curry/malai-kofta.jpg",
    isVegetarian: true,
  },

  // Rice
  {
    id: "rice-1",
    name: "Plain Rice",
    price: 3.99,
    description: "Plain basmati rice.",
    category: "Rice",
    image: "/menu/rice/plain-rice.jpg",
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "rice-2",
    name: "Fried Rice",
    price: 5.49,
    description: "Basmati rice cooked with vegetable tossed in soy sauce.",
    category: "Rice",
    image: "/menu/rice/fried-rice.jpg",
    isVegetarian: true,
  },
  {
    id: "rice-3",
    name: "Peas Pulau",
    price: 4.99,
    description: "Basmati rice cooked with green peas.",
    category: "Rice",
    image: "/menu/rice/peas-pulau.jpg",
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "rice-4",
    name: "Lemon Rice",
    price: 5.49,
    description: "Basmati rice cooked with fresh lemon.",
    category: "Rice",
    image: "/menu/rice/lemon-rice.jpg",
    isVegetarian: true,
    isVegan: true,
  },
  {
    id: "rice-5",
    name: "Jira Rice",
    price: 4.49,
    description: "Basmati rice cooked with cumin.",
    category: "Rice",
    image: "/menu/rice/jira-rice.jpg",
    isVegetarian: true,
    isVegan: true,
  },

  // Naan & Bread
  {
    id: "bread-1",
    name: "Plain Naan", // Adjusted based on content description match
    price: 3.99, // Swapped to match list order logic (Likely Plain is cheaper/first or standard)
    description: "Leavened, Tandoor oven-baked flatbread.",
    category: "Breads",
    image: "/menu/breads/plain-naan.jpg",
    isVegetarian: true,
  },
  {
    id: "bread-2",
    name: "Garlic Naan",
    price: 3.99,
    description:
      "Traditional Naan brushed with ghee, crushed garlic and chopped cilantro.",
    category: "Breads",
    image: "/menu/breads/garlic-naan.jpg",
    popular: true,
    isVegetarian: true,
  },
  {
    id: "bread-3",
    name: "Paneer Naan", // Inferred from "Naan stuffed with paneer"
    price: 4.49,
    description: "Naan stuffed with paneer (fresh cheese).",
    category: "Breads",
    image: "/menu/breads/paneer-naan.jpg",
    isVegetarian: true,
  },

  // Dessert
  {
    id: "des-1",
    name: "Tres Leches",
    price: 8.99,
    description:
      "A very light sponge cake soaked in three different kinds of milk. Topped with our homemade cinnamon whipped cream.",
    category: "Dessert",
    image: "/menu/dessert/tres-leches.jpg",
    isVegetarian: true,
  },
  {
    id: "des-2",
    name: "Brownie",
    price: 7.99,
    description:
      "Fudgy Homemade Chocolate Brownie topped with Chocolate sauce and a side of vanilla ice cream.",
    category: "Dessert",
    image: "/menu/dessert/brownie.jpg",
    isVegetarian: true,
  },
  {
    id: "des-3",
    name: "Ras Malai (3 Pieces)",
    price: 3.99,
    description:
      "Fresh homemade cheese patties, cooked in a milk syrup, almonds and nuts.",
    category: "Dessert",
    image: "/menu/dessert/ras-malai.jpg",
    isVegetarian: true,
  },
  {
    id: "des-4",
    name: "Gulab Jamun (2 Pieces)",
    price: 3.99,
    description: "Indian fried dough soaked in rose-flavored syrup yogurt.",
    category: "Dessert",
    image: "/menu/dessert/gulab-jamun.jpg",
    isVegetarian: true,
  },

  // Beverages
  {
    id: "bev-1",
    name: "Coke 2 Liter",
    price: 3.99,
    category: "Beverages",
    image: "/menu/beverages/coke-2-liter.jpg",
  },
  {
    id: "bev-2",
    name: "Sprite 2 Liter",
    price: 3.99,
    category: "Beverages",
    image: "/menu/beverages/sprite-2-liter.jpg",
  },
  {
    id: "bev-3",
    name: "Diet Coke 2 Liter",
    price: 3.99,
    category: "Beverages",
    image: "/menu/beverages/diet-coke-2-liter.jpg",
  },
  {
    id: "bev-4",
    name: "Ginger Ale 2 Liter",
    price: 3.99,
    category: "Beverages",
    image: "/menu/beverages/ginger-ale-2-liter.jpg",
  },
  {
    id: "bev-5",
    name: "Coke Can",
    price: 1.49,
    category: "Beverages",
    image: "/menu/beverages/coke-can.jpg",
  },
  {
    id: "bev-6",
    name: "Sprite Can",
    price: 1.49,
    category: "Beverages",
    image: "/menu/beverages/sprite-can.jpg",
  },
  {
    id: "bev-7",
    name: "Diet Coke Can",
    price: 1.49,
    category: "Beverages",
    image: "/menu/beverages/diet-coke-can.jpg",
  },
  {
    id: "bev-8",
    name: "Ginger Ale Can",
    price: 1.49,
    category: "Beverages",
    image: "/menu/beverages/ginger-ale-can.jpg",
  },
  {
    id: "bev-9",
    name: "Polar Spring Water",
    price: 1.25,
    category: "Beverages",
    image: "/menu/beverages/polar-spring-water.jpg",
  },
  {
    id: "bev-10",
    name: "Gatorade",
    price: 1.99,
    category: "Beverages",
    image: "/menu/beverages/gatorade.jpg",
  },
  {
    id: "bev-11",
    name: "Plain Lassi",
    price: 4.99,
    description:
      "Sweet yogurt drink traditionally made by thinning out yogurt with milk.",
    category: "Beverages",
    image: "/menu/beverages/plain-lassi.jpg",
    isVegetarian: true,
  },
  {
    id: "bev-12",
    name: "Mango Lassi",
    price: 5.99,
    description: "Lassi made by mixing mango and yogurt.",
    category: "Beverages",
    image: "/menu/beverages/mango-lassi.jpg",
    isVegetarian: true,
    popular: true,
  },
  // Fountain drinks omitted for simplicity unless requested explicitly as selectable items (usually in-store only)
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
