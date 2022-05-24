const validationMiddleware = (schema, type) => async (req, res, next) => {
  try {
    await schema.validateAsync(req[type]);
    next();
  } catch (error) {
    res.status(400).json({
      status: error.details,
      code: 400,
    });
    next(error);
  }
};

module.exports = { validationMiddleware };
