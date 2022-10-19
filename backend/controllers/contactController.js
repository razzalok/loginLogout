const Contact = require("../models/contactModel");
const mongoose = require("mongoose");

// get all contact form data

const getAllContactData = async (req, res) => {
  const contacts = await Contact.find({}).sort({ createdAt: -1 });
  res.status(200).json(contacts);
};

const createContact = async (req, res) => {
  const { email, name, message, phone } = req.body;

  try {
    const contact = await Contact.create({ email, name, message, phone });
    res.status(200).json(contact);
  } catch (error) {
    res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  getAllContactData,
  createContact,
};
