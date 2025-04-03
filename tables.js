const { v4: uuidv4 } = require('uuid');

const categories = [
  { id: uuidv4(), name: "Desserts" },
  { id: uuidv4(), name: "Pasta" },
  { id: uuidv4(), name: "Meats" },
  { id: uuidv4(), name: "Salads" }
];

const recipes = [
  { id: uuidv4(), title: "Chocolate Cake", ingredients: "Flour, sugar, eggs, chocolate", instructions: "Mix the ingredients and bake for 40 minutes.", category: categories[0].name, rating: 4.8, image_url: "" },
  { id: uuidv4(), title: "Strawberry Pie", ingredients: "Strawberries, sugar, cream, dough", instructions: "Prepare the dough and add strawberries with cream.", category: categories[0].name, rating: 4.5, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Milk Pudding", ingredients: "Condensed milk, eggs, sugar", instructions: "Caramelize the sugar and bake in a water bath.", category: categories[0].name, rating: 4.9, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Brigadeiro", ingredients: "Condensed milk, chocolate, butter", instructions: "Cook the ingredients until it detaches from the pan.", category: categories[0].name, rating: 4.7, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },

  { id: uuidv4(), title: "Lasagna Bolognese", ingredients: "Pasta, ground beef, tomato sauce, cheese", instructions: "Layer the ingredients and bake for 30 minutes.", category: categories[1].name, rating: 4.8, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Spaghetti Carbonara", ingredients: "Spaghetti, eggs, cheese, bacon", instructions: "Cook the pasta and mix with the ingredients.", category: categories[1].name, rating: 4.6, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Potato Gnocchi", ingredients: "Potatoes, flour, eggs, salt", instructions: "Mix the ingredients, form the gnocchi, and cook.", category: categories[1].name, rating: 4.5, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Pasta with Pesto", ingredients: "Pasta, basil, olive oil, garlic, cheese", instructions: "Blend the ingredients and mix with the pasta.", category: categories[1].name, rating: 4.7, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },

  { id: uuidv4(), title: "Grilled Picanha", ingredients: "Picanha, coarse salt", instructions: "Season with salt and grill to the desired point.", category: categories[2].name, rating: 4.9, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Roast Chicken", ingredients: "Chicken, garlic, lemon, spices", instructions: "Season the chicken and roast for 1 hour.", category: categories[2].name, rating: 4.6, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Beef Ribs in the Oven", ingredients: "Beef ribs, coarse salt, aluminum foil", instructions: "Wrap the ribs in foil and bake for 4 hours.", category: categories[2].name, rating: 4.8, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Grilled Steak with Onions", ingredients: "Beef, onions, seasonings", instructions: "Fry the steaks and add caramelized onions.", category: categories[2].name, rating: 4.5, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },

  { id: uuidv4(), title: "Caesar Salad", ingredients: "Lettuce, chicken, parmesan, croutons", instructions: "Mix the ingredients and serve with dressing.", category: categories[3].name, rating: 4.7, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Fruit Salad", ingredients: "Strawberries, banana, apple, grapes", instructions: "Chop the fruits and mix everything.", category: categories[3].name, rating: 4.6, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Tabbouleh", ingredients: "Bulgur wheat, tomatoes, cucumber, mint", instructions: "Mix the ingredients and season.", category: categories[3].name, rating: 4.5, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Greek Salad", ingredients: "Cucumber, tomato, feta cheese, olives", instructions: "Mix everything and drizzle with olive oil.", category: categories[3].name, rating: 4.8, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },

  { id: uuidv4(), title: "Mixed Grill", ingredients: "Beef, sausage, chicken", instructions: "Grill the meats on the barbecue.", category: categories[2].name, rating: 4.9, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Grilled Salmon", ingredients: "Salmon, olive oil, lemon", instructions: "Season the salmon and grill for 10 minutes.", category: categories[2].name, rating: 4.7, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Shrimp Risotto", ingredients: "Arborio rice, shrimp, fish stock", instructions: "Cook the rice and mix with the shrimp.", category: categories[1].name, rating: 4.8, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" },
  { id: uuidv4(), title: "Passion Fruit Mousse", ingredients: "Condensed milk, cream, passion fruit", instructions: "Blend the ingredients and refrigerate.", category: categories[0].name, rating: 4.6, image_url: "https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg" }
];

module.exports = { recipes, categories };
