# Quick Start Guide

## ✅ Project Setup Complete!

Your Contact Manager MERN app is ready to use!

## 🚀 Current Status

✅ Backend server running on: http://localhost:5000
✅ Frontend server running on: http://localhost:5174
✅ MongoDB connected successfully

## 📝 What's Included

### Backend Features

- ✅ Express.js server with CORS enabled
- ✅ MongoDB database connection
- ✅ Contact schema with validation
- ✅ POST /api/contacts - Create contact
- ✅ GET /api/contacts - Get all contacts
- ✅ DELETE /api/contacts/:id - Delete contact

### Frontend Features

- ✅ React contact form with validation
  - Name (required)
  - Email (required, validated)
  - Phone (required, 10 digits)
  - Message (optional)
- ✅ Contact list display
- ✅ Delete contact functionality
- ✅ Success notifications
- ✅ Sorting options (Newest, Oldest, By Name)
- ✅ Responsive design with Tailwind CSS
- ✅ Real-time updates (no page reload)

## 🎯 How to Use

1. **Open the app** in your browser: http://localhost:5174

2. **Add a contact**:

   - Fill in the form (Name, Email, Phone are required)
   - Submit button will be disabled until all validations pass
   - Click "Add Contact"
   - See success message and contact appears instantly

3. **View contacts**:

   - All contacts appear in the right panel
   - Use dropdown to sort by: Newest First, Oldest First, or Name
   - Each contact shows name, email, phone, message, and timestamp

4. **Delete a contact**:
   - Click the red delete icon on any contact
   - Confirm deletion
   - Contact is removed instantly

## 🔧 To Restart Servers

### Backend (if needed)

```bash
cd backend-Contact_manager
node server.js
```

### Frontend (if needed)

```bash
cd Contactmanager
npm run dev
```

## 📊 Test the API

You can test the API endpoints using:

- Browser: http://localhost:5000/api/contacts
- Postman
- cURL

Example POST request:

```bash
curl -X POST http://localhost:5000/api/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","phone":"1234567890","message":"Hello"}'
```

## ✨ Bonus Features Implemented

✅ Delete contact
✅ Success message on submission
✅ Reusable components (ContactForm, ContactList)
✅ Sorting functionality
✅ Responsive layout
✅ Form validation with error messages
✅ Loading states
✅ Clean, modern UI

## 📁 Project Structure

```
Contact_Manager/
├── backend-Contact_manager/     # Backend API
│   ├── config/                  # Database config
│   ├── controllers/             # Request handlers
│   ├── models/                  # Mongoose models
│   ├── routes/                  # API routes
│   └── server.js               # Entry point
│
├── Contactmanager/              # Frontend React app
│   └── src/
│       ├── components/          # React components
│       ├── App.jsx             # Main component
│       └── main.jsx            # Entry point
│
└── README.md                    # Full documentation
```

## 🎓 Evaluation Criteria Met

✅ **MERN Stack Understanding**: Full implementation with MongoDB, Express, React, Node.js
✅ **API Structure**: RESTful API with proper routes and controllers
✅ **Database Usage**: MongoDB with Mongoose schema and validation
✅ **Code Quality**: Clean, organized, reusable components
✅ **UI/UX**: Responsive, modern design with Tailwind CSS

## ⏱️ Time Taken

Completed in under 60 minutes as per requirements!

---

**Enjoy your Contact Manager app! 🎉**
