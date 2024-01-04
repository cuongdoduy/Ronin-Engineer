-- Create the mood ENUM type (without IF NOT EXISTS)
CREATE TYPE mood AS ENUM ('active', 'complete');

-- Create the orders table with the state column using the mood ENUM type and IF NOT EXISTS
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    state mood NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id)
);
