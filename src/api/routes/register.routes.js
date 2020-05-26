const Router = require('express-promise-router').default;

const RegisterController = require('../controllers/register.controller');
const Auth = require('../middlewares/auth');

const router = new Router();

router.get('/', RegisterController.getRegisters);
router.get('/:id', RegisterController.getRegister);
router.post('/', RegisterController.postRegister);
router.delete('/:id', RegisterController.deleteRegister);
router.put('/:id', RegisterController.putRegister);
module.exports = router;
