import React from 'react';
import { createContext,useReducer } from 'react';
import AppReducer from './AppReducer';

const initialState = {
    transctions : [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    const [state,dispatch] = useReducer(AppReducer,initialState)

    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    }

    function addTransaction(transctions){
        dispatch({
            type:'ADD_TRANSACTION',
            payload:transctions
        });
    }

    return (<GlobalContext.Provider value = {{
        transctions : state.transctions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
        </GlobalContext.Provider>);
}