const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Dummy data: Fashion Tips
const fashionTips = [
  {
    id: 1,
    category: "Summer",
    tip: "Wear light and breathable fabrics like cotton or linen."
  },
  {
    id: 2,
    category: "Winter",
    tip: "Layer your clothing to stay warm and stylish. Don't forget scarves and gloves!"
  },
  {
    id: 3,
    category: "Formal",
    tip: "A well-fitted suit or dress with minimal accessories always works wonders."
  }
];

// Route to get all fashion tips
app.get('/api/fashion-tips', (req, res) => {
  res.json(fashionTips);
});

// Route to get fashion tips by category
app.get('/api/fashion-tips/:category', (req, res) => {
  const category = req.params.category;
  const tipsByCategory = fashionTips.filter(tip => tip.category.toLowerCase() === category.toLowerCase());

  if (tipsByCategory.length === 0) {
    return res.status(404).send("No tips found for this category.");
  }

  res.json(tipsByCategory);
});

// Start the server
app.listen(port, () => {
  console.log(`Fashion Tips API listening at http://localhost:${port}`);
});
