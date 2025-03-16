const express = require('express');
const app = express();
const port = 3000;

// Serve static HTML page when accessed via root route
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Fashion Tips API</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 8px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    width: 80%;
                    max-width: 600px;
                }
                h1 {
                    text-align: center;
                    color: #4CAF50;
                }
                .tips {
                    list-style-type: none;
                    padding: 0;
                }
                .tip {
                    background-color: #e7f9e7;
                    margin: 10px 0;
                    padding: 10px;
                    border-radius: 5px;
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                }
            </style>
        </head>
        <body>

            <div class="container">
                <h1>Fashion Tips</h1>
                <ul id="tipsList" class="tips"></ul>
            </div>

            <script>
                async function fetchFashionTips() {
                    try {
                        const response = await fetch('/fashion-tips'); // We'll hit our own API for the tips
                        const tips = await response.json();
                        
                        const tipsList = document.getElementById('tipsList');
                        tipsList.innerHTML = ''; // Clear previous content
                        
                        tips.forEach(tip => {
                            const li = document.createElement('li');
                            li.className = 'tip';
                            li.textContent = tip;
                            tipsList.appendChild(li);
                        });
                    } catch (error) {
                        console.error('Error fetching fashion tips:', error);
                    }
                }

                // Load fashion tips on page load
                window.onload = fetchFashionTips;
            </script>

        </body>
        </html>
    `);
});

// Your fashion tips API endpoint
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




