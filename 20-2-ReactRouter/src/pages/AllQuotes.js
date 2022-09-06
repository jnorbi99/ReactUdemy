import QuoteList from '../components/quotes/QuoteList'

const DUMMY_DATA = [
  { id: '12', author: 'me', text: 'Tanulni jo' },
  { id: '123', author: 'em', text: 'Tanulni joasdsasdsaads' },
]

const AllQuote = () => {
  return <QuoteList quotes={DUMMY_DATA} />
}

export default AllQuote
