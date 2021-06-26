import React,{useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState'

export const Transaction = ({transctions}) => {
  const {deleteTransaction}  = useContext(GlobalContext)
  const sign = transctions.amount < 0 ? '-' : '+';
    return (
        <li className={transctions.amount < 0?'minus':'plus'}>
      {transctions.text} <span>{sign}${Math.abs(transctions.amount)}</span><button 
      onClick={()=>deleteTransaction(transctions.id)} className="delete-btn">x</button>
      </li>
    )
}
