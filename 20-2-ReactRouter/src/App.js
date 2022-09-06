import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AllQuote from './pages/AllQuotes'
import NewQuote from './pages/NewQuote'
import NotFound from './pages/NotFound'
import SingleQuote from './pages/SingleQuote'

function App() {
  return (
    <Layout>
      <Switch>
        <Route path='/' exact>
          <Redirect to='/quotes' />
        </Route>
        <Route path='/quotes' exact>
          <AllQuote />
        </Route>
        <Route path='/quotes/:id'>
          <SingleQuote />
        </Route>
        <Route path='/new-quote'>
          <NewQuote />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Layout>
  )
}

export default App
