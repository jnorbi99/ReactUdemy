import Card from '../UI/Card'
import classes from './Cart.module.css'
import CartItem from './CartItem'
import { useSelector } from 'react-redux'

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((selectedItem) => (
          <CartItem
            key={selectedItem.id}
            item={{
              id: selectedItem.id,
              title: selectedItem.name,
              quantity: selectedItem.quantity,
              total: selectedItem.totalPrice,
              price: selectedItem.price,
            }}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
