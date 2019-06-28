import { User } from '../models';

function search(req, res) {
  const findOptions = { ...req.query };

  User.find(findOptions)
    .then(users => {
      res.status(200).json({
        data: users
      })
    })
    .catch(error => {
      res.status(400).json({
        error
      });
    });
}

function get(req, res) {
  const _id = req.params._id;
  const findOptions = { _id };

  User.findOne(findOptions)
    .then(user => {
      res.status(200).json({
        data: user || {}
      })
    })
    .catch(error => {
      res.status(400).json({
        error
      });
    });
}

function create(req, res) {
  const user = req.body;

  User.create(user)
    .then(newUser => {
      res.status(200).json({
        user: newUser
      });
    })
    .catch(error => {
      res.status(400).json({
        error
      });
    });
}

function update(req, res) {
  const _id = req.params._id;
  const findOptions = { _id };
  const update = req.body;

  User.updateOne(findOptions, update)
    .then(result => {
      res.status(200).json({
        data: result
      });
    })
    .catch(error => {
      res.status(400).json({
        error
      });
    });
}

module.exports = {
  search,
  get,
  create,
  update
}