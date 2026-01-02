const express = require("express");
const router = express.Router();
const {
  createContact,
  getContacts,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
