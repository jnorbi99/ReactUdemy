import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'Book0',
    description: 'Something',
  },
  {
    id: 'p2',
    price: 2,
    title: 'Book1',
    description: 'Something',
  },
  {
    id: 'p3',
    price: 4,
    title: 'Book2',
    description: 'Something',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            id={product.id}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
