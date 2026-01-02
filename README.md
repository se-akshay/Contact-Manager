# Contact Manager - MERN Stack

A full-stack contact management application built with MongoDB, Express.js, React.js, and Node.js.

## Features

✅ **Contact Form** with validation

- Required fields: Name, Email, Phone
- Optional message field
- Real-time validation with error messages
- Submit button disabled until form is valid

✅ **Backend API**

- POST `/api/contacts` - Create new contact
- GET `/api/contacts` - Fetch all contacts
- DELETE `/api/contacts/:id` - Delete contact

✅ **Database**

- MongoDB with Mongoose ODM
- Contact schema with validation

✅ **Display Contacts**

- Real-time updates without page reload
- Responsive card layout
- Shows contact details with timestamps

✅ **Bonus Features**

- Delete contact functionality
- Success message on contact creation
- Sorting options (Newest, Oldest, By Name)
- Reusable React components
- Clean, responsive UI with Tailwind CSS

## Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **State Management**: useState Hook

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (installed and running)
- npm or yarn

## Installation & Setup

### 1. Install MongoDB

If you don't have MongoDB installed, download it from [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Start MongoDB service:

```bash
# Windows
net start MongoDB

# Or run mongod directly
mongod
```

### 2. Backend Setup

```bash
cd backend-Contact_manager
npm install
```

Create a `.env` file (already created with default values):

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactmanager
```

Start the backend server:

```bash
npm start
# or for development with auto-restart
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd Contactmanager
npm install
```

Start the frontend development server:

```bash
npm run dev
```

Frontend will run on `http://localhost:5173` (default Vite port)

## Usage

1. Make sure MongoDB is running
2. Start the backend server (runs on port 5000)
3. Start the frontend development server (runs on port 5173)
4. Open your browser and navigate to `http://localhost:5173`
5. Fill in the contact form and submit
6. View your contacts in the list
7. Delete contacts as needed

## API Endpoints

### GET /api/contacts

Fetch all contacts

```json
Response:
{
  "success": true,
  "count": 2,
  "data": [...]
}
```

### POST /api/contacts

Create a new contact

```json
Request Body:
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Optional message"
}

Response:
{
  "success": true,
  "data": {...},
  "message": "Contact created successfully"
}
```

### DELETE /api/contacts/:id

Delete a contact by ID

```json
Response:
{
  "success": true,
  "message": "Contact deleted successfully"
}
```

## Project Structure

```
Contact_Manager/
├── backend-Contact_manager/
│   ├── config/
│   │   └── database.js          # MongoDB connection
│   ├── controllers/
│   │   └── contactController.js # Business logic
│   ├── models/
│   │   └── Contact.js           # Mongoose schema
│   ├── routes/
│   │   └── contactRoutes.js     # API routes
│   ├── .env                     # Environment variables
│   ├── server.js                # Entry point
│   └── package.json
│
└── Contactmanager/
    ├── src/
    │   ├── components/
    │   │   ├── ContactForm.jsx  # Form component
    │   │   └── ContactList.jsx  # List component
    │   ├── App.jsx              # Main app component
    │   ├── App.css              # Styles
    │   └── main.jsx             # Entry point
    └── package.json
```

## Validation Rules

- **Name**: Required, cannot be empty
- **Email**: Required, must be valid email format
- **Phone**: Required, must be 10 digits
- **Message**: Optional

## Features Demonstrated

✅ React Hooks (useState, useEffect)
✅ Component-based architecture
✅ Form validation
✅ RESTful API design
✅ MongoDB schema design
✅ Error handling
✅ Responsive design
✅ CRUD operations
✅ Async/await patterns
✅ Real-time UI updates

## Time Taken

Completed in under 60 minutes as per requirements.

## Notes

- The app uses local MongoDB instance
- CORS is enabled for frontend-backend communication
- Form validation happens on both client and server side
- Contacts are sorted by creation date (newest first) by default
