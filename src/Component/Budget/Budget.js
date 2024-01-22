import {useContext,useCallback, useEffect, useState} from 'react'
import { UserContext } from '../../Context/Context'
import './Budget.css'
const Budget = () => {
  // usercontax data
  let datactx = useContext(UserContext);
  let data = datactx.getData();

  // useState for calculating exepenses
  let [totalExpense,setTotalExpense] = useState(0);
  let [remainingCost,setRemainingCost] = useState(0);

  // sum of all expenses
  useEffect(()=>{
    let sum = data.reduce((addValue,item)=>{
      return addValue+parseInt(item.cost);
    },0)  
    setTotalExpense(sum);
    setRemainingCost(2000-sum);
  },[datactx.getData()]);
  return (
    <div className='budget-container'>
      <div>Budget: <button className='rupee-btn'>Rs.2000</button></div>
      <div>Remaining:<button className='rupee-btn'> Rs.{remainingCost}</button></div>
      <div>Spent so far:<button className='rupee-btn'>{totalExpense}</button></div>
    </div>
  )
}

export default Budget
