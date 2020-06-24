const { Router } = require('express');
const router = Router();

const { getURLFull, createURLShort } = require('../controllers/urlShort.controller');

router.route('/:url')
    .get(getURLFull)
    
router.route('/new')
    .post(createURLShort);

module.exports = router;
