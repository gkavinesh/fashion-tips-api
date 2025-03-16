module.exports = (req, res) => {
  // Array of fashion tips
  const tips = [
    "A basic white t-shirt is a must-have in every wardrobe.",
    "Don't be afraid to mix patterns for a bold look.",
    "A good pair of sneakers can make any outfit more stylish.",
    "Keep your clothes well-fitted to enhance your overall appearance.",
    "Layer your outfits to create a stylish and practical look.",
    "A classic leather jacket can never go out of style.",
    "Accessorize with bold jewelry to make your outfit stand out.",
    "Experiment with different textures to add dimension to your look.",
    "When in doubt, stick to neutral colors for a versatile outfit.",
    "Tailoring your clothes makes a world of difference in how they fit."
  ];

  // Randomly select a tip
  const randomTip = tips[Math.floor(Math.random() * tips.length)];

  // Send a response with the selected fashion tip
  res.status(200).json({ tip: randomTip });
};

