const { Op } = require('sequelize');
const { Book, Author } = require('../models');
const upload = require('../utils/upload.js');

const uploadParams = {
  Key: '',
  Body: '',
  ContentDisposition: 'inline',
  ContentType: 'image/jpeg',
  ACL: 'public-read',
};
module.exports = {
  findAll: (req, res) => {
    Book.findAll({
      include: [Author],
    })
      .then((books) => res.json(books))
      .catch((err) => res.status(500).json(err));
  },
  search: (req, res) => {
    const { query } = req.query;

    Book.findAll({
      include: [Author],
      where: {
        [Op.or]: [
          { title: { [Op.substring]: query } },
          { '$Author.name$': { [Op.substring]: query } },
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
  create: async (req, res) => {
    const file = req.file;

    if (file !== undefined) {
      uploadParams.Body = file.buffer;
      uploadParams.Key = file.originalname;
      upload(uploadParams);
    }

    const pic =
      file === undefined
        ? 'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/empty.jpeg'
        : 'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/' +
          uploadParams.Key;

    console.log(file);
    try {
      const author = await Author.findOrCreate({
        where: { name: req.body.name },
      });
      console.log(req.body);
      await Book.create({
        ...req.body,
        picture: pic,
        AuthorId: author[0].dataValues.id,
      });
      res.end();
    } catch (err) {
      res.status(422).json(err);
      console.log(err);
    }
  },
  update: async (req, res) => {
    const file = req.file;

    if (file !== undefined) {
      uploadParams.Body = file.buffer;
      uploadParams.Key = file.originalname;

      upload(uploadParams);
    }
    const pic =
      file === undefined
        ? file
        : 'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/' +
          uploadParams.Key;

    console.log(req.body);
    try {
      if (req.body.name !== undefined) {
        const author = await Author.findOrCreate({
          where: { name: req.body.name },
        });

        await Book.update(
          {
            ...req.body,
            picture: pic,
            AuthorId: author[0].dataValues.id,
          },

          {
            where: { id: req.params.id },
          }
        );
      } else {
        await Book.update(
          {
            ...req.body,
            picture: pic,
          },
          {
            where: { id: req.params.id },
          }
        ).then(() => res.end());
      }

      res.end();
    } catch (err) {
      res.status(422).json(err);
    }
  },
  delete: (req, res) => {
    console.log('im here');
    Book.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
