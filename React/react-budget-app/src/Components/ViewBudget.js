import React from 'react'
import { formatNumberToWon } from '../Utils'

const ViewBudget = ({budget, setIsEditing}) => {
  return (
    <>
      <span>예산 : {formatNumberToWon(budget)}</span>
      <button 
        type='button' 
        className='btn btn-primary' 
        onClick={() => setIsEditing(true)}
      >
        수정
      </button>
    </>
  )
}

export default ViewBudget