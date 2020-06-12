const Student = require('../models/student.ts');

module.exports = {
  create(req, res) {
    return Student.create({
      title: req.body.title,
      phone: req.body.phone,
      address: req.body.address,
      createdBy: req.body.createdBy,
      updatedBy: req.body.updatedBy,
      status: req.body.status,
      isAdmin: false,
    }).then((student) => res.status(201).send(student))
      .catch((error) => res.status(400).send(error));
  },
};
