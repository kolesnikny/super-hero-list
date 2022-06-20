const { Superpower } = require('../models');
const _ = require('lodash');

module.exports.createSuperpower = async (req, res, next) => {
  try {
    const { body } = req;
    const filtr = _.pick(body, ['superpower']);

    const superpower = await Superpower.create({ ...filtr });
    res.json({ message: 'Successfully added power' });
  } catch (error) {
    next(error);
  }
};

module.exports.getAllSuperpowers = async (req, res, next) => {
  try {
    const arrayPowers = await Superpower.findAll();
    console.log(arrayPowers);
    res.status(200).send({ data: arrayPowers });
  } catch (error) {
    next(error);
  }
};
