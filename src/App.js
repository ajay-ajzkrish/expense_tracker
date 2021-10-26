import "./App.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import IncomeExpenses from "./components/IncomeExpenses";
import TransactionList from "./components/TransactionList";
import AddTransaction from "./components/AddTransaction";

function App() {
  const [inputText, setInputText] = useState("");
  const [inputMoney, setInputMoney] = useState(0);
  const [expense, setExpense] = useState([]);
  const [income,setIncome] = useState(0);
  const [out,setOut] = useState(0);
  
  return (
    <div>
      <Header />
      <div className="container">
        <Balance income={income} out={out} />
        <IncomeExpenses income={income} out={out} />
        <TransactionList expense={expense} />
        <AddTransaction
          expense={expense}
          setExpense={setExpense}
          inputText={inputText}
          setInputText={setInputText}
          inputMoney={inputMoney}
          setInputMoney={setInputMoney}
          income={income}
          setIncome={setIncome}
          out={out}
          setOut={setOut}
        />
      </div>
    </div>
  );
}

export default App;
