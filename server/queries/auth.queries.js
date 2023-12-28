const getAllUsers = "SELECT * FROM users";

const registerUser = "INSERT INTO users (full_name, email, pass_word, photo_url) values ($1, $2, $3, $4) RETURNING id, full_name, email, pass_word, photo_url";

const getUserByEmail = "SELECT * FROM users WHERE email = $1";

const setRefreshToken = "UPDATE users SET refresh_token = $2 WHERE id = $1 RETURNING email";

const getUserByRefreshToken = "SELECT * FROM users WHERE refresh_token = $1";

module.exports = {
  getAllUsers,
  getUserByEmail,
  setRefreshToken,
  getUserByRefreshToken
}