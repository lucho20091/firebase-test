import express from "express";
import {
  add_data_test,
  examples,
  read_data_test,
  update_data_test,
  update_object_data_test,
  update_array_data_test,
  delete_data_test,
  delete_field_data_test,
} from "../controllers/firestore_controller.js";
const router = express.Router();

router.get("/", examples);
router.get("/add", add_data_test);
router.get("/read", read_data_test);
router.get("/update", update_data_test);
router.get("/update-objects", update_object_data_test);
router.get("/update-arrays", update_array_data_test);
router.get("/delete", delete_data_test);
router.get("/delete-field", delete_field_data_test);

export default router;
