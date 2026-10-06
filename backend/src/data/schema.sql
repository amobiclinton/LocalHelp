CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  city VARCHAR(120) DEFAULT 'Karu',
  district VARCHAR(120) DEFAULT 'Abuja',
  profile_photo_url TEXT,
  reputation INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE questions (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  category VARCHAR(80) NOT NULL,
  latitude DOUBLE PRECISION DEFAULT 9.03,
  longitude DOUBLE PRECISION DEFAULT 7.50,
  location_name VARCHAR(255) DEFAULT 'Karu',
  voice_url TEXT,
  photo_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE replies (
  id SERIAL PRIMARY KEY,
  question_id INT NOT NULL REFERENCES questions(id) ON DELETE CASCADE,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  text TEXT,
  voice_url TEXT,
  photo_url TEXT,
  map_url TEXT,
  helpful_votes INT DEFAULT 0,
  unhelpful_votes INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  reply_id INT NOT NULL REFERENCES replies(id) ON DELETE CASCADE,
  user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  vote_type VARCHAR(20) CHECK (vote_type IN ('helpful', 'not_helpful')),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (reply_id, user_id)
);

CREATE TABLE blocks (
  id SERIAL PRIMARY KEY,
  blocked_by_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  blocked_user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  reason TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_questions_category ON questions(category);
CREATE INDEX idx_questions_created_at ON questions(created_at DESC);
CREATE INDEX idx_replies_question_id ON replies(question_id);
