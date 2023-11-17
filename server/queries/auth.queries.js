const getAllUsers = 'SELECT * FROM users';

const getUserById = 'SELECT * FROM users WHERE id = $1';

const getUserByEmail = 'SELECT * FROM users WHERE email = $1';

const registerUser = 'INSERT INTO users (full_name, email, pass_word, created_at, photo_url) VALUES ($1, $2, $3, $4, $5) RETURNING id, full_name, email, pass_word, created_at, photo_url';

const getFederatedCredentials = 'SELECT * FROM federated_credentials WHERE provider = $1 AND subject = $2';

const createFederatedCredential = 'INSERT INTO federated_credentials (user_id, provider, subject) VALUES ($1, $2, $3)';

module.exports = {
  getAllUsers,
  getUserById,
  getUserByEmail,
  registerUser,
  getFederatedCredentials,
  createFederatedCredential
}