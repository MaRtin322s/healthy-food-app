const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const jwtSign = promisify(jwt.sign);
const { SALT_ROUNDS, SECRET } = require('../../config/constants');

exports.registerUser = async (userData) => {
    const user = await User.findOne({ email: userData.email });

    if (user) {
        return "User with this email already exists!";
    } else {
        const password = await bcrypt.hash(userData.password, SALT_ROUNDS);
        const user = await User.create({ ...userData, password: password });
        return user;
    }
};

exports.loginUser = async ({ email, password }) => {
    const user = await User.findOne({ email: email });

    if (!user) {
        return "User not found!";
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return "Invalid email or password!";
    } else {
        return user;
    }
};

exports.generateToken = async (userData) => {
    const token = await jwtSign({ _id: userData._id }, SECRET, { expiresIn: '2h' });
    return token;
};

exports.getAuthor = async (userId) => await User.findById({ _id: userId }).populate('savedRecipes');
exports.getUser = async (userId) => await User.findById({ _id: userId });
exports.saveRecipe = async (userId, data) =>
    await User.findByIdAndUpdate({ _id: userId }, { $push: { savedRecipes: data } }).populate('savedRecipes');
exports.resetPassword = async (userId, userData, password) => {
    const passwordReset = await bcrypt.hash(password, SALT_ROUNDS);
    userData.password = passwordReset;
    const newUser = await User.findByIdAndUpdate({ _id: userId }, userData, { new: true });
    return newUser;
};
exports.getByEmail = async (email) => await User.find({ email: email });
