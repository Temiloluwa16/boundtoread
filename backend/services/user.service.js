const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY || 'your-secret-key';

function returnToken(userId){
    const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });
    return token
}

module.exports = {
    returnToken
}