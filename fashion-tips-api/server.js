// server.js
const express = require('express');
const app = express();
const port = 3000;

// Define route for root (optional)
app.get('/', (req, res) => {
    res.send('Welcome to the Fashion Tips API!');
});

// Define the route for fashion-tips
app.get('/fashion-tips', (req, res) => {
    const tips = [
        "Pair light colors with neutrals for a balanced look.",
        "Accessories like belts, bags, and shoes can elevate your outfit.",
        "Don't be afraid to experiment with layers and textures.",
        "Fit is key—always choose clothing that flatters your body shape."
    ];
    res.json(tips);
});

app.listen(port, () => {
    console.log(`Fashion tips API running at http://localhost:${port}`);
});



