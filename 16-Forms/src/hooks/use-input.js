import { useReducer } from 'react'

const initialInputState = {
  value: '',
  isTouched: false,
}

const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched,
    }
  }
  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true,
    }
  }
  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false,
    }
  }
  return initialInputState
}

const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  )

  /* const [enteredValue, setEnteredValue] = useState('')
  const [isTouched, setIsTouched] = useState(false) */

  const valueIsValid = validateValue(inputState.value)
  const hasError = !valueIsValid && inputState.isTouched

  const valueChangeHandler = (event) => {
    dispatch({ type: 'INPUT', value: event.target.value })
  }
  const inputBlurHandler = () => {
    dispatch({ type: 'BLUR' })
  }

  const reset = () => {
    /* setEnteredValue('')
    setIsTouched(false) */
    dispatch({ type: 'RESET' })
  }

  return {
    value: inputState.value,
    hasError,
    isValid: valueIsValid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput