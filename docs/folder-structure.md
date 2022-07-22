# Project Structure

Semi adopted with hexagonal architecture, but minus domain & infrastructure part in this projects.

```
├── src
│   ├── components     # folder to group of each components, for more readable purpose, separated in 2 type, common & pages related components
│   │   │   └── common
│   │   │   │   └── floatingMenu.jsx
│   │   │   │   └── ...
│   │   │   └── home
│   │   │   │   └── heroImage.jsx
│   │   │   │   └── portofolio.jsx
│   │   │   │   └── ...
│   │   │   └── ...
│   ├── constants     # folder of collection variable (const) & dummies ata
│   │   ├── data.jsx
│   │   └── ...
│   ├── pages     # folder of view pages
│   │   ├── Home.js
│   │   └── ...
│   ├── style     # folder of additional style added
│   │   ├── Home.css
│   │   └── ...
├── .gitignore
└── package-lock.json
├── package.json
└── README.md
├── tailwind.config.js  # global css variable used in tailwind
└── ...
```
