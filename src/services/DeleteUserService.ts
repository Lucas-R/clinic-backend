import { db } from "@utils/firebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";

class DeleteUserService {
    async execute(id: string, data: any) {
        await deleteDoc(doc(db, "users", id));

        return { message: `${id} deleted!` };
    }
}

export { DeleteUserService }