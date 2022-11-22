import Empty from '../assets/img/empty-cart.png'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>Корзина пустая 😕</h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={Empty} alt="Empty cart" />
      <Link to="/">
        <span className="button button--black">
          <span>Вернуться назад</span>
        </span>
      </Link>
    </div>
  )
}

export default EmptyCart
