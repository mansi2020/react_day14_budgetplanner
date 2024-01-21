import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/Context";

const AddExpense = () => {
  // ----------------usecontext data-------------------
  let datactx = useContext(UserContext);
//   console.log("addexpense",datactx);

  // -------------usestate for inputs and userdata------------------
  let [inputName, setInputName] = useState("");
  let [inputCost, setInputCost] = useState("");

  // console.log("addexpense",datactx);
  // todo----------------add user information click on save button--------------------
  function onClickAddData() {
    let currentData = datactx.getData();
    // newobject of usedata
    let newObj = { id: currentData.length, name: inputName, cost: inputCost };
    datactx.setData([...currentData, newObj]);
    setInputName("");
    setInputCost("");
  }

  return (
    <div>
      <h2>Add Expenses</h2>
      <div className="add-expenses">
        <div className="add-expense">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
        </div>

        <div className="add-expense">
          <label htmlFor="">Cost</label>
          <input
            type="number"
            onChange={(e) => setInputCost(e.target.value)}
            value={inputCost}
          />
        </div>
      </div>
      <button onClick={onClickAddData}>Save</button>
    </div>
  );
};

export default AddExpense;
