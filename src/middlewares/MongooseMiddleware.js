import mongoose, { Query } from 'mongoose';

function isValidObjectIdParam(req, res, next) {
  const _id = req.params._id;

  if (mongoose.Types.ObjectId.isValid(_id)) {
    next();
  } else {
    res.status(400).json({
      error: {
        message: 'Please provide correct id'
      }
    });
  }
}

function isValidObjectIdQuery(req, res, next) {
  const _id = req.query._id;

  if (_id) {
    if (mongoose.Types.ObjectId.isValid(_id)) {
      next();
    } else {
      res.status(400).json({
        error: {
          message: 'Please provide correct id'
        }
      });
    }
  } else {
    next();
  }
}

module.exports = {
  isValidObjectIdParam,
  isValidObjectIdQuery
}