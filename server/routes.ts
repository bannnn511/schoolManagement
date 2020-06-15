const studentApi = require('./controllers/indexController.ts').studentController;
const classApi = require('./controllers/indexController.ts').classController;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to Class Api',
  }));

  // class api
  // create
  app.post('/api/class', classApi.create);

  // student api
  // create
  app.post('/api/student', studentApi.create);
};
