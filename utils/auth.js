// const bearerToken = require('bearer-token');
const jwt = require('jsonwebtoken');

const { User } = require('../db/models');
const { jwtConfig: { secret, expiresIn } } = require('../config');

const getUserToken = (user) => {
    const userData = {
        id: user.id, email: user.email
    }
    const token = jwt.sign( { data: userData }, 
        secret, 
        { expiresIn: parseInt(expiresIn, 10) }
    )
    return token;
}

const restoreUser = (req, res, next) => {
    const { token } = req;
    if (!token) {
        return res.set('WWW-Authenticate', 'Bearer').status(401).end();
    };
    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
        if (err) {
            err.status = 401;
            return next(err)
        }
        const { id } = jwtPayload.data;
        try {
            req.user = await User.findByPk(id)
        } catch (e) {
            return next(e);
        }
        if (!req.user) {
            return res.set('WWW-Authenticate', 'Bearer').status(401).end();
        }
        return next();
    })
}
const requireAuth = [restoreUser];

module.exports = { getUserToken, requireAuth };