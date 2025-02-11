const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.get('/ping', (req, res) => {
    try {
        res.json({ message: 'pong' });
    } catch (error) {
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Error' });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
