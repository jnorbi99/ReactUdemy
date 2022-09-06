import QuoteForm from '../components/quotes/QuoteForm'
import { useHistory } from 'react-router-dom'

const NewQuote = () => {
  const history = useHistory()
  const AddQuoteHandler = () => {
    history.push('/quotes')
  }
  return <QuoteForm onAddQuote={AddQuoteHandler} />
}

export default NewQuote
