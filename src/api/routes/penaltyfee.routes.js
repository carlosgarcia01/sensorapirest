const Router = require('express-promise-router').default;
const PenaltyfeeController =require('../controllers/penaltyfee.controller');


const router = new Router();


router.get('/', PenaltyfeeController.getPenaltyfees);
router.get('/:id', PenaltyfeeController.getPenaltyfee);
router.post('/', PenaltyfeeController.postPenaltyfee);
router.delete('/:id',PenaltyfeeController.deletePenaltyfee);
router.put('/:id',PenaltyfeeController.putPenaltyfee);
module.exports = router; 