import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Contexts/AppContext'
import ExpenseItem from './ExpenseItem';

const ExpenseList = () => {

  const { expenses } = useContext(AppContext);

  // 필터링 기능
  useEffect(() => {
    setFilteredExpenses(expenses);
  }, [expenses])

  const [filteredExpenses, setFilteredExpenses] = useState(expenses || []);
  
  const handleChange = (e) => {
    const searchResults = expenses.filter((expense) =>
      expense.name.toLowerCase().includes(e.target.value)
    )

    setFilteredExpenses(searchResults);
  }

  return (
    <>
      <input
        type='text'
        className='form-control'
        placeholder='검색하기...'
        onChange={handleChange}>
      </input>
      <ul className='list-group my-3'>
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            id={expense.id}
            name={expense.name}
            cost={expense.cost}>
          </ExpenseItem>
        ))}
      </ul>
    </>
  )
}

export default ExpenseList