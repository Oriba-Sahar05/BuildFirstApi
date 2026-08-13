# Notes API

A simple RESTful API built with **Node.js** and **Express.js** that supports full CRUD (Create, Read, Update, Delete) operations for managing notes. Data is stored in memory (no database yet — that's coming next week).

This project was built as part of Week 3 of my internship, focused on backend fundamentals: REST API design, Express routing, and middleware.

## Tech Stack

- Node.js
- Express.js
- Postman (for testing)

## Installation & Setup

1. Clone this repository
   ```bash
   git clone https://github.com/Oriba-Sahar05/BuildFirstApi.git
   cd notes-api
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Run the server
   ```bash
   node server.js
   ```

4. The server will start on:
   ```
   http://localhost:3000
   ```

## API Endpoints

| Method | Endpoint       | Description                     |
|--------|----------------|----------------------------------|
| GET    | `/notes`       | Retrieve all notes              |
| GET    | `/notes/:id`   | Retrieve a single note by ID    |
| POST   | `/notes`       | Create a new note                |
| PUT    | `/notes/:id`   | Update an existing note by ID   |
| DELETE | `/notes/:id`   | Delete a note by ID              |

## Note Object Structure

```json
{
  "id": 1,
  "title": "Grocery list",
  "content": "Milk, eggs, bread"
}
```

## Example Request & Response

### Create a Note — `POST /notes`

**Request Body:**
```json
{
  "title": "Test",
  "content": "Testing"
}
```

**Response (201 Created):**
```json
{
  "id": 2,
  "title": "Test",
  "content": "Testing"
}
```

### Error Example — Empty Title

**Request Body:**
```json
{
  "title": "",
  "content": "abc"
}
```

**Response (400 Bad Request):**
```json
{
  "error": "Title is required"
}
```

## Status Codes Used

| Code | Meaning                              |
|------|----------------------------------------|
| 200  | Success (GET, PUT, DELETE)             |
| 201  | Resource created successfully (POST)   |
| 400  | Bad request (e.g. empty title)         |
| 404  | Resource not found                     |

## Project Structure

```
notes-api/
├── node_modules/
├── routes/
│   └── notes.js
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Testing

All endpoints were tested using **Postman**. A Postman collection is included in this repo for reference (if exported).

## Author

Your Name — Backend Development Internship, Week 3