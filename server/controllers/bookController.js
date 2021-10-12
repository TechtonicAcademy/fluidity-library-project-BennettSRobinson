const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

AWS.config.update({ region: 'us-east-2' });
const s3 = new AWS.S3({ params: { Bucket: 'libraryprojectbucket' } });
const uploadParams = { Key: '', Body: '' };

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
  create: (req, res) => {
    const file = req.body.picture;
    console.log(req.files);
    if (file) {
      const filestream = fs.createReadStream(file);
      filestream.on('error', (err) => {
        res.json(err);
      });
      uploadParams.Body = filestream;
      uploadParams.Key = path.basename(file).toString();
      console.log(uploadParams.Key);
      s3.upload(uploadParams, (err, data) => {
        if (err) {
          console.log('Error', err);
        }
        if (data) {
          console.log('Upload Success', data.Location);
        }
      });
    }
    const pic =
      file === undefined
        ? 'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/empty.jpeg'
        : 'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/' +
          uploadParams.Key;

    Author.findOrCreate({
      where: { name: req.body.name },
    })
      .then((author, created) => {
        Book.create({
          ...req.body,
          picture: pic,
          AuthorId: author[0].dataValues.id,
        }).then(() => res.end());
      })
      .catch((err) => res.status(422).json(err));
  },
  update: (req, res) => {
    const file = req.body.picture;
    const filestream = fs.createReadStream(file);
    console.log(filestream);
    filestream.on('error', (err) => {
      res.json(err);
    });
    console.log(file);
    uploadParams.Body = file.buffer;
    uploadParams.Key = path.basename(file);
    console.log(uploadParams.Key);
    s3.upload(uploadParams, (err, data) => {
      if (err) {
        console.log('Error', err);
      }
      if (data) {
        console.log('Upload Success', data.Location);
      }
    });

    const pic =
      file === undefined
        ? file
        : 'https://libraryprojectbucket.s3.us-east-2.amazonaws.com/' +
          uploadParams.Key;
    console.log(uploadParams.Key);
    if (req.body.name !== undefined) {
      Author.findOrCreate({
        where: { name: req.body.name },
      })
        .then((author, created) => {
          Book.update(
            {
              ...req.body,
              picture: pic,
              AuthorId: author[0].dataValues.id,
            },
            {
              where: { id: req.params.id },
            }
          )
            .then(() => {
              res.end();
            })
            .catch((err) => res.status(422).json(err));
        })
        .catch((err) => res.status(422).json(err));
    } else {
      Book.update(
        {
          ...req.body,
          picture: pic,
        },
        {
          where: { id: req.params.id },
        }
      )
        .then(() => {
          res.end();
        })
        .catch((err) => res.status(422).json(err));
    }
  },
  delete: (req, res) => {
    Book.destroy({
      where: { id: req.params.id },
    })
      .then(() => res.end())
      .catch((err) => res.status(500).json(err));
  },
};
