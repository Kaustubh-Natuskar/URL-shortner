const express = require('express');
const path = require('path');

const router = express.Router();

const Url = require('../models/URL');

router.get('/', (req, res) => {
  res.sendFile(path.resolve('index.html'));
});

// @routes GET /:code
// @desc Redirect to long/oginal url
router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({ urlCode: req.params.code });

    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('server error');
  }
});

module.exports = router;
