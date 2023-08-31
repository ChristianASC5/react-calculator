import { useReducer, useState } from 'react'
import './App.css'

const enum Operator {
  Default = '',
  Division = '÷',
  Multiplication = '*',
  Addition = '+',
  Subtraction = '-',
}

const enum ACTION_TYPE {
  ADD_DIGIT = 'add_digit',
  REMOVE_DIGIT = 'delete-digit',
  SET_OPERATION = 'set-operation',
  CLEAR = 'clear',
  EVALUATE = 'evaluate',
}

interface CalculatorAction {
  type: ACTION_TYPE;
  digit?: string;
  operator?: Operator;
}

interface CalculatorState {
  currentOperand: string;
  previousOperand: string;
  operation: string;
}

const initialCalculatorState: CalculatorState = {
  currentOperand: '0',
  previousOperand: '0',
  operation: Operator.Default,
}


const calculatorReducer = (state: CalculatorState, { type, ...symbol}: CalculatorAction) => {
  switch(type) {
    case ACTION_TYPE.ADD_DIGIT:
      return {
        ...state,
        currentOperand: (state.currentOperand === 'O' ? symbol.digit : state.currentOperand + symbol.digit) || ''
      }
  }
  return state;
}

function App() {
  // const [count, setCount] = useState(0)
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(calculatorReducer, initialCalculatorState);

  return (
    <div className='calculator-grid'>
      <div className='output'>
        <div className='previous-operand'> {previousOperand} {operation}</div>
        <div className='current-operand'> {currentOperand} </div>
      </div>
      <button className='span-two'>AC</button>
      <button>DEL</button>
      <button>÷</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>+</button>
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>-</button>
      <button>.</button>
      <button>0</button>
      <button className='span-two'>=</button>
    </div>

  )
}

export default App
