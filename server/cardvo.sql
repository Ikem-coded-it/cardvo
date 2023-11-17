CREATE TABLE users (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  pass_word VARCHAR(100) NOT NULL,
  email VARCHAR(50) NOT NULL,
  photo_url VARCHAR(100) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  UNIQUE (email)
);

CREATE TABLE federated_credentials (
  user_id VARCHAR NOT NULL PRIMARY KEY,
  provider VARCHAR NOT NULL,
  subject VARCHAR NOT NULL,
  CONSTRAINT unique_user_id UNIQUE(user_id)
);

CREATE TABLE card_designs (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  card_holder_name VARCHAR(60) NOT NULL,
  card_number_one BIGINT  NOT NULL,
  card_number_two BIGINT  NOT NULL,
  card_number_three BIGINT  NOT NULL,
  card_number_four BIGINT  NOT NULL,
  expiration DATE NOT NULL,
  color VARCHAR(9),
  background_image VARCHAR,
  cvv VARCHAR(3)  NOT NULL,
  category VARCHAR(10) NOT NULL,
  CONSTRAINT unique_numbers UNIQUE (card_number_one, card_number_two, card_number_three, card_number_four)
);

CREATE TABLE likes (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users (id),
  card_design_id BIGINT NOT NULL REFERENCES card_designs (id),
  created_at TIMESTAMP NOT NULL,
  UNIQUE (user_id, card_design_id)
);

CREATE TABLE saved_cards (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users (id),
  card_design_id BIGINT NOT NULL REFERENCES card_designs (id),
  UNIQUE (user_id, card_design_id)
);

CREATE TABLE comments (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  comment VARCHAR NOT NULL,
  user_id BIGINT NOT NULL REFERENCES users (id),
  card_design_id BIGINT NOT NULL REFERENCES card_designs (id),
  created_at TIMESTAMP
);

INSERT INTO users (full_name, pass_word, email, created_at) VALUES ('Ikemefuna Onubogu', 'idontknow', 'ikem@gmail.com', NOW());
INSERT INTO users (full_name, pass_word, email, created_at) VALUES ('Chiamaka Onubogu', 'idontknow', 'amaka@gmail.com', NOW());
INSERT INTO users (full_name, pass_word, email, created_at) VALUES ('Chimdalu Onubogu', 'idontknow', 'dalu@gmail.com', NOW());

INSERT INTO card_designs (card_holder_name, card_number_one, card_number_two, card_number_three, card_number_four, expiration, color, background_image, cvv) VALUES ('Ikemefuna Onubogu', 4567, 9834, 7836, 6753, DATE ('2023-09-10'), '#7c3aed', 'https://media.istockphoto.com/id/1166651462/vector/cartoon-face-with-red-eyes-vector-illustration-for-anime-manga-in-japanese-style.jpg?s=612x612&w=0&k=20&c=KIyKkZte9nTt8Dv4gp_j7cnkhK3PP_UOiQm-dxmMpwA=', '834');
INSERT INTO card_designs (card_holder_name, card_number_one, card_number_two, card_number_three, card_number_four, expiration, color, background_image, cvv) VALUES ('Chiamaka Onubogu', 4567, 9634, 7936, 1753, DATE ('2023-11-10'), 'red', 'https://media.istockphoto.com/id/1166651462/vector/cartoon-face-with-red-eyes-vector-illustration-for-anime-manga-in-japanese-style.jpg?s=612x612&w=0&k=20&c=KIyKkZte9nTt8Dv4gp_j7cnkhK3PP_UOiQm-dxmMpwA=', '834');
INSERT INTO card_designs (card_holder_name, card_number_one, card_number_two, card_number_three, card_number_four, expiration, color, background_image, cvv) VALUES ('Chimdalu Onubogu', 4537, 9834, 7866, 6753, DATE ('2023-03-10'), '#7c3aed', 'https://media.istockphoto.com/id/1166651462/vector/cartoon-face-with-red-eyes-vector-illustration-for-anime-manga-in-japanese-style.jpg?s=612x612&w=0&k=20&c=KIyKkZte9nTt8Dv4gp_j7cnkhK3PP_UOiQm-dxmMpwA=', '834');

