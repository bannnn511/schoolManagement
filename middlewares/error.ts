/* eslint-disable no-console */
const AppError = require('../utils/AppError.ts');

export {};

const errorhandler = (err, req, res, next) => {
  console.log(err);
  let error = { ...err };

  if (err.name === 'CastError') {
    const msg = `Resource not found with id: ${err.value}`;
    error = new AppError(msg, 400, false);
  }

  if (err.name === 'ValidationError') {
    const msg = Object.values(err.errors);
    error = new AppError(msg, 400, false);
  }

  if (err.code === 11000) {
    const fields = Object.keys(err.keyValue).join(',');
    const msg = `Duplicate field ${fields}`;
    error = new AppError(msg, 400, false);
  }

  res.status(error.statusCode || 500).json({
    status: error.statusCode ? 'fail' : 'error',
    error: error.message || 'Sever error',
  });

  next();
};

module.exports = errorhandler;
