const Sequelize = require('sequelize');

const sequelize = new Sequelize("sqlite:database/FavoriteMovies.db");

const Model = Sequelize.Model;

class FavoriteMovie extends Model { }

FavoriteMovie.init({
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    unique: true,
    primaryKey: true
  },
  title: {
    type: Sequelize.STRING
  },
  poster_path: {
    type: Sequelize.STRING
  },
  overview:{
    type: Sequelize.STRING
  },
  release_date: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING
  },
  vote_average:{
    type: Sequelize.FLOAT
  }

}, {
  sequelize,
  modelName: 'FavoriteMovie',
});

//Create table if not exist, but, if exist, just sync
(async () => {
  await sequelize.sync();
})();

module.exports = { FavoriteMovie }