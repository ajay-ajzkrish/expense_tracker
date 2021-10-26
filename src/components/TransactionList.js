import React from "react";
import Expense from "./Expense";

const TransactionList = ({ expense }) => {
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
      {expense.map((item) => (
        <Expense
        text={item.text}
        money={item.money}
        key={item.id}/>
      ))}
      </ul>
    </div>
  );
};

export default TransactionList;
