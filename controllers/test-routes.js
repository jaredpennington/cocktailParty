const router = require('express').Router();



// Get all dishes
router.get('/', async (req, res) => {
  res.render('test');
});



module.exports = router;
