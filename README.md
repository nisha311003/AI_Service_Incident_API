
# HumanChain AI Safety Incident Log API

This project is a RESTFUL API built with **Node.js** and **Express** to log and manage hypothetical AI safety incidents, storing data in a **MongoDB** database.

## Tech Stack

- **Language**:- Javascript
- **Frameworks**:- Node.js with Express
- **Database**:- MongoDB
- **ODM**:- Mongoose

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/nisha311003/AI_Service_Incident_API.git
cd ai_safety_incident
```
### 2. Install Dependencies

```bash
npm install
```
### 3. Setup Environment Variables

Create a .env file
```bash
MONGODB_URI=
PORT=
```

---

## Running the project

To start the server
```bash
npm start
```

For development with auto-reload using nodemon:
```bash
npm run dev
```
---

## Seeding Sample Data (Optional)

To insert 2-3 sample data:
```bash
node seed.js
```
---

## API Endpoints

### 1. GET All Incidents
- **Method**:- GET
- **URL**:- /api
- **Response**:-
```bash
{
        "_id": "680b2874580b5e2f57844fe4",
        "title": "Bias in Hiring Algorithm",
        "description": "AI showed gender bias in candidate shortlisting.",
        "severity": "Medium",
        "reported_at": "2025-04-25T06:15:16.255Z",
        "__v": 0
    },
```

### 2. Log a new Incident
- **Method**:- POST
- **URL**:- /api
- **Body**:- JSON 
```bash
{
  "title": "New Incident Title",
  "description": "Detailed description",
  "severity": "Medium"
}
```
- **Response**:- 201 Created
```bash
{
    "title": "New Incident Title",
    "description": "Detailed description",
    "severity": "Medium",
    "_id": "680b8b7dc9d66dbdc99c314b",
    "reported_at": "2025-04-25T13:17:49.898Z",
    "__v": 0
}
```

### 3. GET Incident by Id
- **Method**:- GET
- **URL**:- /api/id
- **Response**:-
```bash
{
    "_id": "680b2874580b5e2f57844fe4",
    "title": "Bias in Hiring Algorithm",
    "description": "AI showed gender bias in candidate shortlisting.",
    "severity": "Medium",
    "reported_at": "2025-04-25T06:15:16.255Z",
    "__v": 0
}
```
### 4. Delete Incident by Id
- **Method**:- DELETE 
- **URL**:- /api/id
- **Response**:- 200 OK with confirmation message
```bash 
{
    "message": "Incident deleted successfully"
}
```
- **Response**:- 404 Not Found if Not

---

---

## Design Decision

- Used mongoose for schema validation and ORM.
- Seed data via seed.js helps quickly test API.
- Basic input validation ensures required fields and allowed severity values.

---

## Why using Javascript?
JavaScript provides a flexible and widely-supported runtime environment, making it an ideal choice for quick prototyping, small to medium-scale backend services, and projects that prioritize rapid iteration.

- Ease of setup with minimal tooling requirements.

- Wide community support and abundance of learning resources.

- Fast development cycles, ideal for initial versions or proof-of-concept applications.

- Seamless integration with the Node.js ecosystem and popular libraries.

---




