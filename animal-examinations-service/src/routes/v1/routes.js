const {Router} = require('express');
const auth = require("../../_lib/auth/auth");
const router = Router();

router.use(auth)

// Animals
router.get('/animals/:id',  require('./animals/getAnimal'))
router.get('/animals', require('./animals/getAnimals'))
router.get('/animals/client/:id', require('./animals/client/getAnimalClient'))
router.post('/animals', require('./animals/createAnimal'))
router.put('/animals/:id', require('./animals/updateAnimal'))
router.delete('/animals/:id', require('./animals/deleteAnimal'))

// Animal examinations
router.get('/animal-examinations/:id', require('./animal-examinations/getExamination'))
router.get('/animal-examinations', require('./animal-examinations/getExaminations'))
router.get('/animal-examinations/animal/:id', require('./animal-examinations/animal/getExaminationsAnimal'))
router.post('/animal-examinations', require('./animal-examinations/createExamination'))
router.put('/animal-examinations/:id', require('./animal-examinations/updateExamination'))
router.delete('/animal-examinations/:id', require('./animal-examinations/deleteExamination'))

router.get('/', (req, res) => {
    res.send('Welcome to the animal-examinations-service files API.')
})

module.exports = router;