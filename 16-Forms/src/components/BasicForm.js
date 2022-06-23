import useMyInput from '../hooks/my-use-input'

const BasicForm = () => {
  const {
    value: enteredFirst,
    valueIsValid: firstIsValid,
    hasError: firstHasError,
    valueChangeHandler: firstChangeHandler,
    valueBlurHandler: firstBlurHandler,
    reset: firstReset,
  } = useMyInput((value) => value.trim() !== '')

  const {
    value: enteredLast,
    valueIsValid: lastIsValid,
    hasError: lastHasError,
    valueChangeHandler: lastChangeHandler,
    valueBlurHandler: lastBlurHandler,
    reset: lastReset,
  } = useMyInput((value) => value.trim() !== '')

  const {
    value: enteredEmail,
    valueIsValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset,
  } = useMyInput((value) => value.includes('@'))

  let formIsValid = false

  if (firstIsValid && lastIsValid && emailIsValid) {
    formIsValid = true
  }

  const submitHandler = (event) => {
    event.preventDefault()

    if (!formIsValid) {
      return
    }

    console.log(enteredFirst)
    console.log(enteredLast)
    console.log(enteredEmail)
    firstReset()
    lastReset()
    emailReset()
  }

  const firstClass = firstHasError ? 'form-control invalid' : 'form-control'
  const lastClass = lastHasError ? 'form-control invalid' : 'form-control'
  const emailClass = emailHasError ? 'form-control invalid' : 'form-control'

  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstClass}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirst}
            onChange={firstChangeHandler}
            onBlur={firstBlurHandler}
          />
        </div>
        <div className={lastClass}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLast}
            onChange={lastChangeHandler}
            onBlur={lastBlurHandler}
          />
        </div>
      </div>
      <div className={emailClass}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='email'
          id='name'
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  )
}

export default BasicForm
