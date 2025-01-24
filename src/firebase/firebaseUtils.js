import { db } from "./firebaseConfig";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

/**
 * Get all documents from a Firestore collection.
 * @param {string} collectionName - The name of the Firestore collection.
 * @returns {Promise<Array>} - An array of documents.
 */
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error fetching documents:", error);
    throw error;
  }
};

/**
 * Add a new document to a Firestore collection.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {object} data - The data to add.
 * @returns {Promise} - The added document's reference.
 */
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID:", docRef.id);
    return docRef;
  } catch (error) {
    console.error("Error adding document:", error);
    throw error;
  }
};

/**
 * Update an existing document in Firestore.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to update.
 * @param {object} updatedData - The updated data.
 * @returns {Promise} - Resolves when the document is updated.
 */
export const updateDocument = async (collectionName, docId, updatedData) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    console.log("Document updated:", docId);
  } catch (error) {
    console.error("Error updating document:", error);
    throw error;
  }
};

/**
 * Delete a document from Firestore.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {string} docId - The ID of the document to delete.
 * @returns {Promise} - Resolves when the document is deleted.
 */
export const deleteDocument = async (collectionName, docId) => {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    console.log("Document deleted:", docId);
  } catch (error) {
    console.error("Error deleting document:", error);
    throw error;
  }
};
