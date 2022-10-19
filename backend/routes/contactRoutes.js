const express = require("express");
const router = express.Router();
const {
  getAllContactData,
  createContact,
} = require("../controllers/contactController");

const requireAuth = require("../middleware/requireAuth");
router.use(requireAuth);
// get all contact form data

router.get("/", getAllContactData);
router.post("/", createContact);

module.exports = router;
