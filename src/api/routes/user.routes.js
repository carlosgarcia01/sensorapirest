const Router = require('express-promise-router').default;
 
const userController = require('../controllers/user.controller');
//const Reporte =require('../../Reports/ReporteUsuarios')
    const router = Router();
 
    router.get('/', userController.getUsers);
    router.get('/:id', userController.getUser);
    router.post('/', userController.postUser);
    router.delete('/:id',userController.deleteUser);
    router.put('/:id',userController.putUser);
    router.post('/register', userController.signUp);
    router.post('/authenticate', userController.signIn);  
    //router.get('/usuario/reporte',Reporte.generarReporte);
    module.exports = router; 
 