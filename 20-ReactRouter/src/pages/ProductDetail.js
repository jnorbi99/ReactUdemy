import { useParams } from 'react-router-dom'

const ProductDetail = () => {
  const param = useParams()

  return (
    <section>
      <h1>The ProductDetail page</h1>
    </section>
  )
}

export default ProductDetail
