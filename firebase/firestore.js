import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  doc,
  serverTimestamp,
  arrayRemove,
  arrayUnion,
  deleteDoc,
  deleteField,
} from "firebase/firestore";
import { firestore } from "./firebase.js";

const users_test_ref = collection(firestore, "users_test");

const dummy_data_add = {
  first: "Ada",
  last: "lovelace",
  born: 1815,
};

const random_doc_id = "0fJCT4YgcLedw31uDVYi";
const random_doc_id_2 = "2dxIfOLovFZIesz8ZYrj";
const random_doc_id_delete = "6RxKp8Yyu57Kk3ZQqJgl";
// addDoc
export const add_data = async () => {
  try {
    const docRef = await addDoc(users_test_ref, dummy_data_add);
    console.log(docRef.id);
    return docRef.id;
  } catch (e) {
    console.error(e);
  }
};
// getDocs
export const read_data = async () => {
  try {
    const querySnapshot = await getDocs(users_test_ref);
    let data = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      data.push({
        id: doc.id,
        ...doc.data(),
      });
    });
    return data;
  } catch (e) {
    console.error(e);
  }
};
// updateDoc
export const update_data = async () => {
  try {
    const data_ref = doc(firestore, "users_test", random_doc_id);
    const update = await updateDoc(data_ref, {
      last: "Whatever lol xd",
      timestamp: serverTimestamp(),
    });
    console.log(update);
    return true;
  } catch (e) {
    console.error(e);
  }
};
// updateDoc Objects
export const update_object_data = async () => {
  try {
    const data_ref = doc(firestore, "users_test", random_doc_id_2);
    // object notation
    await updateDoc(data_ref, {
      "favorites.color": "Red",
    });
    return true;
  } catch (e) {
    console.error(e);
  }
};
// updateDoc Arrays
export const update_array_data = async () => {
  try {
    const data_ref = doc(firestore, "users_test", random_doc_id_2);
    // to add
    await updateDoc(data_ref, {
      regions: arrayUnion("greater_virginia_2"),
    });
    // to remove
    await updateDoc(data_ref, {
      regions: arrayRemove("greater_virginia_2"),
    });
    return true;
  } catch (e) {
    console.error(e);
  }
};
// deleteDoc
export const delete_data = async () => {
  try {
    const data_ref = doc(firestore, "users_test", random_doc_id_delete);
    const delete_ref = await deleteDoc(data_ref);
    console.log(delete_ref);
    return true;
  } catch (e) {
    console.error(e);
  }
};
// deleteField for deleting fields using updateDoc
export const delete_field_data = async () => {
  try {
    const data_ref = doc(firestore, "users_test", random_doc_id_2);
    await updateDoc(data_ref, {
      favorites: deleteField(),
    });
    return true;
  } catch (e) {
    console.error(e);
  }
};
// in updateDoc there is a function called serverTimestamp
// which is a built-in way to show timestamps
