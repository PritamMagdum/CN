const jwt = require('jsonwebtoken')
var JWT_SECRET = 'PritamMagdum$1622'

const fetchuser = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please Authenticate using valid token" })
    }

    try {
        const data = jwt.verify(token, JWT_SECRET);
        req.id = data.id;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please Authenticate using valid token" })
    }

}

module.exports = fetchuser