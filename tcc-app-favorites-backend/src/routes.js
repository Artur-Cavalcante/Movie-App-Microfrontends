const { Router } = require('express');
const FavoriteMoviesController = require('./controllers/FavoriteMoviesController.js');

const routes = Router();

routes.get('/api/FavoriteMovies', FavoriteMoviesController.index);
routes.post('/api/FavoriteMovies', FavoriteMoviesController.store);
routes.delete('/api/FavoriteMovies', FavoriteMoviesController.destroy);

module.exports = routes;