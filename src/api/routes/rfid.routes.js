const Router = require('express-promise-router').default;
const RfidController =require('../controllers/rfid.controller');

const Auth=require('../middlewares/auth');

const router = new Router();


router.get('/',Auth.isAuth,RfidController.getRfids );
router.get('/:id',Auth.isAuth,RfidController.getRfid);
router.post('/',Auth.isAuth,RfidController.postRfid );
router.delete('/:id',Auth.isAuth,RfidController.deleteRfid );
router.put('/:id',Auth.isAuth,RfidController.putRfid );
module.exports = router; 