import React,{useContext} from 'react';
import { Transaction } from './Transaction';
import { GlobalContext } from '../Context/GlobalState'

export const TransactionList = () => {
   const {transctions} = useContext(GlobalContext);
    return (
        <>
        <h3>History</h3>
      <ul className="list">
      {transctions.map(transctions=>(<Transaction key={transctions.id} transctions={transctions}/> ))}  
      </ul> 
        </>
    )
}
