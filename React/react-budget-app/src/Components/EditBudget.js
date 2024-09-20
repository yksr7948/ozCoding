import React, { useState } from 'react'

const EditBudget = ({budget, setIsEditing, dispatch}) => {

  const [value, setValue] = useState(budget);

  const handleSaveClick = (value) => {
    dispatch({
      type: "SET_BUDGET",
      payload: value
    });
    setIsEditing(false);
  }

  return (
    <>
    <input
      required='required'
      type='number'
      className='form-control me-3'
      id='name'
      value={value}
      onChange={(e) => setValue(e.target.value)}
    >
    </input>
    <button
      type='button'
      className='btn btn-primary'
      style={{minWidth: 58}}
      onClick={() => handleSaveClick(value)}
    >
      수정
    </button>
    </>  
  )
}

export default EditBudget