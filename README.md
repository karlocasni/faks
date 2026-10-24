# faks

Study scripts for university courses, published with GitHub Pages.

## Structure

```
index.html                  Home: lists all subjects
assets/catalog.js           Menu + subject pages are built from this list
assets/nav.js               Shared top menu
assets/site.css             Shared colours, fonts, menu and card styles
macroeconomics/index.html   Subject page (lists its scripts)
macroeconomics/ch03-04.html Blanchard Ch. 3 & 4: The Goods Market, Financial Markets I
corporate-finance/index.html    Subject page
corporate-finance/l01-04.html   Lectures 1–4 + Tutorials 1–2: financial management,
                                financial environment, statements, ratio analysis
```

## Adding a script to an existing subject

1. Put the page in the subject folder, e.g. `macroeconomics/ch05.html`.
   Inside `<body>` add the menu and its scripts:
   ```html
   <div id="site-nav" data-root="../" data-current="macroeconomics/ch05.html"></div>
   ...
   <script src="../assets/catalog.js"></script>
   <script src="../assets/nav.js"></script>
   ```
2. Add an entry to that subject's `scripts` array in `assets/catalog.js`.

## Adding a new subject

1. Add an object to `assets/catalog.js` (`id`, `name`, `source`, `scripts: []`).
2. Copy `macroeconomics/index.html` to `<id>/index.html` and change the two
   `macroeconomics` values (`data-current` and `data-subject`) to the new id.

## Local preview

```bash
python -m http.server 8765
```

Then open http://localhost:8765.
