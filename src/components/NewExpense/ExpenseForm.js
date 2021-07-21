import "./ExprenseForm.css";
import { useState } from "react";
const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: ''
  // })
  //change title
  const titleChangeHanlder = (e) => {
    setEnteredTitle(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle:e.target.value,
    // })
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: e.target.value };
    // })
  };

  //change amount
  const AmountChangeHanlder = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount:e.target.value,
    // })
  };

  //change date
  const DateChangeHanlder = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate:e.target.value,
    // })
  };

  //submitHandler
  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>{enteredTitle}</label>
          <input type="text" onChange={titleChangeHanlder} />
        </div>
        <div className="new-expense__control">
          <label>{enteredAmount}</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={AmountChangeHanlder}
          />
        </div>
        <div className="new-expense__control">
          <label>{enteredDate}</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={DateChangeHanlder}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
