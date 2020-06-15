/* eslint-disable no-console */
const Class = require('../models/index.ts').class;

module.exports = {
  create(req, res): any {
    console.log('Request to create new class');
    try {
      const newClass = Class.create({
        code: req.body.code,
        title: req.body.title,
        size: req.body.size,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        status: req.body.status,
      });

      newClass.at('', '', 0, '', '', true).compact().first();

      return res.status(201).send(newClass);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
