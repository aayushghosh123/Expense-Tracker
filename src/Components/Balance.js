import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Balance = () => {
    const {transctions} = useContext(GlobalContext);

    const amounts = transctions.map(transctions => transctions.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    return (
       <h2>
        <h4>Your Balance</h4>
        <h1>${total}</h1>
       </h2>
    );
}
