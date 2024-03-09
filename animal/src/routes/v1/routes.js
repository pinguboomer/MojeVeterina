const {Router} = require('express');
const auth = require("../../_lib/auth/auth");
const router = Router();

router.use(auth)

// Animals
router.get('/animals/:id', require('./animals/getAnimal'))
router.get('/animals', require('./animals/getAnimals'))
router.post('/animals', require('./animals/createAnimal'))
router.put('/animals/:id', require('./animals/updateAnimal'))
router.delete('/animals/:id', require('./animals/deleteAnimal'))

router.get('/', (req, res) => {
    res.send('Welcome to the animal files API.')
})

module.exports = router;