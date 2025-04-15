# 🗒️ Notes API

A simple RESTful API for managing notes, built with Node.js and MySQL.

## ✨ Features

- Create new notes
- Retrieve all notes
- Retrieve a specific note by ID
- Update notes
- Delete notes

## 🛠️ Requirements

- Node.js
- MySQL

## ⚙️ Environment Configuration

Create a `.env` file with the following format:

```env
APP_PORT=3000
HOST=localhost
USER=root
PASSWORD=yourpassword
DATABASE=notes_db
```

## 🧱 Database Schema

create the database and the tables in it by following these steps:

```sql query
CREATE DATABASE notes_db;
USE notes_db;

CREATE TABLE notes (
    id       BIGINT AUTO_INCREMENT PRIMARY KEY,
    title    TEXT     NOT NULL,
    datetime DATETIME NOT NULL,
    note     LONGTEXT NOT NULL
);
```

## 🚀 Getting Started

npm install

npm start

## 📡 API Endpoints

| Method | Endpoint     | Description               |
|--------|--------------|---------------------------|
| GET    | /notes       | Get all notes             |
| GET    | /notes/:id   | Get a specific note by ID |
| POST   | /notes       | Create a new note         |
| PUT    | /notes/:id   | Update an existing note   |
| DELETE | /notes/:id   | Delete a note             |


## 📁 .gitignore
Create a `.gitignore` file with the following format:

```
node_modules
.env
```
