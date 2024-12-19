import { db } from "@utils/firebaseConfig";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

interface dataProps {
    name: string,
    email: string
}

class CreateUserService {
    async execute(data: dataProps) {
        const user = await addDoc(collection(db, "users"), {
            ...data,
            updated_at: null,
            created_at: serverTimestamp(),
        });
        return user.id;
    }
}

export { CreateUserService }