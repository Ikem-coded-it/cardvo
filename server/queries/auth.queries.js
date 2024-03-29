const getAllUsers = "SELECT * FROM users";

const getUserById = "SELECT * FROM users WHERE id = $1";

const registerUser = "INSERT INTO users (full_name, email, pass_word, photo_url, created_at) values ($1, $2, $3, $4, $5) RETURNING id, full_name, email, photo_url";

const getUserByEmail = "SELECT * FROM users WHERE email = $1";

const setRefreshToken = "UPDATE users SET refresh_token = $2 WHERE id = $1 RETURNING email";

const getUserByRefreshToken = "SELECT * FROM users WHERE refresh_token = $1";

const editUser = "UPDATE users SET full_name = $1, email = $2, photo_url = $3 WHERE id = $4 RETURNING id, full_name, email, photo_url";

const updatePassword = "UPDATE users SET pass_word = $1 WHERE id = $2 RETURNING id"

module.exports = {
  getAllUsers,
  getUserById,
  registerUser,
  getUserByEmail,
  setRefreshToken,
  getUserByRefreshToken,
  editUser,
  updatePassword
}