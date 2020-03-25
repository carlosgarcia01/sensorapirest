const Router = require('express-promise-router').default;
const PenaltyfeeController =require('../controllers/penaltyfee.controller');

const Auth=require('../middlewares/auth');

const router = new Router();


router.get('/',Auth.isAuth,  PenaltyfeeController.getPenaltyfees);
router.get('/:id',Auth.isAuth,  PenaltyfeeController.getPenaltyfee);
router.post('/',Auth.isAuth,  PenaltyfeeController.postPenaltyfee);
router.delete('/:id',Auth.isAuth, PenaltyfeeController.deletePenaltyfee);
router.put('/:id',Auth.isAuth, PenaltyfeeController.putPenaltyfee);
module.exports = router; 