const Joi = require('joi');

export const userSchema = Joi.object({
    id: Joi.string(),

    email: Joi.string()
        .alphanum()
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{5,15}$'))
        .required()
});