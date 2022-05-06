import React, { useEffect, useState } from "react";
import { Auth, getAuth, onAuthStateChanged, User } from "firebase/auth";

const auth: Auth = getAuth();

export function useAuthentication() {
    const [user, setUser ] = useState<User>();
    
    useEffect(()=> {
        const unsubscribeFromStateChanged = onAuthStateChanged(auth, (user)=>{
            if (user) {
                //User is authenticated
                setUser(user);
            } else {
                //User is not authenticated
                setUser(undefined);
            }
        }); 
        return unsubscribeFromStateChanged; // close connection to firebase and unsuscribe the connection
    },[]);
    
    return {user};
  
}
