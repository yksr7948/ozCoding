import { createContext, useReducer } from "react";

export const AppContext = createContext();

export const AppReducer = (state, action) => {
  switch(action.type) {
    // 지출 추가
    case 'ADD_EXPENSE':
      return{
        ...state,
        expenses: [...state.expenses, action.payload]
      }
    // 지출 삭제
    case "DELETE_EXPENSE":
      return{
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !==  action.payload
        )
      }
    // 예산 변경
    case "SET_BUDGET":
      return{
        ...state,
        budget: action.payload
      }

    default:
      return state;
  }
}

// 초기 값
const initialState = {
  budget: 30000,
  expenses: [
    { id: crypto.randomUUID(), name: "밥먹기", cost: 1000 },
    { id: crypto.randomUUID(), name: "카드비", cost: 3000 },
    { id: crypto.randomUUID(), name: "교통비", cost: 7000 }
  ]
}

export const AppContextProvider = (props) => {

  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider value={{
      expenses: state.expenses,
      budget: state.budget,
      dispatch
    }}>
      {props.children}
    </AppContext.Provider>
  )
}