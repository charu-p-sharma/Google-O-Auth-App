const { googleAuth } = require('../controllers/authController');

const router = require("express").Router();

router.get("/google", googleAuth)

module.exports = router;