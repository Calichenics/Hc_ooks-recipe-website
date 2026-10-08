/* ==========================================================================
   YOUR CONTENT LIVES HERE
   --------------------------------------------------------------------------
   This is the only file you need to edit to update the website.

   1. PROFILE  – your name, photo, bio and links (shown at the top of the page)
   2. RECIPES  – one { ... } block per recipe. Copy an existing block, paste
                 it at the end of the list, and change the details.

   Tips:
   - Put your photos in the  images/  folder and reference them like
     "images/my-photo.jpg".
   - "id" must be unique, lowercase, with dashes instead of spaces
     (it becomes the recipe's web address, e.g. index.html#/recipe/lemon-chicken).
   - "time" is the total time in MINUTES (e.g. 90 shows as "1 hr 30 min").
   - "servings" is optional: add e.g.  servings: 4,  to show "Serves 4".
   - "tags" can be anything you like – every tag you use automatically
     appears as a filter button under the search bar.
   - "notes" is optional: little extra tips shown in a separate box at the
     bottom of the recipe. Use a list ["tip one", "tip two"] or leave as [].
   - "videos" is optional: paste the full link to the video of this recipe on
     each platform. Leave any you don't have as "" and its button is hidden.
     If there's a YouTube link, the video also plays right on the page.
   - Remember the comma between recipe blocks!
   ========================================================================== */

const PROFILE = {
  name: "Harry Chen's Home Kitchen recipes",
  photo: "images/harry.jpg",
  bio: "Hi, I'm Harry.I'm a UCL 2nd year Physics student. Every recipe here comes from one of my videos, so you can read along here or watch me make it. Use the search bar below, filter by tags or just scroll through my recipes. Please let me know what you think!",
  youtube: "https://www.youtube.com/@hc_ooks",
  tiktok: "https://www.tiktok.com/@hc_ooks",       // leave empty "" to hide
  instagram: "https://www.instagram.com/hc_ooks"  // leave empty "" to hide
};

const RECIPES = [
  {
    id: "pesto-pasta",
    title: "Pesto Pasta with Chicken",
    image: "images/pesto-pasta.jpg",
    time: 30,
    tags: ["Pasta", "Chicken", "Italian", "Easy"],
    description: "Homemade basil pesto mixed with pasta, served with pan-fried chicken breast.",
    ingredients: [
      "Garlic cloves",
      "Fresh basil",
      "Parmesan cheese",
      "Pine nuts",
      "Salt",
      "Oil",
      "Chicken breast",
      "Rosemary and thyme",
      "Pasta of your choice",
      "Parsley to serve"
    ],
    steps: [
      "Blend the garlic, basil, Parmesan, pine nuts, salt and oil until a paste forms.",
      "Slice the chicken breast in half and sauté in a pan with whatever flavours you like (I went with rosemary and thyme).",
      "Boil the pasta as per the packet instructions and drain, keeping a little of the pasta water.",
      "In a pan on low heat (or no heat), mix the pesto, a splash of pasta water and the pasta together thoroughly.",
      "Plate up with the chicken on the side and top with parsley and Parmesan."
    ],
    notes: [
      "Keep the heat low when mixing in the pesto so the basil stays bright green."
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/RYmi0_gWCwo",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7525201322925149462",
      instagram: "https://www.instagram.com/reel/DL5vuhNoVAH/"
    }
  },
  {
    id: "carbonara",
    title: "Carbonara",
    image: "images/carbonara.jpg",
    time: 15,
    tags: ["Pasta", "Pork", "Italian", "Medium"],
    description: "Proper carbonara: guanciale, egg yolks and pecorino. No cream.",
    ingredients: [
      "Guanciale (or pancetta)",
      "Egg yolks plus 1 whole egg",
      "Pecorino Romano (or Parmesan)",
      "Pasta of your choice",
      "Black pepper"
    ],
    steps: [
      "Dice the guanciale and set aside.",
      "Mix the egg yolks and one whole egg with the pecorino in a bowl until you have a thick mixture.",
      "Boil the pasta until al dente.",
      "Add the guanciale to a cold pan, then turn the heat up to medium to render out the fat. Once cooked, strain off the fat.",
      "Add the cooked pasta and mix with the egg mixture until creamy. If it's too thick, add a little pasta water.",
      "Finish with black pepper and a few more cubes of guanciale on top."
    ],
    notes: [
      "Use pancetta if you can't find guanciale.",
      "Starting the guanciale in a cold pan helps the fat render out slowly."
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/IWCAN7UMd8s",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7518851809482525974",
      instagram: "https://www.instagram.com/reel/DLNq8ZYI4i4/"
    }
  },
  {
    id: "mapo-tofu",
    title: "Mapo Tofu",
    image: "images/mapo-tofu.jpg",
    time: 25,
    tags: ["Tofu", "Pork", "Beef", "Chinese", "Spicy", "Easy"],
    description: "Silky tofu in a spicy, numbing sauce with mince, broad bean chilli paste and Sichuan pepper.",
    ingredients: [
      "Tofu",
      "Beef or pork mince",
      "Broad bean chilli paste (doubanjiang)",
      "Garlic",
      "Ginger",
      "Spring onions",
      "Cornstarch",
      "Ground Sichuan peppercorns",
      "Salt"
    ],
    steps: [
      "Cube the tofu and boil for around 10 minutes with some salt.",
      "Fry the mince until fragrant, then add the broad bean chilli paste along with chopped garlic and ginger.",
      "Add spring onions and hot water and let it sit for a few minutes.",
      "Stir in a cornstarch slurry to thicken.",
      "Sprinkle over ground Sichuan peppercorns and top with spring onions."
    ],
    notes: [
       "If it aint with rice, it aint nice"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/RdieqLTppUg",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7465465625134009633",
      instagram: "https://www.instagram.com/reel/DFbPwjSOAlT/"
    }
  },
  {
    id: "chicken-mushroom-sauce",
    title: "Pan-Fried Chicken with Mushroom Sauce",
    image: "images/chicken-mushroom-sauce.jpg",
    time: 20,
    tags: ["Chicken", "Easy", "Dinner"],
    description: "Paprika-seasoned chicken breast with a white wine, shallot and mushroom butter sauce.",
    ingredients: [
      "Chicken breast",
      "Salt, pepper and paprika",
      "Mushrooms",
      "Shallots",
      "Red peppers (optional)",
      "White wine",
      "Butter",
      "Rice to serve",
      "Parsley"
    ],
    steps: [
      "Season the chicken breast with salt, pepper and paprika and fry in a pan.",
      "Finely chop the mushrooms, shallots and red peppers (optional).",
      "If using, sauté the red peppers in the pan.",
      "Once the chicken and peppers are cooked, add the shallots and mushrooms until softened, then add white wine and emulsify with butter.",
      "Serve with rice and top with parsley."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/QJ4r0ufjzg4",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7444983438442073376",
      instagram: "https://www.instagram.com/reel/DDNHu0fO-gy/"
    }
  },
  {
    id: "mongolian-beef",
    title: "Mongolian Beef",
    image: "images/mongolian-beef.jpg",
    time: 20,
    tags: ["Beef", "Quick", "Easy", "Dinner"],
    description: "Sticky, savoury minced beef in a soy, oyster sauce and brown sugar glaze.",
    ingredients: [
      "Minced beef",
      "Garlic",
      "Ginger",
      "Spring onions (scallions)",
      "Soy sauce",
      "Dark soy sauce",
      "Oyster sauce",
      "Rice wine",
      "Brown sugar",
      "Cornstarch",
      "Oil"
    ],
    steps: [
      "Cook the minced beef until almost fully cooked and set aside.",
      "Chop the garlic, ginger and spring onions and add to a pan with oil.",
      "In a bowl, mix soy sauce, dark soy sauce, oyster sauce, rice wine, brown sugar and cornstarch.",
      "Add the sauce to the pan, then add the beef on low heat and top with spring onions."
    ],
    notes: [
       "instead of minced beef, you can use steak steak slices"
       "it uses cheap 
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/Lb6CAuVoSG8",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7440511035016056096",
      instagram: "https://www.instagram.com/reel/DCuGD4rIJ9G/"
    }
  },
  {
    id: "pumpkin-pie",
    title: "Pumpkin Pie",
    image: "images/pumpkin-pie.jpg",
    time: 90,
    tags: ["Dessert", "Baking", "Vegetarian", "Medium"],
    description: "Roasted pumpkin blended with condensed milk and warm spices, baked in pastry.",
    ingredients: [
      "Pumpkin",
      "Condensed milk",
      "Ground cloves, nutmeg and cinnamon (or spices of your choice)",
      "Pastry"
    ],
    steps: [
      "Empty and roast the pumpkin until the skin comes off easily.",
      "Blend the pumpkin with condensed milk and your spices.",
      "Prepare the pastry and shape it into a pie dish.",
      "Pour in the pumpkin mixture and bake for around 30–40 minutes at 180 °C."
    ],
    notes: [
       "Ideal with cream/ ice cream on the side!"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/hSxu-yq1rEc",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7432748595591367969",
      instagram: "https://www.instagram.com/reel/DB4Np5_uPJB/"
    }
  },
  {
    id: "cheese-tteokbokki",
    title: "Cheese Tteokbokki",
    image: "images/cheese-tteokbokki.jpg",
    time: 20,
    tags: ["Korean", "Spicy", "Vegetarian", "Quick", "Easy"],
    description: "Chewy rice cakes in a sweet-spicy gochujang sauce, topped with melted cheese.",
    ingredients: [
      "Rice cakes (tteok)",
      "Spring onions",
      "Garlic",
      "Gochujang",
      "Gochugaru (or chilli flakes)",
      "Soy sauce",
      "Sugar",
      "Cheese (mozzarella is best)"
    ],
    steps: [
      "Chop the spring onions and garlic.",
      "For the sauce, mix chopped garlic, gochujang, gochugaru, soy sauce and sugar.",
      "Heat some water in a pan until nearly boiling and stir in the sauce.",
      "Add the rice cakes and spring onions and mix.",
      "Simmer for around 5 minutes, add the cheese on top and cover with a lid until melted."
    ],
    notes: [
      "I didn't have gochugaru so I used normal chilli flakes.",
      "Use mozzarella for a better cheese pull.",
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/JHS0rPhFRFc",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7430091711168220449",
      instagram: "https://www.instagram.com/reel/DBlywi3oVtp/"
    }
  },
  {
    id: "mussels",
    title: "Mussels in marinara sauce",
    image: "images/mussels.jpg",
    time: 25,
    tags: ["Seafood", "Easy", "Dinner"],
    description: "Mussels steamed in a buttery tomato, chilli and white wine sauce. Serve with bread for dipping.",
    ingredients: [
      "Mussels",
      "Shallots",
      "Garlic",
      "Chillies",
      "Canned or fresh tomatoes",
      "Butter",
      "Salt",
      "White wine",
      "Parsley",
      "Bread to serve"
    ],
    steps: [
      "Clean and separate the mussels.",
      "Chop the shallots, garlic and chillies.",
      "Use canned tomatoes or blend some fresh ones.",
      "Fry the shallots and garlic in butter until softened, then add the tomatoes and chillies.",
      "Add a pinch of salt and white wine and cook until slightly reduced.",
      "Add the mussels and cover with a lid for around 3–5 minutes.",
      "Stir in chopped parsley and serve with bread."
    ],
    notes: [
      "Throw away any mussels that stay closed after cooking. They are done when they open"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/6p0G0IjcE-M",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7428635645834300705",
      instagram: "https://www.instagram.com/reel/DBbsUcOo0d9/"
    }
  },
  {
    id: "chana-masala",
    title: "Chana Masala with Roti",
    image: "images/chana-masala.jpg",
    time: 40,
    tags: ["Indian", "Vegan", "Vegetarian", "Medium"],
    description: "Spiced chickpea curry with simple homemade roti.",
    ingredients: [
      "Onions",
      "Tomato",
      "Oil",
      "Bay leaves",
      "Garlic powder",
      "Turmeric",
      "Garam masala",
      "Ground coriander",
      "Chilli powder",
      "Cumin",
      "Chickpeas",
      "Fresh coriander",
      "For the roti: flour, salt and water"
    ],
    steps: [
      "Cut the onions and tomato and add to a pan with oil and bay leaves.",
      "Add garlic powder, turmeric, garam masala, ground coriander, chilli powder and cumin and mix.",
      "Add the chickpeas with some water and let it simmer.",
      "For the roti, mix flour and salt in a bowl, pour in some water and mix until a dough forms.",
      "Cut the dough into small pieces and roll them out.",
      "Cook the roti on both sides, flipping regularly.",
      "Top the chickpeas with coriander."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/G_CCyllKBXk",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7427498928905391392",
      instagram: "https://www.instagram.com/reels/DBTywURoK4I/"
    }
  },
  {
    id: "beef-bourguignon",
    title: "Beef Bourguignon",
    image: "images/beef-bourguignon.jpg",
    time: 60,
    tags: ["Beef", "French", "Medium", "Dinner"],
    description: "Beef braised with red wine, stock, herbs and mushrooms.",
    ingredients: [
      "Beef",
      "Onions",
      "Garlic",
      "Carrot",
      "Thyme",
      "Rosemary",
      "Salt and pepper",
      "Tomato paste",
      "Red wine",
      "Beef stock",
      "Bay leaves",
      "Mushrooms",
      "Parsley"
    ],
    steps: [
      "Chop the onions, garlic, carrot and beef.",
      "Cook the beef in the pan until partly cooked, then take it out.",
      "Add the vegetables to the pan with thyme, rosemary, salt, pepper and tomato paste and cook until softened.",
      "Add the wine, beef stock and bay leaves and simmer for around 20 minutes.",
      "Add the beef back in and simmer for a further 10 minutes.",
      "Sauté the mushrooms, add them to the pot and garnish with parsley."
    ],
    notes: [
       "if you want the beef really tender, cook it low and slow. maybe around 1hr."
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/s2khri4XmYY",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7426044121174822176",
      instagram: "https://www.instagram.com/reels/DBJuffjo6vk/"
    }
  },
  {
    id: "nutella-swirls",
    title: "Nutella Swirls",
    image: "images/nutella-swirls.jpg",
    time: 25,
    tags: ["Dessert", "Baking", "Vegetarian", "Easy"],
    description: "Braided puff pastry spirals filled with Nutella.",
    ingredients: [
      "Puff pastry",
      "Nutella",
      "Egg (for egg wash)",
      "Icing sugar"
    ],
    steps: [
      "Cut the puff pastry into strips and spread with Nutella.",
      "Roll widthways, cut down the middle, braid the two strands and roll into a spiral.",
      "Brush with egg wash and bake at 200 °C for 10–12 minutes.",
      "Sprinkle with icing sugar."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/xvW5MUqfnhI",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7424564777185316128",
      instagram: "https://www.instagram.com/reels/DA_drz7OS4f/"
    }
  },
  {
    id: "mushroom-pancetta-toast",
    title: "Mushroom and Pancetta on Toast",
    image: "images/mushroom-pancetta-toast.jpg",
    time: 20,
    tags: ["Pork", "Brunch", "Quick", "Easy"],
    description: "Mushrooms and pancetta in a red wine butter sauce,on toasted sourdough.",
    ingredients: [
      "Mushrooms",
      "Garlic",
      "Onions",
      "Salt and pepper",
      "Thyme",
      "Pancetta",
      "Red wine",
      "Butter",
      "Sourdough bread",
      "Parsley"
    ],
    steps: [
      "Chop the mushrooms, garlic and onions and fry until softened.",
      "Add salt, thyme, pepper and pancetta and fry until the pancetta has darkened.",
      "Add red wine and reduce by half.",
      "Once reduced, stir in butter on low heat.",
      "Toast the sourdough, place the mushroom and pancetta sauce and sprinkle with parsley."
    ],
    notes: [
       "Looks fancy and tastes amazing, but isn't too hard to make!"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/Vj-736eWp1M",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7423461252757867808",
      instagram: "https://www.instagram.com/reels/DA3yyl0OuyH/"
    }
  },
  {
    id: "butter-chicken",
    title: "Butter Chicken",
    image: "images/butter-chicken.jpg",
    time: 60,
    tags: ["Chicken", "Indian", "Medium", "Dinner"],
    description: "Yoghurt-marinated chicken in a smooth, buttery tomato sauce finished with cream.",
    ingredients: [
      "Chicken",
      "Garlic",
      "Ginger",
      "Cloves",
      "Salt",
      "Cashew nuts",
      "Cayenne pepper",
      "Garam masala",
      "Turmeric",
      "Yoghurt",
      "Lemon",
      "Onions",
      "Butter",
      "Tomato paste",
      "Canned tomatoes",
      "Cream",
      "Coriander and mint"
    ],
    steps: [
      "Cut the chicken and marinate it in garlic, ginger, cloves, salt, cayenne pepper, garam masala, turmeric, yoghurt and lemon.",
      "Cook the chicken until nearly done and set aside.",
      "In the same pan, fry chopped onions in butter until softened, then add tomato paste, canned tomatoes and any seasonings you like.",
      "Add some Cashews and blend the sauce until smooth.",
      "Return it to the pan with the chicken, swirl in some cream and top with coriander and mint."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/wpHE57IPfto",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7422323775829478688",
      instagram: "https://www.instagram.com/reels/DAv55yxodK8/"
    }
  },
  {
    id: "jollof-rice",
    title: "Jollof Rice",
    image: "images/jollof-rice.jpg",
    time: 50,
    tags: ["Rice", "Vegetarian", "Medium"],
    description: "Rice simmered in a spiced, blended tomato and pepper base.",
    ingredients: [
      "Onions",
      "Peppers",
      "Tomatoes",
      "Ginger",
      "Garlic",
      "Tomato paste",
      "Cumin",
      "Turmeric",
      "Salt",
      "Cayenne pepper",
      "Bay leaves",
      "Rice",
      "Butter"
    ],
    steps: [
      "Blend onions, peppers, tomatoes, ginger and garlic.",
      "Fry chopped onions in a pan with tomato paste until it browns, then add cumin, turmeric, salt and cayenne pepper.",
      "Add the blended mixture, season to taste, add bay leaves and keep on a low boil.",
      "Add the washed rice, cover and simmer for 20 minutes, then leave to rest for 10.",
      "Once cooked, fold in some butter."
    ],
    notes: [
      "My first go at jollof. It might not be authentic so maybe find a different recipe",
      "Leave out the butter (or use a plant-based one) to keep it vegan."
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7421572074583477537",
      instagram: "https://www.instagram.com/reels/DAqtRhIoy0E/"
    }
  },
  {
    id: "wings-mac-and-cheese",
    title: "Chicken Wings and Mac and Cheese",
    image: "images/wings-mac-and-cheese.jpg",
    time: 50,
    tags: ["Chicken", "Air Fryer", "Pasta", "Medium"],
    description: "Spiced air-fryer wings with a baked, cheesy mac and cheese.",
    ingredients: [
      "Chicken wings",
      "Paprika",
      "Oregano",
      "Cayenne pepper",
      "Garlic powder",
      "Chilli powder",
      "Salt and pepper",
      "Corn flour",
      "Macaroni",
      "Butter",
      "Flour",
      "Milk",
      "Cheeses of your choice",
      "Parsley"
    ],
    steps: [
      "Marinate the wings with paprika, oregano, cayenne pepper, garlic powder, chilli powder and salt, then coat in corn flour.",
      "Air fry the wings for around 18 minutes at 200 °C.",
      "Melt butter in a pan and mix in flour on low heat until smooth, then add the milk and mix again until a smooth consistency.",
      "Add your choice of cheeses and season with salt, pepper and paprika, then mix in the cooked macaroni.",
      "Add an extra layer of cheese on top and bake at 180 °C for 20 minutes.",
      "Serve the wings and mac and cheese topped with chopped parsley."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/N54CwPDyDdA",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7420794808500849953",
      instagram: "https://www.instagram.com/reels/DAlSqlcoK7D/"
    }
  },
  {
    id: "lemon-meringue-cookies",
    title: "Lemon Meringue Cookies",
    image: "images/lemon-meringue-cookies.jpg",
    time: 75,
    tags: ["Dessert", "Baking", "Vegetarian", "Easy"],
    description: "Light, crisp meringue cookies with lemon zest and juice.",
    ingredients: [
      "Egg whites",
      "Sugar",
      "Lemon zest",
      "Lemon juice"
    ],
    steps: [
      "Beat the egg whites until frothy.",
      "Add the sugar and lemon zest in small batches while continuously mixing.",
      "Add some lemon juice and keep beating until stiff peaks form.",
      "Spoon onto a baking tray and bake at 100 °C for an hour."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/ioY7r7ut20k",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7419765874237672737",
      instagram: "https://www.instagram.com/reel/DAeJnKJu_kl/"
    }
  },
  {
    id: "korean-fried-chicken",
    title: "Air Fryer Korean Fried Chicken",
    image: "images/korean-fried-chicken.jpg",
    time: 45,
    tags: ["Chicken", "Korean", "Air Fryer", "Spicy", "Medium"],
    description: "Crispy air-fried chicken thighs coated in a sticky gochujang and honey glaze.",
    ingredients: [
      "Chicken thighs",
      "Mirin",
      "Soy sauce",
      "Sesame oil",
      "Ginger",
      "Garlic",
      "Cornflour",
      "Garlic powder",
      "Salt",
      "Ketchup",
      "Gochujang",
      "Honey",
      "Sesame seeds",
      "Spring onions"
    ],
    steps: [
      "Dice the chicken thighs and mix with mirin, soy sauce, sesame oil, grated ginger and garlic.",
      "Coat the chicken in cornflour, garlic powder and salt.",
      "Air fry for around 15–18 minutes at 200 °C.",
      "In a pan, mix ketchup, gochujang, soy sauce and honey until saucy.",
      "Toss the chicken in the sauce and top with sesame seeds and spring onions."
    ],
    notes: [
       "If you don't want too much sauce, put the chicken in a bowl and drizzle the sauce on top, while tossing.
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/JLyZ8TiAbIA",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7418640518512463137",
      instagram: "https://www.instagram.com/reel/DAWXN9SuPsh/"
    }
  },
  {
    id: "blueberry-pastry",
    title: "Blueberry Pastries",
    image: "images/blueberry-pastry.jpg",
    time: 30,
    tags: ["Dessert", "Baking", "Vegetarian", "Easy"],
    description: "Puff pastry folded around a blueberry jam filling.",
    ingredients: [
      "Blueberries",
      "Lemon juice",
      "Sugar",
      "Puff pastry",
      "Egg (for egg wash)",
      "Icing sugar"
    ],
    steps: [
      "Cook the blueberries, lemon juice and sugar in a pan on low until smooth.",
      "Cut the puff pastry into squares and spoon the blueberry mixture into the middle.",
      "Fold the corners of each square into the middle.",
      "Brush with egg wash and bake for around 12–15 minutes at 180–190 °C.",
      "Sprinkle with icing sugar."
    ],
    notes: [
       "This is my go to thing to bake, quick and easy"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/T6rTMS8FJa0",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7416387837647424801",
      instagram: "https://www.instagram.com/reel/DAGtfdeocm2/"
    }
  },
  {
    id: "chicken-karaage",
    title: "Air Fryer Chicken Karaage",
    image: "images/chicken-karaage.jpg",
    time: 50,
    tags: ["Chicken", "Japanese", "Air Fryer", "Easy"],
    description: "Karaage chicken air-fried until crisp and served with lemon and mayo.",
    ingredients: [
      "Chicken",
      "Ginger",
      "Garlic",
      "Soy sauce",
      "Mirin",
      "Sesame oil",
      "Cornflour",
      "Oil spray",
      "Cabbage (or lettuce)",
      "Lemon",
      "Mayo"
    ],
    steps: [
      "Dice the chicken into chunks and marinate with grated ginger and garlic, soy sauce, mirin and sesame oil for at least 30 minutes.",
      "Toss in cornflour, spray with oil and air fry for 18 minutes, flipping partway through.",
      "Serve on a bed of cabbage with lemon and mayo."
    ],
    notes: [
      "I only had lettuce, but cabbage is the classic way to serve it."
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/IAS0vufhg9M",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7416027009702284576",
      instagram: "https://www.instagram.com/reel/DAEORDYI1lt/"
    }
  },
  {
    id: "apple-crumble",
    title: "Apple Crumble",
    image: "images/apple-crumble.jpg",
    time: 50,
    tags: ["Dessert", "Baking", "Vegetarian", "Easy"],
    description: "Cinnamon apples under a buttery crumble topping. Best with ice cream.",
    ingredients: [
      "Apples",
      "Cinnamon",
      "Sugar",
      "Flour",
      "White sugar",
      "Brown sugar",
      "Cold butter",
      "Ice cream to serve"
    ],
    steps: [
      "Dice the apples and cook in a pan with cinnamon and sugar.",
      "For the crumble, mix flour, white sugar, brown sugar and cold butter until you reach the consistency you want.",
      "Put the apples in a tray, cover with the crumble and bake at around 180–200 °C.",
      "Serve with ice cream."
    ],
    notes: [
      "Try it with my 3-ingredient vanilla ice cream!"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/C-SHF39e5TE",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7414871443869158688",
      instagram: "https://www.instagram.com/reel/C_8MF08ImXI/"
    }
  },
  {
    id: "vanilla-ice-cream",
    title: "3-Ingredient Vanilla Ice Cream",
    image: "images/vanilla-ice-cream.jpg",
    time: 300,
    tags: ["Dessert", "Vegetarian", "Easy"],
    description: "vanilla ice cream with just three ingredients.",
    ingredients: [
      "Heavy cream",
      "Condensed milk",
      "Vanilla extract"
    ],
    steps: [
      "Whisk the heavy cream until soft peaks form.",
      "Pour in the condensed milk and vanilla extract and mix in.",
      "Pour into a container and freeze for around 5 hours."
    ],
    notes: [
      "Most of the time is freezing. The hands-on part only takes about 10 minutes."
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/SdO8BM73rmQ",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7413846208571051296",
      instagram: "https://www.instagram.com/reel/C_1CpJXOVci/"
    }
  },
  {
    id: "steak-and-mash",
    title: "Steak and Mash with Red Wine Onions",
    image: "images/steak-and-mash.jpg",
    time: 45,
    tags: ["Beef", "Medium", "Dinner"],
    description: "Butter-basted steak on creamy mash with a red wine, onion and mushroom sauce.",
    ingredients: [
      "Potatoes",
      "Butter",
      "Salt and pepper",
      "Milk",
      "Cheese (optional)",
      "Steak",
      "Thyme",
      "Oil",
      "Onions",
      "Mushrooms",
      "Red wine",
      "Parsley"
    ],
    steps: [
      "Boil the potatoes in salted water until soft, then peel.",
      "Mash and add to a pan with butter, salt, pepper and milk until it's the consistency you like. Mix in cheese if you want, then set aside.",
      "Tenderise the steak and season both sides with salt and pepper.",
      "Sear in a hot oiled pan for around a minute before flipping.",
      "Lower the heat slightly, add butter and thyme and keep basting the steak.",
      "Once cooked to your liking, slice into strips and set aside.",
      "In the same pan, sauté thinly sliced onions until soft, then add finely chopped mushroom, salt and red wine and reduce by half, stirring constantly.",
      "Plate the mash, lean the steak slices on it, cover with the onion and wine sauce, and finish with parsley and black pepper."
    ],
    notes: [],
    videos: {
      youtube: "https://www.youtube.com/shorts/iqLU7WnloNo",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7413486269969288480",
      instagram: "https://www.instagram.com/reel/C_ylHruu0gh/"
    }
  },
  {
    id: "shakshuka",
    title: "Shakshuka",
    image: "images/shakshuka.jpg",
    time: 30,
    tags: ["Eggs", "Vegetarian", "Brunch", "Easy"],
    description: "Eggs cooked in a spiced tomato and pepper sauce, served with pitta.",
    ingredients: [
      "Onions",
      "Peppers",
      "Tomato purée",
      "Salt",
      "Paprika",
      "Cumin",
      "Garlic powder",
      "Turmeric",
      "Tomatoes",
      "Eggs",
      "Herbs",
      "Black pepper",
      "Pitta bread"
    ],
    steps: [
      "Dice the onions and peppers.",
      "Cook them in a hot pan until slightly softened, then add tomato purée.",
      "Stir in salt, paprika, cumin, garlic powder and turmeric, adding a little water if it gets too dry.",
      "Add the tomatoes and mash them up as you mix.",
      "Crack in two eggs and cook covered for as long as you like, depending on how you like your eggs.",
      "Top with herbs and black pepper and serve with pitta."
    ],
    notes: [
       "Dont cook for too long if you want a runny yolk, which is ideal"
    ],
    videos: {
      youtube: "https://www.youtube.com/shorts/p1c_ghJJzbg",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7412023366376230177",
      instagram: "https://www.instagram.com/reel/C_obISAo5_4/"
    }
  },
  {
    id: "lasagna",
    title: "Lasagna",
    image: "images/lasagna.jpg",
    time: 80,
    tags: ["Beef", "Pasta", "Italian", "Hard"],
    description: "Layers of beef ragù, béchamel, cheese and pasta sheets.",
    ingredients: [
      "Onions",
      "Garlic",
      "Butter",
      "Minced beef",
      "Salt and pepper",
      "Garlic powder",
      "Oregano",
      "Tomato paste",
      "Tomatoes",
      "Red wine",
      "Flour",
      "Milk",
      "Cheese",
      "Lasagna sheets"
    ],
    steps: [
      "Dice the onions and garlic and sauté in butter until slightly brown.",
      "Add the mince with salt, pepper, garlic powder, oregano and tomato paste and mix well.",
      "Add the tomatoes and a splash of red wine, stirring continuously.",
      "For the béchamel, melt butter in a saucepan on low heat and stir in a little flour until creamy. Add a little milk and mix until creamy, and keep repeating until it's the consistency of honey.",
      "Layer the meat first, then cheese, then a lasagna sheet, then béchamel. Repeat.",
      "Bake for around 15–20 minutes at 200 °C."
    ],
    notes: [
      "Some of the recording got lost, which is why the video has no intro or ending."
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7394441239317286176",
      instagram: "https://www.instagram.com/reel/C9uZp18OvJ_/"
    }
  },
  {
    id: "nasi-goreng",
    title: "Nasi Goreng",
    image: "images/nasi-goreng.jpg",
    time: 30,
    tags: ["Chicken", "Rice", "Spicy", "Easy"],
    description: "Indonesian fried rice with chicken, sambal and kecap manis, topped with a fried egg.",
    ingredients: [
      "Onions",
      "Red chilli",
      "Garlic",
      "Tempeh",
      "Ginger",
      "Chicken",
      "Oil",
      "Sambal",
      "Leftover rice",
      "Kecap manis",
      "Egg",
      "Spring onions"
    ],
    steps: [
      "Cut up the onions, red chilli, garlic and tempeh, and finely grate the ginger.",
      "Dice the chicken into bite-sized pieces.",
      "Fry the onions, garlic, chilli and ginger in oil until slightly softened, then mix in a tablespoon of sambal.",
      "Add the chicken and cook until nearly done, then add the leftover rice.",
      "Add kecap manis at the side of the pan or wok and mix it through the rice and chicken.",
      "Plate up with a fried egg on top and garnish with spring onions."
    ],
    notes: [
      "Leftover rice works best because it doesn't go mushy."
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7389054400800607520",
      instagram: "https://www.instagram.com/reel/C9I-8MoSGAV/"
    }
  },
  {
    id: "coconut-chicken-curry",
    title: "Coconut Chicken Curry",
    image: "images/coconut-chicken-curry.jpg",
    time: 45,
    tags: ["Chicken", "Indian", "Medium", "Dinner"],
    description: "Warmly spiced chicken curry with tomatoes and coconut milk.",
    ingredients: [
      "Chicken",
      "Onions",
      "Paprika",
      "Salt and pepper",
      "grated Garlic ",
      "Cayenne pepper",
      "Turmeric",
      "Garam masala",
      "Curry powder",
      "Ground cloves",
      "Ground ginger",
      "Ground coriander",
      "Tomato paste",
      "Canned tomatoes",
      "Coconut milk",
      "Okra (optional)",
      "Fresh mint"
    ],
    steps: [
      "Dice the onions and chicken and season the chicken with paprika, salt, pepper, garlic, cayenne pepper and turmeric.",
      "Cook the chicken in a pan and set aside.",
      "Cook the onions with salt, turmeric, garam masala, curry powder, ground cloves, ground ginger and ground coriander (add chilli if you like).",
      "Mix in the tomato paste, then add the canned tomatoes and stir.",
      "Pour in the coconut milk bit by bit, stirring. Add chopped okra if using.",
      "Cover and simmer for 5–10 minutes, with the chicken back in.",
      "Plate up, drizzle with a little more coconut milk and top with fresh mint."
    ],
    notes: [
      "I didn't have garlic powder so I used granules.",
      "I forgot to film the chicken cooking."
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7387372571546684704",
      instagram: "https://www.instagram.com/reel/C89NAC_ofio/"
    }
  },
  {
    id: "tuscan-chicken-pasta",
    title: "Tuscan Chicken Pasta",
    image: "images/tuscan-chicken-pasta.jpg",
    time: 40,
    tags: ["Chicken", "Pasta", "Italian", "Medium"],
    description: "Creamy sun-dried tomato pasta with red peppers, spinach and seasoned chicken.",
    ingredients: [
      "Pasta",
      "Spinach (optional)",
      "Chicken breast or thigh",
      "Salt and pepper",
      "Paprika",
      "Garlic",
      "Cayenne pepper",
      "Cornflour",
      "Red onions",
      "Red peppers",
      "Tomato purée",
      "Sun-dried tomatoes",
      "Lemon (optional)",
      "Heavy cream",
      "Parsley"
    ],
    steps: [
      "Boil the pasta, adding spinach near the end if you like.",
      "Season the chicken with salt, pepper, paprika, garlic and cayenne pepper, then very lightly coat in cornflour.",
      "Very finely chop the red onions and roughly chop the red peppers.",
      "Cook the chicken in oil until done, then take it out, leaving the oil in the pan.",
      "Fry the onions and a little garlic on medium until softened (add salt and paprika here if you like), then mix in a little over a teaspoon of tomato purée.",
      "Add the peppers and sun-dried tomatoes (add their oil first if they came in some) and cook until the peppers soften. Turn the heat to low.",
      "Add the spinach and a squeeze of lemon if using.",
      "Stir in about 4 tablespoons of pasta water, then about a quarter cup of heavy cream.",
      "Add the pasta and chicken, mix and garnish with parsley."
    ],
    notes: [
       "people say this is my best dish"
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7385863186764844320",
      instagram: "https://www.instagram.com/reel/C8y5G_ZIxBs/"
    }
  },
  {
    id: "honey-garlic-soy-chicken",
    title: "Honey Garlic Soy Chicken",
    image: "images/honey-garlic-soy-chicken.jpg",
    time: 30,
    tags: ["Chicken", "Rice", "Quick", "Easy"],
    description: "Sticky honey, garlic and soy chicken served over rice.",
    ingredients: [
      "Chicken",
      "Soy sauce",
      "Sesame oil",
      "Honey",
      "Garlic",
      "Salt",
      "Thyme (optional)",
      "Cornflour",
      "Oil",
      "Rice",
      "Spring onions",
      "Sesame seeds"
    ],
    steps: [
      "Cut up the chicken and marinate in soy sauce, sesame oil, honey, garlic, salt and thyme (optional), then mix with cornflour.",
      "Fry the chicken in oil until fully cooked, around 4 minutes. Keep it moving so it doesn't stick.",
      "Cook the rice in a rice cooker or pan.",
      "Serve the chicken with rice and garnish with spring onions and sesame seeds."
    ],
    notes: [],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7384713788416707873",
      instagram: "https://www.instagram.com/reel/C8q5fRCo3JT/"
    }
  },
  {
    id: "apple-blueberry-lattice",
    title: "Apple and Blueberry Lattice Pastries",
    image: "images/apple-blueberry-lattice.jpg",
    time: 40,
    tags: ["Dessert", "Baking", "Vegetarian", "Medium"],
    description: "Puff pastry with caramelised apple or blueberry filling under a woven lattice top.",
    ingredients: [
      "Apples",
      "Sugar",
      "Butter",
      "Blueberries",
      "Lemon juice",
      "Lemon zest (optional)",
      "Puff pastry",
      "Egg (for egg wash)",
      "Icing sugar"
    ],
    steps: [
      "Peel the apples and cut into small pieces.",
      "Melt sugar in a pan until caramelised, add a little butter, then stir in the apples.",
      "In another pan, stir blueberries, sugar and lemon juice (and zest if using) until darker in colour.",
      "Preheat the oven to 180–200 °C (fan).",
      "Cut the puff pastry into rectangles and the leftover pastry into strips.",
      "Spoon the apple or blueberry filling onto the rectangles and weave the strips over and under on top to make a lattice.",
      "Brush with egg wash, bake for 8–10 minutes and serve with icing sugar."
    ],
    notes: [],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7383239785525087520",
      instagram: "https://www.instagram.com/reel/C8gsyWiowqx/"
    }
  },
  {
    id: "leek-and-potato-soup",
    title: "Leek and Potato Soup",
    image: "images/leek-and-potato-soup.jpg",
    time: 40,
    tags: ["Soup", "Easy"],
    description: "A smooth, creamy leek and potato soup.",
    ingredients: [
      "Potatoes",
      "Leek",
      "Garlic",
      "Butter",
      "Chicken stock",
      "Salt and pepper",
      "Thyme (optional)",
      "Heavy cream",
      "Parsley"
    ],
    steps: [
      "Peel and boil the potatoes.",
      "Thinly slice the leek and chop some garlic.",
      "Add butter and garlic to a pan and cook the leek until softened.",
      "Chop the potatoes and add them with the chicken stock. Simmer for around 10 minutes, seasoning with salt, pepper and thyme if you like.",
      "Blend until smooth, then return to the pan, stirring constantly.",
      "Mix in the heavy cream.",
      "Garnish with fresh parsley and a few drops of cream."
    ],
    notes: [
      "Swap the chicken stock for vegetable stock to make it fully vegetarian."
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7382114743445753121",
      instagram: "https://www.instagram.com/reel/C8Y3xynIhtu/"
    }
  },
  {
    id: "beef-bulgogi",
    title: "Beef Bulgogi",
    image: "images/beef-bulgogi.jpg",
    time: 180,
    tags: ["Beef", "Korean", "Rice", "Medium"],
    description: "Thinly sliced beef in a sweet soy and pear marinade, served over rice.",
    ingredients: [
      "Steak or beef",
      "Onions",
      "Asian pear (or apple)",
      "Spring onions",
      "Garlic",
      "Soy sauce",
      "Honey",
      "Sesame oil",
      "Brown sugar",
      "Rice",
      "Sesame seeds"
    ],
    steps: [
      "Freeze the beef for around 2–4 hours to make it easier to slice.",
      "Slice the onions, pear, spring onions and garlic.",
      "Add them to a marinade of soy sauce, honey, sesame oil and brown sugar.",
      "Cut the beef into very thin slices, mix into the marinade and rest for at least 2 hours.",
      "Cook the rice and heat up your pan.",
      "Cook the onions and beef from the marinade in a hot pan until the beef is just cooked.",
      "Serve the bulgogi over rice and garnish with spring onions and sesame seeds."
    ],
    notes: [
      "Most of the time is freezing and marinating. The cooking takes about 15 minutes."
       "if you have thing slices of beef, no need to freeze it"
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7380738149565140256",
      instagram: "https://www.instagram.com/reel/C8PUpn6osra/"
    }
  },
  {
    id: "chicken-biryani",
    title: "Chicken Biryani",
    image: "images/chicken-biryani.jpg",
    time: 300,
    tags: ["Chicken", "Rice", "Indian", "Hard"],
    description: "Spiced, yoghurt-marinated chicken layered with fragrant rice, crispy onions and herbs.",
    ingredients: [
      "Chicken thighs",
      "Cayenne pepper",
      "Chilli powder",
      "Yoghurt",
      "Lemon",
      "Garlic and ginger",
      "Cardamom seeds",
      "Mint",
      "Coriander",
      "Ground cloves",
      "Turmeric",
      "Garam masala",
      "Salt",
      "Onions",
      "Oil",
      "Basmati rice",
      "Star anise",
      "Bay leaves",
      "Cinnamon stick (optional)",
      "Saffron (optional)",
      "Milk"
    ],
    steps: [
      "Mix the chicken thighs with cayenne pepper, chilli powder, yoghurt, lemon, garlic and ginger paste, cardamom seeds, mint, coriander, ground cloves, turmeric, garam masala and salt. Marinate for at least 4 hours.",
      "Thinly slice the onions and cook in plenty of oil until they shrink, change colour and turn slightly crispy.",
      "Wash the rice 2–3 times. Boil water with star anise, salt, bay leaves and a cinnamon stick (plus a sprinkle of ground cloves and saffron if you like).",
      "Par-cook the rice for around 3–4 minutes.",
      "Put the chicken in a saucepan with a little oil, then layer the rice and onions on top with mint and coriander between each layer.",
      "Mix milk and saffron and pour over the rice.",
      "Cover with tin foil and the lid and cook on medium for around 20–30 minutes."
    ],
    notes: [
      "I didn't have garlic and ginger paste, so I used ground garlic and ginger.",
      "I used Thai rice because I didn't have basmati."
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7379733663774248225",
      instagram: "https://www.instagram.com/reel/C8IVNBiIa4S/"
    }
  },
  {
    id: "chicken-risotto",
    title: "Chicken Risotto",
    image: "images/chicken-risotto.jpg",
    time: 45,
    tags: ["Chicken", "Rice", "Italian", "Medium"],
    description: "Creamy Parmesan risotto with seasoned chicken thighs, plus optional sun-dried tomatoes and spinach.",
    ingredients: [
      "Onions",
      "Garlic",
      "Chicken thighs",
      "Salt and pepper",
      "Garlic powder",
      "Paprika",
      "Cayenne pepper",
      "Oil",
      "White wine",
      "Arborio rice",
      "Chicken stock",
      "Butter",
      "Parmesan",
      "Sun-dried tomatoes (optional)",
      "Spinach (optional)",
      "Parsley"
    ],
    steps: [
      "Finely chop the onions and garlic and set aside.",
      "Cut up the chicken thighs and season with salt, pepper, garlic powder, paprika and cayenne pepper.",
      "Cook the chicken in oil until done and leave to rest.",
      "In another pan, sauté the onions in oil, adding the garlic halfway, until soft.",
      "Add a splash of white wine and mix well.",
      "Turn to low heat, add the arborio rice and stir for a few minutes.",
      "Add a splash of stock and stir constantly until absorbed. Repeat until the rice is soft and creamy.",
      "Stir in a little butter and Parmesan.",
      "Optionally add sun-dried tomatoes and spinach and cook until the spinach wilts.",
      "Mix in the chicken and garnish with chopped parsley."
    ],
    notes: [
       "The first recipe on my channel!"
    ],
    videos: {
      youtube: "",
      tiktok: "https://www.tiktok.com/@hc_ooks/video/7378253251180891425",
      instagram: "https://www.instagram.com/reel/C7-Ht1UIRil/"
    }
  }
];
