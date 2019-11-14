const express = require('express');
const router = express.Router();

const addPage = require('../views/addPage');

router.use(express.urlencoded({extended: false}));

router.get('/', async (req, res, next) => {
  res.redirect('/');
})

router.post('/', async (req, res, next) => {
  console.log('hi this is', req.body)
  res.json(req.body);
})

router.get('/add', async (req, res, next) => {
  res.send(addPage());
})


module.exports = router;
