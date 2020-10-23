
const { Router }= require('express');
const router = Router();
const { getUsers,createUsers} = require('../controlador/index-control-db')

router.get('/users', getUsers);
router.post('/create-users', createUsers);


module.exports = router;