const fs = require('fs');

const { Op } = require('sequelize');
const { Book, Author } = require('../models');

module.exports = {
  findAll: (req, res) => {
    Book.findAll({
      include: [Author],
      where: req.search,
    })
      .then((books) => res.json(books))
      .catch((err) => res.status(500).json(err));
  },
  search: (req, res) => {
    const { search } = req.search;
    Book.findAll({
      include: [Author],
      where: {
        [Op.or]: [
          { title: { [Op.substring]: search } },
          { name: { [Op.substring]: search } },
        ],
      },
    })
      .then((books) => res.json(books))
      .catch((err) => res.status(500).json(err));
  },

  findById: (req, res) => {
    Book.findByPk(req.params.id, {
      include: [Author],
    })
      .then((book) => res.json(book))
      .catch((err) => res.status(422).json(err));
  },

  delete: (req, res) => {
    Book.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
