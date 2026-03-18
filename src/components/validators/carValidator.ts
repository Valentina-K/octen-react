import * as Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).min(1).max(20)
        .messages({'string.pattern.base': 'Your brand value didn\'t match pattern.'}).required(),
    price: Joi.number().min(0).max(1000000)
        .messages({'number.min':"Min price is 0",
            "number.max":"Max price is 1 000 000"}).required(),
    year: Joi.number().min(10).min(1990).max(2026)
        .messages({'number.min':"Min year is 1990",
            "number.max":"Max year is 2026"}).required(),
})