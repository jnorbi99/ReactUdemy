//import { useState } from 'react'
import useInput from '../hooks/use-input'

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== '')
  //NAME
  //const nameInputRef = useRef()
  //const [enteredName, setEnteredName] = useState('')
  //const [enteredNameTouched, setEnteredNameTouched] = useState(false)
  //const [formIsValid, setFormIsValid] = useState(false)
  //const [enteredNameIsValid, setEnteredNameIsValid] = useState(false)

  //const enteredNameIsValid = enteredName.trim() !== ''
  //const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched

  /* const nameInputChangeHandler = (event) => {
    setEnteredName(event.target.value)
  } */

  /* å */
  //EMAIL
  //const emailInputRef = useRef()
  /* const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false)

  const enteredEmailIsValid = enteredEmail.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  const emailInputIsInvalid = !enteredEmailIsValid && enteredEmailTouched

  const emailInputChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }

  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true)
  } */
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) =>
    value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  )

  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault()

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return
    }
    //Megoldas 1
    //Instan validation eseten ezt hasnzaljuk
    console.log(enteredName)
    console.log(enteredEmail)
    //Megoldas 2
    //Ha egyszer kell akkor ezt hasznaljuk
    /* const enteredValue = nameInputRef.current.value
    console.log(enteredValue) */

    //nameInputRef.current.value = '' NOT IDEAL, DON'T MANIPULATE THE DOM
    //setEnteredName('')
    //setEnteredNameTouched(false)
    resetNameInput()
    resetEmailInput()
    //setEnteredEmail('')
    //setEnteredEmailTouched(false)
  }

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email address</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default SimpleInput
