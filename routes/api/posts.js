const express = require('express');
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @acces   Public
router.get('/', (req, res) => res.send('Posts route'));

module.exports = router;
