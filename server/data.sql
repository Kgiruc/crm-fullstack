 -- CREATE DATABASE cru_server;

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
  title VARCHAR(255),
  date_sign DATE,
  date_end DATE,
  value DECIMAL(10, 2),
  description TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
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

CREATE TABLE tasks (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
  due_date DATE,
  priority INT,
  status VARCHAR(50),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE outbound_deliveries (
  id SERIAL PRIMARY KEY,
  wz_number VARCHAR(20) NOT NULL,
  delivery_date DATE NOT NULL,
  from_company VARCHAR(100) NOT NULL,
  from_street VARCHAR(100) NOT NULL,
  from_postal_code VARCHAR(10) NOT NULL,
  from_city VARCHAR(100) NOT NULL,
  to_company VARCHAR(100) NOT NULL,
  to_street VARCHAR(100) NOT NULL,
  to_postal_code VARCHAR(10) NOT NULL,
  to_city VARCHAR(100) NOT NULL,
  receiving_person VARCHAR(100) NOT NULL,
  destination VARCHAR(100),
  order_number VARCHAR(100);
);

CREATE TABLE warehouse_inventory (
  id SERIAL PRIMARY KEY,
  item_code VARCHAR(50) NOT NULL,
  item_name TEXT NOT NULL,
  allocated_quantity DECIMAL NOT NULL,
  unit_of_measure VARCHAR(20),
  issued_quantity DECIMAL NOT NULL,
  unit_price DECIMAL NOT NULL,
  account_code VARCHAR(20),
  synthetic_account_code VARCHAR(20),
  stock_quantity DECIMAL NOT NULL
);


-- INSERT INTO customers (name, surname, e_mail, phone_number, address, notes) 
-- VALUES 
-- ('Anna', 'Kupaczewska', 'anna@gmail.com', '737705689', 'ul.Brzydka 32 Gdańsk', null);

-- INSERT INTO users (login, e_mail, password) 
-- VALUES 
-- ('Admin', 'Admin', crypt('Admin', gen_salt('bf', 4)));

-- INSERT INTO contracts (customer_id, name, date_sign, date_end, value, description) 
-- VALUES 
-- (2, 'Umowa Kupna-Sprzedaży', '2023-05-25', '2023-12-31', 1000.00, 'Opis umowy')

-- INSERT INTO invoices (customer_id, contract_id, date_issue, date_due, amount, description, paid) 
-- VALUES 
-- (2, 2, '2023-06-07', '2023-12-31', 1000.00, 'Opis umowy', true);

-- INSERT INTO tasks (title, description, due_date, priority, status) 
-- VALUES 
-- ('zadanie', 'wykonac', '2023-06-07', 1, 'zrobione');

-- INSERT INTO warehouse_inventory (item_code, item_name, allocated_quantity, unit_of_measure, issued_quantity, unit_price, account_code, synthetic_account_code, stock_quantity) 
-- VALUES 
-- ('321abc', 'przedmiot1', 100, 'szt', 100, 10, 'xxxxx', 'syn120', 10);
