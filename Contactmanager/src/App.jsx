import { useState, useEffect } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contacts, setContacts] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/contacts");
      const data = await response.json();
      if (data.success) {
        setContacts(data.data);
      }
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  const handleContactSubmit = async (contactData) => {
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contactData),
      });

      const data = await response.json();

      if (data.success) {
        setContacts([data.data, ...contacts]);
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 3000);
        return true;
      } else {
        alert(data.message || "Error creating contact");
        return false;
      }
    } catch (error) {
      console.error("Error submitting contact:", error);
      alert("Error submitting contact");
      return false;
    }
  };

  const handleDeleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/contacts/${id}`,
          {
            method: "DELETE",
          }
        );

        const data = await response.json();

        if (data.success) {
          setContacts(contacts.filter((contact) => contact._id !== id));
        } else {
          alert(data.message || "Error deleting contact");
        }
      } catch (error) {
        console.error("Error deleting contact:", error);
        alert("Error deleting contact");
      }
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Contact Manager
          </h1>
          <p className="text-gray-600">Manage your contacts efficiently</p>
        </header>

        {showSuccess && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg text-center animate-fade-in">
            ✓ Contact added successfully!
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          <ContactForm onSubmit={handleContactSubmit} />
          <ContactList contacts={contacts} onDelete={handleDeleteContact} />
        </div>
      </div>
    </div>
  );
}

export default App;
