CREATE DATABASE cru-server;

CREATE TABLE customers(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255),
    e_mail VARCHAR(255),
    phone_number VARCHAR(255),
    address VARCHAR(255),
    notes TEXT,
)