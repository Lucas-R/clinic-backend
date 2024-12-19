import { db } from "@utils/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

class GetUserService {
    async execute(id: string) {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);
    
        return docSnap.exists()
        ? { id, ...docSnap.data() }
        : { message: "No such document!" };
    }
}

export { GetUserService }