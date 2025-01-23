This is a simple RESTful API built with Express.js for managing a collection of notes.

Features:

Create Notes:

POST /notes: Creates a new note and adds it to the in-memory collection.
Returns the created note and the updated list of notes.
Read Notes:

GET /notes: Retrieves all existing notes.
Update Notes:

PUT /notes/:id: Updates an existing note by its ID.
Returns the updated note and the updated list of notes.
Delete Notes:

DELETE /notes/:id: Deletes a note by its ID.
Returns the updated list of notes.
Important Notes:

In-Memory Storage: This API currently stores notes in memory.
Data Persistence: Note that the data will be lost when the server is stopped.
Error Handling: Basic error handling is implemented, but more robust error handling mechanisms can be added for production environments.
Getting Started:

Clone the repository:

Bash

git clone <repository-url>
Install dependencies:

Bash

npm install
Start the server:

Bash

npm start
API Endpoints:

Base URL: http://localhost:8000 (or the port you specify)

Create Note:

POST /notes
Get All Notes:

GET /notes
Update Note:

PUT /notes/:id
Delete Note:

DELETE /notes/:id
Example Usage:

Create a Note (using cURL):

Bash

curl -X POST -H "Content-Type: application/json" -d '{"title":"My Note", "content":"This is the content of my note"}' http://localhost:8000/notes
Get All Notes (using cURL):

Bash

curl http://localhost:8000/notes
Contributing:

Contributions are welcome! Please feel free to fork this repository and submit a pull request.
