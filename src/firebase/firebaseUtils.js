import { db } from "./src/firebase/firebaseConfig.js";
import { collection, getDocs, addDoc, doc, updateDoc, deleteDoc } from "firebase/firestore";

/**
 * Get all documents from a Firestore collection.
 * @param {string} collectionName - The name of the Firestore collection.
 * @returns {Promise<Array>} - An array of documents with their IDs.
 */
export const getAllDocuments = async (collectionName) => {
  try {
    const querySnapshot = await getDocs(collection(db, collectionName));
    return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error(`Error fetching documents from ${collectionName}:`, error);
    throw new Error(`Error fetching documents from ${collectionName}: ${error.message}`);
  }
};

/**
 * Add a new document to a Firestore collection.
 * @param {string} collectionName - The name of the Firestore collection.
 * @param {object} data - The data to add.
 * @returns {Promise} - Resolves with the added document's reference.
 */
export const addDocument = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID:", docRef.id);
    return docRef; // Returning the document reference (optional).
  } catch (error) {
    console.error(`Error adding document to ${collectionName}:`, error);
    throw new Error(`Error adding document to ${collectionName}: ${error.message}`);
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
    console.log(`Document updated with ID: ${docId}`);
  } catch (error) {
    console.error(`Error updating document in ${collectionName}:`, error);
    throw new Error(`Error updating document in ${collectionName}: ${error.message}`);
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
    console.log(`Document deleted with ID: ${docId}`);
  } catch (error) {
    console.error(`Error deleting document from ${collectionName}:`, error);
    throw new Error(`Error deleting document from ${collectionName}: ${error.message}`);
  }
};
