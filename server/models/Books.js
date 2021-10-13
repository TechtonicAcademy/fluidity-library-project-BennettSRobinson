module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define(
    'Book',
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1, 100],
        },
      },
      summary: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      published: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
          is: /^(\d{1,2})[-/](\d{1,2})[-/](\d{4})$/i,
        },
      },
      pages: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          isNumeric: true,
          min: 1,
        },
      },
      rating: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 5,
        },
      },
      picture: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
      },
    },
    {
      paranoid: true,
    }
  );

  Book.associate = ({ Author }) => {
    Book.belongsTo(Author);
  };

  return Book;
};
