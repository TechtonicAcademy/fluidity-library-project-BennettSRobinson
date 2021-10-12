const router = require('express').Router();
const multer = require('multer');
const formToRequest = multer({
  limits: {
    fileSize: 10000000,
  },
});
const bookController = require('../../controllers/bookController');

router
  .route('/')
  .get(bookController.findAll)
  .post(formToRequest.single('picture'), bookController.create);

router.route('/search').get(bookController.search);

router
  .route('/:id')
  .get(bookController.findById)
  .put(formToRequest.single('picture'), bookController.update)
  .delete(bookController.delete);

module.exports = router;
