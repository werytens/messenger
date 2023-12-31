const Router = require('express').Router;
const router = new Router();
const UserController = require('../controllers/UserController');
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

router.post(
    '/registration', 
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}), 
    UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/addContact', UserController.addContact);
router.put('/setOnlineStatus', UserController.setOnlineStatus); //...
router.put('/changeAvatar', UserController.changeAvatar);  //...
router.put('/changeNS', UserController.changeNameAndSurname);  //...
router.put('/changeEmail', UserController.changeEmail); //...
router.get('/getContacts/:id', UserController.getUserContacts);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/getById/:id', UserController.getUserById);
router.get('/getByUsername/:username', UserController.getByUsername);
router.get('/get', UserController.getUsers);


module.exports = router;