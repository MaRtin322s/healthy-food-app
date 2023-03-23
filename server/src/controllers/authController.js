const router = require('express').Router();
const authService = require('../services/authServices');

router.post('/register', async (req, res) => {
    const {
        firstName,
        lastName,
        email,
        imageUrl,
        password,
        rePass } = req.body;

    try {
        if (password !== rePass) {
            return res.status(400).json({ message: 'Passwords do not match' });
        } else {
            const result = await authService.registerUser({ firstName, lastName, email, imageUrl, password });

            if (typeof result === 'string') {
                throw result;
            } else {
                const token = await authService.generateToken({ _id: result._id });
                res.json({
                    _id: result._id,
                    email: result.email,
                    firstName: result.firstName,
                    lastName: result.lastName,
                    accessToken: token
                });
            };
        };
    } catch (err) {
        res.json(err);
    }
});

router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await authService.loginUser({ email, password });

        if (typeof user === 'string') {
            throw user;
        } else {
            const token = await authService.generateToken({ _id: user._id });
            res.json({
                _id: user._id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                accessToken: token
            });
        };
    } catch (err) {
        res.json({ message: err });
    };
});

router.get('/logout', (req, res) => {
    if (req.headers['x-authorization']) {
        res.json();
    };
});

router.post('/email-test', async (req, res) => {
    const { email } = req.body;
    const user = await authService.getByEmail(email);
    res.json(user[0]);
});

router.post('/reset', async (req, res) => {
    const { password, rePass, userId } = req.body;
    const user = await authService.getUser(userId);
    if (password === rePass) {
        await authService.resetPassword(userId, user, password);
        res.json({ message: "Password successfully reset!" });
    }
});

module.exports = router;