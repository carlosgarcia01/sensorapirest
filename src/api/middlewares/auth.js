const jwt = require('express-jwt');

const UserService = require('../../services/user.service')

const { jwtConfig } = require('../../config');

const { secret } = jwtConfig;

/**
 * Express request handlers that verify if a valid token exists in request.
 *
 * The token can be passed as an `Authorization` header or a query parameter named `token`.
 *
 * Decoded payload will then be available in `req.auth`.
 *
 * @example
 *
 * // /src/api/routes/users.js
 *
 * const usersController = require('../controllers/users');
 * const auth = require('../middlewares/auth');
 *
 * router.get('/users/:id', auth.required, usersController.getUser);
 */

function isAuth (req, res, next) {
  if (!req.headers.authorization) {
    return res.status(403).send({ message: 'No tienes autorización' })
  }

  const token = req.headers.authorization.split(' ')[1]

  UserService.decodeToken(token)
    .then(response => {
      req.user = response

      next()
    })
    .catch(response => {
      res.status(response.status).send({message: response.message})
    }),
    isAuth
}

module.exports = {
  required: jwt({
    secret,
    requestProperty: 'auth',
  }),
  optional: jwt({
    secret,
    requestProperty: 'auth',
    credentialsRequired: false,
  }),
  isAuth
};
