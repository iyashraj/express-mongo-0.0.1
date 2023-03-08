const express = require("express");
const router = express.Router();
const {
  getContact,
  deleteContact,
  modifyContactPatch,
  modifyContactPut,
  createContact,
  getContactByID,
} = require("../controllers/contactController");

// longest way to write routes
// router.route("/").get(getContact);
// router.route("/:id").get(getContactByID);
// router.route("/").post(createContact);
// router.route("/:id").put(modifyContactPut);
// router.route("/:id").patch(modifyContactPatch);
// router.route("/:id").delete(deleteContact);


// shortest way to write routes
router.route("/").get(getContact).post(createContact);
router
  .route("/:id")
  .get(getContactByID)
  .put(modifyContactPut)
  .patch(modifyContactPatch)
  .delete(deleteContact)
module.exports = router;
