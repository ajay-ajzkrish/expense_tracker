import React from 'react'

const Expense = ({text,money,id}) => {
    return (
        <div>
            <div>
                <li className={`${(money > 0)? "money plus": "money minus" }`}>{text} <span>
                    {money}</span></li>
            </div>
        </div>
    )
}

export default Expense
