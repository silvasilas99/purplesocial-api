const router = require('express').Router();
const UserController = require('./../controllers/UserController');

router.put('/:id', UserController.updateUser);
router.delete("/:id", UserController.deleteUser);
router.get("/:id", UserController.getUser);

router.put('/:id/follow', UserController.follow);
router.put('/:id/unfollow', UserController.unfollow);

module.exports = router;