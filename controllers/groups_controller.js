const db = require('../models');

module.exports = function (app) {

  app.get('/api/groups', (req, res) => {
    db.Groups.findAll({
      include: [db.Passengers]
    }).then((data) => {
      res.json(data);
    });
  });

  app.get('/api/group/', (req, res) => {
    db.Groups.find({
      where: {
        email: email
      },
      include: [db.Passengers]
    }).then((data) => {

    });
  });

  app.post('/api/group', (req, res) => {
    console.log("posting");
    db.Groups.create(req.body).then((data) => {
      res.json(data);
    });
  });

  app.put('/api/group', (req, res) => {
    db.Groups.update(
      req.body, {
        where: {
          id: req.body.id
        }
      }).then((data) => {
      res.json(data);
    });
  });
};
