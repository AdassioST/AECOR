const { Router } = require('express');

/**
 * Controllers
 */
const SiteManager = require('../controllers/AecorController');

/**
 * Router
 */
const router = Router();

/**
 * Site routes
 */
router.get('/', SiteController.main);
router.post('/api/users', SiteController.about);

module.exports = router; 
