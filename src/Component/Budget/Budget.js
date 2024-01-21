import {useContext,useCallback, useEffect, useState} from 'react'
import { UserContext } from '../../Context/Context'
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
      <div>Budget: Rs.2000</div>
      <div>Remaining: Rs.{remainingCost}</div>
      <div>Spent so far:{totalExpense}</div>
    </div>
  )
}

export default Budget
