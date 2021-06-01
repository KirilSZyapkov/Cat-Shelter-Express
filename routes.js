const { Router } = require('express');
const router = Router();

const homeControler = require('./controlers/homeControler');
const addBreedControler = require('./controlers/addBreedControler');
const addCatControler = require('./controlers/addCatControler');
const {edit, post} = require('./controlers/editControler');

router.get('/', homeControler);
router.get('/add-breed', addBreedControler);
router.get('/add-cat', addCatControler);
router.get('/edit-cat/:id', edit);

router.post('/add-breed', addBreedControler);
router.post('/add-cat', addCatControler);
router.post('/edit-cat/:id', post);

module.exports = router;