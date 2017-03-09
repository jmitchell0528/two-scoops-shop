const flavors = require('../models/flavors');

module.exports = {
  index: function (req, res) {
    res.status(200).json(flavors);
  },

  show: function (req, res) {
    const index = flavors.findIndex(flavor => flavor.id === parseInt(req.params.id));

    res.status(200).json(flavors[index]);
  },

  create: function (req, res) {
    flavors.push(req.body);

    res.status(201).json(flavors);
  },

  update: function (req, res) {
    const index = flavors.findIndex(flavor => flavor.id === parseInt(req.params.id));
    flavors[index] = req.body;

    res.status(200).json(flavors);
  },

  destroy: function (req, res) {
    const index = flavors.findIndex(flavor => flavor.id === parseInt(req.params.id));
    flavors.splice(index, 1);

    res.status(200).json(flavors);
  },
}
