import EmptyCar from '../components/EmptyCart'
import HaveCart from '../components/HaveCart'
import { useAppSelector } from '../redux/hooks/selector'

const Cart = () => {

  const TotalPizza = useAppSelector((state) => state.BasketReducer.TotalPizza)

  return (
    <div className="content">
      <div className="container container--cart">{TotalPizza ? <HaveCart /> : <EmptyCar />}</div>
    </div>
  )
}

export default Cart
