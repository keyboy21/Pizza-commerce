import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from '@reduxjs/toolkit'
import { Pizza } from '../../Types/Pizza'
import { addToBasket } from '../../redux/pizza/PizzaSlice'
import { useAppDispatch } from '../../redux/hooks/selector'

type Props = {
  pizza: Pizza
}

const PizzaCard: FC<Props> = ({ pizza }) => {
  const [activeType, setactive] = useState(0)
  const [sizeActive, setsizeActive] = useState(0)
  const teypeNames = ['тонкое', 'традиционное']
  const dispatch = useAppDispatch()

  const handleType = (props: number) => {
    setactive(props)
  }

  const handleSize = (props: number) => {
    setsizeActive(props)
  }

  const AddtoCart = () => {
    dispatch(
      addToBasket({
        globalId: nanoid(),
        id: pizza.id,
        category: pizza.category,
        imageUrl: pizza.imageUrl,
        price: pizza.price,
        title: pizza.title,
        count: 1,
        type: activeType,
        size: pizza.sizes[sizeActive],
        pizzaPrice: pizza.price,
      })
    )
  }
  return (
    <div className="pizza-block">
      <h4 className="pizza-block__title">{pizza?.title}</h4>
      <Link to={`/pizza/${pizza.id}`}>
        <img className="pizza-block__image" src={pizza?.imageUrl} alt="Pizza" loading="lazy" />
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {pizza.types.map((typeId) => (
            <li key={typeId} onClick={() => handleType(typeId)} className={activeType === typeId ? 'active' : ''}>
              {teypeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {pizza.sizes.map((sizeId, index) => (
            <li onClick={() => handleSize(index)} key={sizeId} className={sizeActive === index ? 'active' : ''}>
              {sizeId} см.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {pizza.price} ₽</div>
        <div onClick={() => AddtoCart()} className="button button--outline button--add">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z" fill="white" />
          </svg>
          <span>Добавить</span>
          <i>1</i>
        </div>
      </div>
    </div>
  )
}

export default PizzaCard
