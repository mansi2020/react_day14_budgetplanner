import "./App.css";
import { useState } from "react";
import Budget from "./Component/Budget/Budget";
import ExpenseList from "./Component/ExpenseList/ExpenseList";
import AddExpense from "./Component/AddExpense/AddExpense";
import { UserContext } from "./Context/Context";

function App() {
  // state to hold data
  const [data, setData] = useState([]);

  let initialData = JSON.parse(localStorage.getItem("myData")) || [];

  // usercontext value
  const contextVal = {
    getData: () => initialData,
    setData: (newData) => {
      localStorage.setItem("myData", JSON.stringify(newData));
      setData(newData);
    },
  };
  return (
    <div>
      <h1 className="heading">My Budget Planner</h1>
      <div className="App">
        <div className="App-container">
          <UserContext.Provider value={contextVal}>
            <Budget />
            <ExpenseList />
            <AddExpense />
          </UserContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;
