const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    let obj = {
        a: 'This',
        number: 38,
        age: 23
    }

    res.json(obj);
})

module.exports = router