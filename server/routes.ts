const classController = require('./controllers/controller.index.ts');

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Class Api',
  }));

  app.post('/api/class', classController.create);
};
