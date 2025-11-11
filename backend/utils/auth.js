const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

const comparePasswords = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    return null;
  }
};

const authMiddleware = (roles = []) => {
  return (req, res, next) => {
    try {
      const token = req.headers.authorization?.split(' ')[1];
      if (!token) {
        return res.status(401).json({ message: 'Authentication required' });
      }

      const decoded = verifyToken(token);
      if (!decoded) {
        return res.status(401).json({ message: 'Invalid or expired token' });
      }

      if (roles.length && !roles.includes(decoded.role)) {
        return res.status(403).json({ message: 'Insufficient permissions' });
      }

      req.user = decoded;
      next();
    } catch (error) {
      console.error('Auth middleware error:', error);
      return res.status(500).json({ message: 'Authentication failed' });
    }
  };
};

module.exports = {
  hashPassword,
  comparePasswords,
  generateToken,
  verifyToken,
  authMiddleware
};
