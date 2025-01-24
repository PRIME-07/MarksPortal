import { getFirestore, doc, getDoc } from "firebase/firestore";

const fetchMarks = async (studentId) => {
    try {
        const db = getFirestore();
        const docRef = doc(db, "marks", studentId); // Adjust "marks" to your Firestore collection name
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data(); // Returns marks object for the student
        } else {
            throw new Error("No such document!");
        }
    } catch (error) {
        console.error("Error fetching marks:", error);
        throw error;
    }
};

export default fetchMarks;
