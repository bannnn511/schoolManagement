/* eslint-disable no-console */
const { Student } = require('../models/index.ts');

module.exports = {
  create(req, res) {
    try {
      const newStudent = Student.create({
        title: req.body.title,
        phone: req.body.phone,
        address: req.body.address,
        createdBy: req.body.createdBy,
        updatedBy: req.body.updatedBy,
        status: req.body.status,
        isAdmin: false,
      });

      newStudent.at('', 0, '', '', '', '', false, true).compact().first();

      return res.status(201).send(newStudent);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};
