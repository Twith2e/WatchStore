const Validate = (schema) => async (req, res, next) => {
  try {
    const body = req.body;
    const validated = await schema.validate(body);
    if (!validated) {
      throw new Error("");
    }
    next();
  } catch (error) {
    res.status(400).send({ message: error.message, status: false });
  }
};

module.exports = { Validate };
