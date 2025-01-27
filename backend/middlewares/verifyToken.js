const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || 'your-secret-key';


function verifyToken(req, res, next) {
    const token = req.header('Authorization').split(' ')[1]; // split the authorisation into bearer and token
    if (!token) return res.status(401).json({ error: 'Access denied' });
    try {
        const decoded = jwt.verify(token, secretKey);
        req.userId = decoded.userId;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};

module.exports = verifyToken;