import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { validate } from "../validation/validation.js";
import { loginValidation, registerValidation } from "../validation/auth-validation.js";
import { PrismaClient } from "../application/database.js";
import { ResponseError } from "../error/response-error.js";
import { request } from "express";

const register = async (request) => {
    const user = validate(registerValidation, request);
    user.password = await bcrypt.hash(user.password, 10);
    const newUser = await PrismaClient.user.create({
        data: user
    });
    
    const token = generationAccessToken(user)
    const result = {
        access_token: token,
        data: newUser
    }
    return result;
}

const generationAccessToken = (payload) => {
    return jwt.sign(payload, procces.env.TOKEN_SECRET, { expiresIn: procces.env.JWT.EXPIRE });
}

const login = async(request) => {
    const loginRequest = validate(loginValidation, request);

    const user = await PrismaClient.user.findUnique({
        where: {
            email: loginRequest.email
        }
    });

    if (!user) {
        throw new ResponseError(401,"Invalid credentials");
    }

    const isPasswordValid = await bcrypt.compare(loginRequest.password, user.password);
    if (!isPasswordValid) {
        throw new ResponseError(401, "Invalid credential")
    }

    exclude(user, 'password')
    const token = generationAccessToken(user)
    const result = {
        access_token: token,
        data: user,
    }
    return result
}

function exclude(user, ...keys) {
    for (let key of keys) {
        delete user [key]
    }
    return user
}

export default {
    register,
    login
}