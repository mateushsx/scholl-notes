import Joi from 'joi';
import {emailRegex, passwordRegex} from '../../utils/index.js';

const emailSchema = Joi.object({
    email: Joi.string().email().required().regex(new RegExp(emailRegex)),
});
const nameSchema = Joi.object({
    name: Joi.string().required().min(2).max(70),
});

const passwordSchema = Joi.object({
    password: Joi.string()
        .required()
        .regex(new RegExp(passwordRegex))
        .min(8)
        .max(30),
});

export function isValidName(name) {
    if (!name) return false;
    const result = nameSchema.validate({name});
    return result.error ? false : true;
}

export function isValidEmail(email) {
    if (!email) return false;
    const result = emailSchema.validate({email});
    return result.error ? false : true;
}

export function isValidPassword(password) {
    if (!password) return false;
    const result = passwordSchema.validate({password});
    return result.error ? false : true;
}
