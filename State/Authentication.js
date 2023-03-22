import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { useEffect } from "react";
import { auth } from '../config/firebase';




export const AuthenticationContext=createContext({})


const AuthenticationProvider=(props)=>{
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribeAuth = onAuthStateChanged(
            auth,
            async authenticatedUser => {
                setCurrentUser(authenticatedUser) 
        
            }
          );
  
      // clean up function to unsubscribe when component unmounts
      return unsubscribeAuth;
    }, []);
  


    return <AuthenticationContext.Provider value={{currentUser}}>
        {props.children}
    
    </AuthenticationContext.Provider>
}
export default AuthenticationProvider