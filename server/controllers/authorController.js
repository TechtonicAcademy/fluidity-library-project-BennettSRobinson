const fs = require('fs');

const { Book, Author } = require('../models');

module.exports = {
  findAll: (req, res) => {
    Author.findAll({
      include: [Book],
    })
      .then((authors) => res.json(authors))
      .catch((err) => res.status(500).json(err));
  },

  findById: (req, res) => {
    Author.findByPk(req.params.id, {
      include: [Book],
    })
      .then((author) => res.json(author))
      .catch((err) => res.status(422).json(err));
  },
  delete: (req, res) => {
    Author.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
