import React, { useContext, useState } from 'react'
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';
import { AppContext } from '../Contexts/AppContext';

const Budget = () => {

  const {budget, dispatch} = useContext(AppContext);

  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className='alert alert-primary p-3 d-flex align-items-center justify-content-between'>
      {isEditing ?
        <EditBudget dispatch={dispatch} setIsEditing={setIsEditing} budget={budget}></EditBudget>
        :
        <ViewBudget setIsEditing={setIsEditing} budget={budget}></ViewBudget>
      }
    </div>
  )
}

export default Budget