import {
  add_data,
  read_data,
  update_data,
  update_object_data,
  update_array_data,
  delete_data,
  delete_field_data,
} from "../firebase/firestore.js";

export const add_data_test = async (req, res) => {
  try {
    const docId = await add_data();
    console.log("docId", docId);
    res.send(`data added properly, doc id is, ${docId}`);
  } catch (e) {
    res.status(404).send("error xD");
  }
};

export const read_data_test = async (req, res) => {
  try {
    const data_response = await read_data();
    res.send(data_response);
  } catch (e) {
    res.status(400).json("error lol");
  }
};

export const update_data_test = async (req, res) => {
  try {
    const data_response = await update_data();
    res.send(data_response);
  } catch (e) {
    res.status(400).json("error lol");
  }
};

export const update_object_data_test = async (req, res) => {
  try {
    const data_response = await update_object_data();
    res.send(data_response);
  } catch (e) {
    res.status(400).json("error lol");
  }
};

export const update_array_data_test = async (req, res) => {
  try {
    const data_response = await update_array_data();
    res.send(data_response);
  } catch (e) {
    res.status(400).json("error lol");
  }
};

export const delete_data_test = async (req, res) => {
  try {
    const data_response = await delete_data();
    res.send(data_response);
  } catch (e) {
    res.status(400).json("error lol");
  }
};

export const delete_field_data_test = async (req, res) => {
  try {
    const data_response = await delete_field_data();
    res.send(data_response);
  } catch (e) {
    res.status(400).json("error lol");
  }
};

export const examples = async (req, res) => {
  res.json({
    message: [
      "/add to add data using addDoc",
      "/read to read all using getDocs",
      "/update to update using updateDoc",
      "/update-objects to update objects using updateDoc",
      "/update-arrays to update arrays using updateDoc and arrayUnion or arrayRemove",
      "/delete to delete doc using deleteDoc",
      "/delete-field to delete a field using updateDoc and deleteField functions",
    ],
  });
};
