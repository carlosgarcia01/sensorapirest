const Router = require('express-promise-router').default;
const PersonController =require('../controllers/person.controller');

const Auth=require('../middlewares/auth');

const router = new Router();


router.get('/',Auth.isAuth,PersonController.getPerson );
router.get('/:id',Auth.isAuth,PersonController.getPeople  );
router.post('/',Auth.isAuth,PersonController.postPerson );
router.delete('/:id',Auth.isAuth,PersonController.deletePerson );
router.put('/:id',Auth.isAuth,PersonController.putPerson );
module.exports = router; 