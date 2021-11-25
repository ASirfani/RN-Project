
import React,{createContext, useReducer} from 'react';
import auth from './reducers/auth'; 
import contacts from './reducers/contacts'
import authInitailState from './intitalStates/authInitailState'
import contactsIntailState from './intitalStates/contactsIntailState'

export const GlobleContext = createContext({});

const GlobalProvider = ({children})=>{
    
    const [authState , authDispatch] = useReducer (auth,authInitailState);
    
    const [contactState , contactDispatch] = useReducer (contacts,contactsIntailState);

    return <GlobleContext.Provider value={{authState,authDispatch,contactState,contactDispatch}}>
        {children}
    </GlobleContext.Provider>;



}

export default GlobalProvider;