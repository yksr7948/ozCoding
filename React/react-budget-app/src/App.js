import './App.css';
import Budget from './Components/Budget';
import Remaining from './Components/Remaining';
import ExpenseTotal from './Components/ExpenseTotal';
import ExpenseList from './Components/ExpenseList';
import AddExpenseForm from './Components/AddExpenseForm';

function App() {
  return (
    <div className='container'>
      <h1 className='mt-3'>지출 계획</h1>
      <div className='row mt-3'>
        <div className='col-sm'>
          <Budget></Budget>
        </div>
        <div className='col-sm'>
          <Remaining></Remaining>
        </div>
        <div className='col-sm'>
          <ExpenseTotal></ExpenseTotal>
        </div>
      </div>

      <h3 className='mt-3'>지출들</h3>
      <div className='row'>
        <div className='col-sm'>
          <ExpenseList></ExpenseList>
        </div>
      </div>

      <h3 className='mt-3'>지출 추가</h3>
      <div className='row mt-3'>
        <div className='col-sm'>
          <AddExpenseForm></AddExpenseForm>
        </div>
      </div>
    </div>
  );
}

export default App;
