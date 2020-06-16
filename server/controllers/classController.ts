/* eslint-disable no-console */
const { Class } = require('../models/index');
// import { Class } from '../models/index';

module.exports = {
  async create(req, res) {
    console.log('Request to create new class');
    console.log('Request body', req.body);
    try {
      const newClass = await Class.create({
        // code: req.body.code,
        title: req.body.title,
        size: req.body.size,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        status: req.body.status,
      });

      newClass.at('', '', 0, '', '', true).compact().first();

      return res.status(201).send('newClass');
    } catch (error) {
      console.log(error);
      return res.status(400).send(error);
    }
  },
};
