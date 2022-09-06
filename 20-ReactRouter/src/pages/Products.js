import { Link } from 'react-router-dom'

const Products = () => {
  return (
    <section>
      <h1>The Products page</h1>
      <ul>
        <li>
          <Link to='/products/p1'>A book</Link>
        </li>
        <li>
          <Link to='/products/p2'>A Course</Link>
        </li>
        <li>
          <Link to='/products/p3'>A Something</Link>
        </li>
      </ul>
    </section>
  )
}

export default Products
