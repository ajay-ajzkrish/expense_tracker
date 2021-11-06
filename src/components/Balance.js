import React from "react";

const Balance = ({income,out}) => {
  return (
    <>
      <h4 style={{color:"white"}}>Your Balance</h4>
      <h1 className="balance">$ {income + out}</h1>
    </>
  );
};

export default Balance;
