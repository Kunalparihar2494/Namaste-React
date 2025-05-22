import { createContext } from "react";


const UserContext = createContext({
    loggedInUser:"Deault User"
})

export default UserContext;