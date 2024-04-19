import React , {createContext, useState} from 'react';

//creating an AuthContext object to store and share authentication state
export const Authcontext = createContext();

const AuthcontextProvider =({children})=> {
    //define the initial state for user login status(isLoggedIn)
    const [isLoggedIn,setIsLoggedIn ] = useState(false);
    

    //Function to toggle the login status
    const changeAuthStatus = ()=> {
        setIsLoggedIn(!isLoggedIn);
    };
    

    //Providing the authentication state and function to change it to child components
    //through the AuthContext.Provider
    return(
        <Authcontext.Provider value={{isLoggedIn, changeAuthStatus}}>
            {children}
        </Authcontext.Provider>
    )
}

export default AuthcontextProvider;