const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    const usersData = [
        { id: 1, name: "Shwarma", price: 32.99 },
        { id: 2, name: "Pizza", price: 22.99 },
        { id: 3, name: "Salad", price: 12.99 }
        // Add more user objects as needed
    ];
    res.send(usersData); // Send the array of user objects
});

module.exports = router;
