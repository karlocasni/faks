/* The single source of truth for the site menu and the subject pages.
   To add a script: append to a subject's `scripts`.
   To add a subject: add an object here and create <id>/index.html (copy macroeconomics/index.html, change data-subject). */
window.FAKS_CATALOG = [
  {
    id: 'macroeconomics',
    name: 'Macroeconomics',
    source: 'Blanchard, Macroeconomics, 8th edition',
    scripts: [
      {
        href: 'ch03-04.html',
        chapters: 'Chapters 3 & 4',
        title: 'The Goods Market & Financial Markets I',
        topics: ['Keynesian cross', 'Multiplier', 'Investment = Saving', 'Paradox of saving', 'Money demand', 'Open market operations', 'Money multiplier', 'Liquidity trap'],
        exercises: 22
      }
    ]
  }
];
