import ChocolateCake from "../assets/images/ChocolateCake.png"
import Sushi from "../assets/images/Sushi.jpg"
import Hamburger from "../assets/images/Hamburger.jpg"
import Gazpacho from "../assets/images/Gazpacho.png"
import BeefStirFry from "../assets/images/BeefStirFry.png"
import Bruschetta from "../assets/images/Bruschetta.png"
import CapreseSalad from "../assets/images/CapreseSalad.png"
import ChickenCurry from "../assets/images/ChickenCurry.jpg"
import Ratatouille from "../assets/images/Ratatouille.jpg"
import MisoSoup from "../assets/images/MisoSoup.png"
import padthai from "../assets/images/padthai.png"
import Pasta from "../assets/images/Pasta.jpg"
import Tacos from '../assets/images/Tacos.jpg'



 export const foods = [
      {
        name: "Sushi",
        image: Sushi,
        recipe:
          "Prepare sushi rice. Lay out nori, add rice, and fill with desired ingredients (fish, vegetables). Roll tightly and slice.",
        preparation_time: "30 minutes",
        ingredients: [
          "Sushi Rice",
          "Nori (Seaweed)",
          "Fish (e.g., salmon, tuna)",
          "Vegetables (e.g., cucumber, avocado)",
        ],
        description:
          "A Japanese dish consisting of vinegared rice, often combined with fish or vegetables, and rolled in seaweed.",
          recipe: [
            {
              step: "Prepare ingredients & tools",
              action: "Gather sushi rice, nori (seaweed), fish, and vegetables. Get a bamboo rolling mat, a sharp knife, and a bowl for mixing rice vinegar, sugar, and salt."
            },
            {
              step: "Cook Rice & Season",
              action: "Rinse sushi rice, cook it, then mix with a blend of rice vinegar, sugar, and salt."
            },
            {
              step:"Prep Ingredients",
              action: "Slice the fish and veggies thinly."
            },
            {
              step: "Roll Sushi",
              action:"Lay nori on the bamboo mat, spread rice, add fillings, roll tightly, and slice."
            },
            {
              step: "Serve",
              action: " Arrange the sushi on a plate and enjoy!"
            }
          ]
      },
      {
        name: "Hamburger",
        image: Hamburger,
        recipe:
          "Form ground beef into patties. Grill or fry until cooked. Assemble on buns with lettuce, tomato, onion, and condiments.",
        preparation_time: "20 minutes",
        ingredients: [
          "Ground Beef",
          "Buns",
          "Lettuce",
          "Tomato",
          "Onion",
          "Condiments (e.g., ketchup, mustard)",
        ],
        description:
          "A classic American sandwich consisting of a beef patty in a bun, often with various toppings.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather ground beef, buns, lettuce, tomato, onion, and condiments."
            },
            {
              step: "Cook Patty",
              action: "Form beef into patties, grill or fry until cooked."
            },
            {
              step: "Assemble Burger",
              action: "Place cooked patty on bun, add lettuce, tomato, onion, and condiments."
            },
            {
              step: "Serve",
              action: "Plate the hamburger and enjoy this classic American sandwich."
            }
          ],
      },
      {
        name: "Chicken Curry",
        image: ChickenCurry,
        recipe:
          "Sauté onions, garlic, and spices. Add chicken, tomatoes, and broth. Simmer until chicken is cooked. Serve with rice.",
        preparation_time: "45 minutes",
        ingredients: [
          "Chicken",
          "Onions",
          "Garlic",
          "Spices (e.g., curry powder, turmeric)",
          "Tomatoes",
          "Broth",
          "Rice",
        ],
        description:
          "A flavorful dish made with chicken cooked in a spiced sauce, often served with rice or naan.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: " Gather chicken, onions, garlic, spices, tomatoes, broth, and rice."
            },
            {
              step: "Sauté & Simmer",
              action: " Sauté onions, garlic, and spices. Add chicken, tomatoes, and broth. Simmer until chicken is cooked."
            },
            {
              step: "Serve",
              action: "Plate the chicken curry alongside rice."
            },
          ]
      },
      {
        name: "Caprese Salad",
        image: CapreseSalad,
        recipe:
          "Slice tomatoes and fresh mozzarella. Arrange with basil leaves. Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
        preparation_time: "10 minutes",
        ingredients: [
          "Tomatoes",
          "Fresh Mozzarella",
          "Basil Leaves",
          "Olive Oil",
          "Balsamic Glaze",
          "Salt",
          "Pepper",
        ],
        description:
          "An Italian salad made with tomatoes, mozzarella, basil, and olive oil, often seasoned with salt and pepper.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: " Gather tomatoes, fresh mozzarella, basil leaves, olive oil, balsamic glaze, salt, and pepper."
            },
            {
              step: "Slice & Arrange",
              action: " Slice tomatoes and mozzarella. Arrange with basil leaves. Drizzle with olive oil, balsamic glaze, and season with salt and pepper."
            },
            {
              step: "Serve",
              action: " Plate the Caprese salad and enjoy this Italian delight."
            }
          ]
      },
      {
        name: "Pasta Primavera",
        image: Pasta,
        recipe:
          "Boil pasta. Sauté vegetables in olive oil. Toss cooked pasta with vegetables, herbs, and Parmesan cheese.",
        preparation_time: "25 minutes",
        ingredients: [
          "Pasta",
          "Assorted Vegetables (e.g., bell peppers, broccoli, carrots)",
          "Olive Oil",
          "Herbs (e.g., basil, parsley)",
          "Parmesan Cheese",
        ],
        description:
          "An Italian dish featuring pasta with sautéed mixed vegetables, herbs, and cheese.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather pasta, assorted vegetables, olive oil, herbs, and Parmesan cheese."
            },
            {
              step: "Boil & Sauté",
              action: " Boil pasta, sauté vegetables in olive oil."
            },
            {
              step: "Mix & Serve",
              action: " Toss cooked pasta with vegetables, herbs, and Parmesan cheese."
            }
          ]
      },
      {
        name: "Tacos",
        image: Tacos,
        recipe:
          "Cook seasoned meat (beef, chicken, or pork). Fill taco shells with meat, lettuce, tomatoes, cheese, and salsa.",
        preparation_time: "35 minutes",
        ingredients: [
          "Meat (Beef, Chicken, or Pork)",
          "Taco Shells",
          "Lettuce",
          "Tomatoes",
          "Cheese",
          "Salsa",
        ],
        description:
          "A Mexican dish consisting of folded tortillas filled with various ingredients, often including meat, cheese, and vegetables.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather meat (beef, chicken, or pork), taco shells, lettuce, tomatoes, cheese, salsa."
            },
            {
              step: "Cook Meat",
              action: "Season and cook the meat (beef, chicken, or pork) in a pan until done."
            },
            {
              step: "Assemble Tacos",
              action: "Fill taco shells with cooked meat, lettuce, tomatoes, cheese, and salsa."
            },
            {
              step: "Serve",
              action: "Arrange tacos on a plate and enjoy!"
            }
          ],
      },
      {
        name: "Ratatouille",
        image: Ratatouille,
        recipe:
          "Sauté onions, garlic, and bell peppers. Add zucchini, eggplant, tomatoes, and herbs. Simmer until vegetables are tender.",
        preparation_time: "50 minutes",
        ingredients: [
          "Onions",
          "Garlic",
          "Bell Peppers",
          "Zucchini",
          "Eggplant",
          "Tomatoes",
          "Herbs (e.g., thyme, rosemary)",
        ],
        description:
          "A French Provencal stewed vegetable dish originating from Nice, featuring tomatoes, zucchini, eggplant, and bell peppers.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather onions, garlic, bell peppers, zucchini, eggplant, tomatoes, herbs (e.g., thyme, rosemary)."
            },
            {
              step: "Sauté Vegetables",
              action: "Sauté onions, garlic, and bell peppers. Add zucchini, eggplant, tomatoes, and herbs. Simmer until vegetables are tender."
            },
            {
              step: "Serve",
              action: "Plate the Ratatouille and enjoy!"
            }
          ]
      },
      {
        name: "Pad Thai",
        image: padthai,
        recipe:
          "Soak rice noodles. Sauté tofu/shrimp with garlic and vegetables. Add noodles, sauce, and peanuts. Garnish with lime and cilantro.",
        preparation_time: "40 minutes",
        ingredients: [
          "Rice Noodles",
          "Tofu or Shrimp",
          "Garlic",
          "Vegetables (e.g., bean sprouts, green onions)",
          "Sauce (tamarind, fish sauce, sugar)",
          "Peanuts",
          "Lime",
          "Cilantro",
        ],
        description:
          "A popular Thai stir-fried noodle dish made with rice noodles, tofu or shrimp, and a tangy sauce, garnished with peanuts and herbs.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Soak rice noodles, gather tofu or shrimp, garlic, vegetables (e.g., bean sprouts, green onions), sauce ingredients (tamarind, fish sauce, sugar), peanuts, lime, cilantro."
            },
            {
              step: "Cook Pad Thai",
              action: "Sauté tofu/shrimp with garlic and vegetables. Add soaked noodles, sauce, and peanuts. Garnish with lime and cilantro."
            },
            {
              step: "Serve",
              action: "Plate the Pad Thai and enjoy!"
            }
          ],
      },
      {
        name: "Chocolate Cake",
        image: ChocolateCake,
        recipe:
          "Mix flour, sugar, cocoa, and baking powder. Add eggs, milk, and oil. Bake until a toothpick comes out clean. Frost if desired.",
        preparation_time: "50 minutes",
        ingredients: [
          "Flour",
          "Sugar",
          "Cocoa Powder",
          "Baking Powder",
          "Eggs",
          "Milk",
          "Vegetable Oil",
          "Frosting (optional)",
        ],
        description:
          "A delicious dessert made with cocoa, flour, and sugar, often topped with frosting or ganache.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather flour, sugar, cocoa powder, baking powder, eggs, milk, vegetable oil, frosting ingredients (if desired)."
            },
            {
              step: "Mix Cake Batter",
              action: "Mix together flour, sugar, cocoa, and baking powder. Add eggs, milk, and oil. Combine until smooth."
            },
            {
              step: "Bake",
              action: "Pour the batter into a greased cake pan. Bake until a toothpick comes out clean when inserted."
            },
            {
              step: "Frosting (if desired)",
              action: "Once the cake cools, frost with desired frosting or ganache."
            },
            {
              step: "Serve",
              action: "Slice and serve the chocolate cake!"
            }
          ],
      },
      {
        name: "Miso Soup",
        image: MisoSoup,
        recipe:
          "Boil water, add miso paste. Add tofu, seaweed, and green onions. Simmer until heated through.",
        preparation_time: "15 minutes",
        ingredients: ["Water", "Miso Paste", "Tofu", "Seaweed", "Green Onions"],
        description:
          "A traditional Japanese soup made with miso paste, tofu, seaweed, and green onions.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather water, miso paste, tofu, seaweed, green onions."
            },
            {
              step: "Cook Miso Soup",
              action: "Boil water, add miso paste. Add tofu, seaweed, and green onions. Simmer until heated through."
            },
            {
              step: "Serve",
              action: "Pour the Miso Soup into bowls and enjoy!"
            }
          ],
      },
      {
        name: "Gazpacho",
        image: Gazpacho,
        recipe:
          "Blend tomatoes, cucumber, peppers, onions, and garlic. Add olive oil, vinegar, salt, and pepper. Chill before serving.",
        preparation_time: "20 minutes",
        ingredients: [
          "Tomatoes",
          "Cucumber",
          "Bell Peppers",
          "Onions",
          "Garlic",
          "Olive Oil",
          "Vinegar",
          "Salt",
          "Pepper",
        ],
        description:
          "A cold Spanish soup made with blended vegetables like tomatoes, cucumbers, peppers, and onions, served chilled.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather tomatoes, cucumber, bell peppers, onions, garlic, olive oil, vinegar, salt, pepper."
            },
            {
              step: "Blend Ingredients",
              action: "Blend tomatoes, cucumber, peppers, onions, and garlic until smooth."
            },
            {
              step: "Season & Chill",
              action: "Add olive oil, vinegar, salt, and pepper to the blended mixture. Chill before serving."
            },
            {
              step: "Serve",
              action: "Serve the Gazpacho chilled!"
            }
          ],
      },
      {
        name: "Beef Stir-Fry",
        image: BeefStirFry,
        recipe:
          "Marinate beef strips. Sauté with vegetables in a hot pan. Add sauce and cook until beef is done. Serve over rice.",
        preparation_time: "30 minutes",
        ingredients: [
          "Beef Strips",
          "Assorted Vegetables (e.g., bell peppers, broccoli, carrots)",
          "Sauce (soy sauce, ginger, garlic)",
          "Rice",
        ],
        description:
          "A quick and flavorful dish made by quickly frying thinly sliced beef and vegetables in a hot pan.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather beef strips, assorted vegetables (e.g., bell peppers, broccoli, carrots), sauce ingredients (soy sauce, ginger, garlic), rice."
            },
            {
              step: "Marinate Beef",
              action: "Marinate beef strips with the sauce ingredients."
            },
            {
              step: "Sauté",
              action: "Sauté marinated beef strips with vegetables in a hot pan until cooked."
            },
            {
              step: "Serve",
              action: "Serve the Beef Stir-Fry over rice and enjoy!"
            }
          ],
      },
      {
        name: "Bruschetta",
        image: Bruschetta,
        recipe:
          "Toast bread slices. Rub with garlic, drizzle olive oil. Top with diced tomatoes, basil, and balsamic glaze.",
        preparation_time: "15 minutes",
        ingredients: [
          "Bread",
          "Garlic",
          "Olive Oil",
          "Tomatoes",
          "Basil",
          "Balsamic Glaze",
        ],
        description:
          "An Italian appetizer featuring toasted bread topped with diced tomatoes, basil, and olive oil.",
          recipe: [
            {
              step: "Prepare Ingredients & Tools",
              action: "Gather bread, garlic, olive oil, tomatoes, basil, balsamic glaze."
            },
            {
              step: "Toast Bread",
              action: "Toast bread slices until they're lightly browned."
            },
            {
              step: "Assemble Bruschetta",
              action: "Rub toasted bread with garlic, drizzle olive oil. Top with diced tomatoes, basil, and a drizzle of balsamic glaze."
            },
            {
              step: "Serve",
              action: "Serve the Bruschetta and enjoy!"
            }
          ],
      },
      ];