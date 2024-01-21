import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/Context";
import "./ExpenseList.css";

const ExpenseList = () => {
  // usecontext data
  let datactx = useContext(UserContext);
  
  // remove list when click on "x" button
  function onRemoveList(idx){
    let filetrData = datactx.getData().filter((item)=>{
      return item.id != idx;
    })
    datactx.setData(filetrData);
  }

  return (
    <div className="expenselist-container">
      <p>Expenses</p>
      {datactx.getData().length == 0 ? (
        <h3>Add Data To List . . . . .</h3>
      ) : (
        <div className="expenselist-lists">
          {datactx.getData().map((item) => {
            return (
              <div className="expenlist-list" key={item.id}>
                <p>{item.name}</p>
                <div className="expenlist-rupee">
                  <p>Rs.{item.cost}</p>
                  <button onClick={()=>onRemoveList(item.id)}>x</button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
