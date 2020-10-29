
const { Router }= require('express');
const router = Router();
const { getUsers,createUsers,getUserByid, updateUser} = require('../controlador/index-control-db')

router.get('/',(req, res) =>{
    console.log('funcional...')
    res.send('Biemvenido!!!')
})
router.get('/users', getUsers);
router.get('/users/:param', getUserByid);
router.post('/create-users', createUsers);
router.put('/update-user/:param',updateUser)

module.exports = router;