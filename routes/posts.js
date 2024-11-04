const express = require('express');
const router = express.Router();
const postsController = require('../Controllers/postsController.js')

router.get('/', postsController.index)

router.get('/:slug', postsController.show)

router.get('/:tags', postsController.filterTags)

module.exports = router