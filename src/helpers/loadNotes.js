import { collection, getDocs } from "firebase/firestore/lite";
import { fireBaseDB } from "src/firebase";

export const loadNotes = async (uid = "") => {
    const notes = [];
    if (!uid) throw new Error("Invalid uid");

    const collectionRef = collection(fireBaseDB, `${uid}/journal/notes`);
    const docs = await getDocs(collectionRef);

    docs.forEach((doc) => {
        notes.push({ id: doc.id, ...doc.data() });
    });

    return notes;
};
