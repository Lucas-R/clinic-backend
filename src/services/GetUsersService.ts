import { db } from "@utils/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

interface UsersProps {
  id: string,
}

class GetUsersService {
    async execute() {
        const users : UsersProps[] = [];
        const querySnapshot = await getDocs(collection(db, "users"));

        querySnapshot.forEach((doc) => {
            users.push({
                id: doc.id,
                ...doc.data(),
            });
        });
        return users;
    }
}

export { GetUsersService }