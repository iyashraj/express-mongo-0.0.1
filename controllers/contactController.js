// Async exception handler
const asyncHandler = require(`express-async-handler`);
const Contact = require("../models/contactModel");

//@desc get all contacts
//@route GET /api/contacts
//@access public

const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.send(contacts).status(200);
});

//@desc Create all contacts
//@route GET /api/contacts/:id
//@access public

const getContactByID = asyncHandler(async (req, res) => {
  res.send({ message: `get contact for ${req.params.id}` }).status(200);
});

//@desc Create all contacts
//@route POST /api/contacts
//@access public

const createContact = asyncHandler(async (req, res) => {
  console.log(`Request body is :`, req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.send(contact).status(201);
});

//@desc Update a contact
//@route PATCH /api/contacts/:id
//@access public
const modifyContactPatch = asyncHandler(async (req, res) => {
  res.send({ message: `Update all contacts for ${req.params.id}` }).status(200);
});

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const modifyContactPut = asyncHandler(async (req, res) => {
  res.send({ message: `update contacts for ${req.params.id}` }).status(200);
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  res.send({ message: `delete contacts for ${req.params.id}` }).status(200);
});

module.exports = {
  getContact,
  getContactByID,
  createContact,
  modifyContactPatch,
  modifyContactPut,
  deleteContact,
};
