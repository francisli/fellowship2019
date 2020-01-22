'use strict';

const express = require('express');
const router = express.Router();
const models = require('../models');

router.get('/', function(req, res, next) {
  models.Todo.findAll().then(function(records) {
    res.render('todo/index', {
      records: records
    });
  });
});

router.get('/new', function(req, res, next) {
  res.render('todo/new');
});

router.post('/', function(req, res, next) {
  models.Todo.create({
    title: req.body.title,
    body: req.body.body
  }).then(function(record) {
    res.redirect(`/todo`);
  });
});

module.exports = router;
