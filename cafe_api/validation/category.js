const Joi = require("@hapi/joi");

exports.getValidate = {
  params: {
    id: Joi.number().required(),
  },
};

exports.postValidate = {
  body: {
    name_en: Joi.string().required(),
    name_ar: Joi.string().required(),
  },
};
