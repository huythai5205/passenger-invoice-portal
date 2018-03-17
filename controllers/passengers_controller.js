var db = require("../models");

module.exports = function (app) {
  app.get('/api/passenger', function (req, res) {
    let query = {};
    if (req.query.customer_id) {
      query.GroupId = req.query.group_id;
    }

    db.Passenger.findAll({
      where: query,
      include: [db.Groups]
    }).then(function (data) {
      res.json(data);
    });
  });

  app.post('/api/passenger/', function (req, res) {
    db.Passenger.create(req.body).then(function (data) {
      res.json(data);
    });
  });

}
