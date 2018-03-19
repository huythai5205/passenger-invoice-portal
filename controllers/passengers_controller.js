var db = require("../models");

module.exports = function (app) {
  app.get('/api/passengers', function (req, res) {
    let query = {};
    if (req.query.groupId) {
      query.GroupId = req.query.groupId;
    }

    db.Passengers.findAll({
      where: query,
      include: [db.Groups]
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/passenger', function (req, res) {
    db.Passengers.create(req.body).then(function (data) {
      res.json(data);
    });
  });

}
