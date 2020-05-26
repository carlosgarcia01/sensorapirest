const Router = require('express-promise-router').default;

const RegisterController = require('../controllers/register.controller');
const Auth = require('../middlewares/auth');

const router = new Router();

router.get('/',Auth.isAuth, RegisterController.getRegisters);
router.get('/:id',Auth.isAuth, RegisterController.getRegister);
router.post('/',Auth.isAuth, RegisterController.postRegister);
router.delete('/:id',Auth.isAuth, RegisterController.deleteRegister);
router.put('/:id',Auth.isAuth, RegisterController.putRegister);
module.exports = router;
