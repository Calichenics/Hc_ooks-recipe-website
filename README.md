# Harry Chen's Home Kitchen recipes – Guide

## Part 1: Put the website on GitHub (one-time setup)

### 1. Make a GitHub account
Go to https://github.com/signup and sign up. Your username will be part of your website address, for example `harrychen.github.io`.

### 2. Unzip the project
Download `recipe-site.zip`, then unzip it by double-clicking it on a Mac or right-clicking it and choosing "Extract All" on Windows. You'll get a `recipe-site` folder containing `index.html`, `recipes.js`, `styles.css`, `app.js`, `favicon.svg`, `README.md` and an `images` folder.

### 3. Create a repository
A repository (repo) is a project folder that lives on GitHub.
1. Go to https://github.com/new.
2. In **Repository name**, type `recipe-site`.
3. Choose **Public**, which free GitHub Pages needs.
4. Leave "Add a README file" unticked.
5. Click **Create repository**.

### 4. Upload the files
1. On the new repo page, click the link **uploading an existing file**.
2. Open your `recipe-site` folder and select **everything inside it**, including the `images` folder. Drag all of it onto the GitHub page.
   - Drag the files that are *inside* the folder, not the `recipe-site` folder itself. `index.html` has to sit at the top level of the repo.
3. Wait for every file to finish uploading. At the bottom, type a message like "First version" and click **Commit changes**.

### 5. Turn it into a live website (GitHub Pages)
1. In the repo, click **Settings** in the top tab bar.
2. In the left sidebar, click **Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
5. Wait 1–2 minutes and refresh. A box will appear saying "Your site is live at
   `https://YOUR-USERNAME.github.io/recipe-site/`".

That link is your website, and you can share it anywhere, including in your YouTube, TikTok and Instagram bios.

---

## Part 2: Change things on the website

You can make every change in your browser on GitHub. The site updates itself about a minute after each change.

**Editing a file on GitHub:** Open the repo, click the file, then click the **pencil icon** (Edit) at the top right of the file. Make your change, then click **Commit changes…** and **Commit changes** again.

**Uploading photos:** Open the `images` folder in the repo, click **Add file → Upload files**, drag your photos in, then click **Commit changes**.

Name photos simply, all lowercase with dashes instead of spaces, like `harry.jpg` or `fluffy-pancakes.jpg`. Square photos look best.

### What to change and where

Almost everything is in **`recipes.js`**.

| What | Where in `recipes.js` | What to do |
|---|---|---|
| Website name | `PROFILE` → `name` | Already "Harry Chen's Home Kitchen recipes" |
| Your photo | `PROFILE` → `photo` | Upload your photo to `images/`, then change it to `"images/harry.jpg"` |
| Bio | `PROFILE` → `bio` | Write your own text between the quotes |
| YouTube channel | `PROFILE` → `youtube` | Paste your channel link, e.g. `"https://www.youtube.com/@yourchannel"` |
| TikTok | `PROFILE` → `tiktok` | Paste your profile link, or `""` to hide the button |
| Instagram | `PROFILE` → `instagram` | Paste your profile link, or `""` to hide the button |
| Example recipes | `RECIPES` list | Edit them, or delete them and add your own |

Example:
```js
const PROFILE = {
  name: "Harry Chen's Home Kitchen recipes",
  photo: "images/harry.jpg",
  bio: "Hi, I'm Harry. ...",
  youtube: "https://www.youtube.com/@yourchannel",
  tiktok: "https://www.tiktok.com/@yourusername",
  instagram: "https://www.instagram.com/yourusername/"
};
```

### Adding a recipe

1. Upload the recipe photo to `images/`.
2. In `recipes.js`, copy a whole recipe block, from its `{` down to its matching `},`.
3. Paste it just before the final `];` at the bottom of the file, then edit it:

```js
  {
    id: "fluffy-pancakes",              // unique, lowercase, dashes, no spaces
    title: "Fluffy Pancakes",           // shown on the bar
    image: "images/fluffy-pancakes.jpg",
    time: 25,                           // total MINUTES (90 = "1 hr 30 min")
    servings: 4,
    tags: ["Easy", "Breakfast", "Sweet", "Vegetarian"],
    description: "Thick, soft American-style pancakes.",
    ingredients: [
      "200 g plain flour",
      "2 tsp baking powder",
      "1 egg",
      "250 ml milk"
    ],
    steps: [
      "Whisk the dry ingredients together.",
      "Add the egg and milk and whisk until smooth.",
      "Cook ladlefuls in a hot buttered pan, 2 minutes each side."
    ],
    notes: ["Don't over-mix – a few lumps keep them fluffy."],
    videos: {
      youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX",
      tiktok: "",                       // leave "" if there's no video
      instagram: ""
    }
  },
```

### Rules that stop things breaking
- Text always goes **inside quotes**: `"like this"`. If your text contains a `"`, use `'` instead.
- Put a **comma** after each item in a list and after each recipe's closing `}`.
- `time` and `servings` are numbers, so don't put quotes around them.
- `id` must be different for every recipe.
- **If the page goes blank or the recipes disappear**, there's a typo in `recipes.js`, usually a missing comma or quote. Check the last thing you changed. You can also open the file's **History** on GitHub to see or undo earlier versions.

### Tags
Tags can be anything, such as `"Easy"`, `"Hard"`, `"Chicken"` or `"Under 30 min"`. Every tag you use automatically becomes a filter button under the search bar. Use the same spelling and capitals each time, because `"Easy"` and `"easy"` would show up as two different buttons.

### Changing colours (optional)
Open `styles.css`. The colours are listed at the very top under `:root`:
- `--bg` is the oak background
- `--accent` is the golden-crust colour used for buttons and the bread outline
- `--surface` is the colour of the recipe bars

Colours are written as hex codes like `#dcc096`. Search "colour picker" on Google to find new ones.

### Files you don't need to touch
- `index.html` – the page structure
- `app.js` – makes search, filters and recipe pages work
