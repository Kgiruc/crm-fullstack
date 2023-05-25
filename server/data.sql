 -- CREATE DATABASE cru-server;

CREATE TABLE customers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    e_mail VARCHAR(255),
    phone_number VARCHAR(255),
    address VARCHAR(255),
    notes TEXT
);

CREATE TABLE contracts (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    name VARCHAR(255),
    date_sign DATE,
    date_end DATE,
    value DECIMAL(10, 2),
    description TEXT
);

CREATE TABLE invoices (
    id SERIAL PRIMARY KEY,
    customer_id INT REFERENCES customers(id),
    contract_id INT  REFERENCES contracts(id),
    date_issue DATE,
    date_due DATE,
    amount DECIMAL(10, 2),
    description TEXT,
    paid BOOLEAN
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    login VARCHAR(30),
    e_mail VARCHAR(50),
    password VARCHAR(30)
);

-- INSERT INTO customers (name, surname, e_mail, phone_number, address, notes) 
-- VALUES 
-- ('Anna', 'Kupaczewska', 'anna@gmail.com', '737705689', 'ul.Brzydka 32 Gdańsk', null);

-- INSERT INTO users (login, e_mail, password) 
-- VALUES 
-- ('Admin', 'Admin', crypt('Admin', gen_salt('bf', 4)));
