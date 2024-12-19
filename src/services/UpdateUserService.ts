import { db } from "@utils/firebaseConfig";
import { doc, getDoc, serverTimestamp, updateDoc } from "firebase/firestore";

class UpdateUserService {
    async execute(id: string, data: unknown | any) {
        const userRef = doc(db, "users", id);
        const user = await getDoc(userRef);

        if (user.exists()) {
            await updateDoc(userRef, {
                ...data,
                updated_at: serverTimestamp(),
            });
        } else {
            return { message: "No such document!" };
        }
    }
}

export { UpdateUserService }