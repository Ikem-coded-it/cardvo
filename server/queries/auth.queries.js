const getAllUsers = 'SELECT * FROM users';

const getUserByEmail = 'SELECT * FROM users WHERE email = $1';

const registerUser = 'INSERT INTO users (full_name, email, pass_word, created_at) VALUES ($1, $2, $3, $4) RETURNING id, full_name, email, pass_word, created_at';

module.exports = {
  getAllUsers,
  getUserByEmail,
  registerUser,
}