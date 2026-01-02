const Contact = require("../models/Contact");

// @desc    Create new contact
// @route   POST /api/contacts
// @access  Public
const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Please provide name, email, and phone",
      });
    }

    // Create contact
    const contact = await Contact.create({
      name,
      email,
      phone,
      message: message || "",
    });

    res.status(201).json({
      success: true,
      data: contact,
      message: "Contact created successfully",
    });
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error creating contact",
    });
  }
};

// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Public
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching contacts",
    });
  }
};

// @desc    Delete contact
// @route   DELETE /api/contacts/:id
// @access  Public
const deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        message: "Contact not found",
      });
    }

    await contact.deleteOne();

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      success: false,
      message: "Error deleting contact",
    });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};
