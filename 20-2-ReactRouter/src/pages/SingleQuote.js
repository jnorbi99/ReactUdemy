import { Fragment } from 'react'
import { useParams, Route } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_DATA = [
  { id: '12', author: 'me', text: 'Tanulni jo' },
  { id: '123', author: 'em', text: 'Tanulni joasdsasdsaads' },
]

const SingleQuote = () => {
  const param = useParams()

  const quote = DUMMY_DATA.find((quote) => quote.id === param.id)

  if (!quote) {
    return <p>Quote not found!</p>
  }

  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.id}/comment`}>
        <Comments />
      </Route>
    </Fragment>
  )
}

export default SingleQuote
