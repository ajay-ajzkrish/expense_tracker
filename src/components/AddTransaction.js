import React from "react";

const AddTransaction = ({
  expense,
  setExpense,
  inputText,
  setInputText,
  inputMoney,
  setInputMoney,
  income = { income },
  setIncome = { setIncome },
  out = { out },
  setOut = { setOut },
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
    console.log("Expense:", e.target.value);
  };
  const inputMoneyHandler = (e) => {
    setInputMoney(e.target.value);
    console.log("Expense money:", e.target.value);
  };

  const submitExpenseHandler = (e) => {
    e.preventDefault();
    if (inputMoney > 0) {
      setIncome(parseInt(income)+parseInt(inputMoney));
      console.log("in is ", income);
    } else if(inputMoney < 0) {
      setOut(parseInt(out) + parseInt(inputMoney,10));
      console.log("out is ", out);
    }
    setExpense([
      ...expense,
      { text: inputText, money: inputMoney, id: Math.random() * 1000 },
    ]);

    setInputText("");
    setInputMoney(0)
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label>Expense</label>
          <input
            value={inputText}
            onChange={inputTextHandler}
            type="text"
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label>
            Amount <br />
          </label>
          <input
            value={inputMoney}
            onChange={inputMoneyHandler}
            type="number"
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button onClick={submitExpenseHandler} className="btn">
          Add transaction
        </button>
      </form>
    </>
  );
};

export default AddTransaction;
