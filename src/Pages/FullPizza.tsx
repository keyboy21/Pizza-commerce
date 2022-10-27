import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getOnePizza } from '../Api/GetPizza'
import { useParams } from 'react-router-dom'
import { Pizza } from '../Types/Pizza'
import Skeleton from '../components/PizzaBlock/Skeleton'

const FullPizza = () => {
  const { id } = useParams()
  const { data, error, isLoading } = useQuery<Pizza>(['onePizza'], () => getOnePizza(id),{keepPreviousData: true})

  return (
    <div className="container">
      {isLoading ? (
        <Skeleton />
      ) : error ? (
        'Error'
      ) : (
        <>
          <h2>{data?.title}</h2>
          <img src={data?.imageUrl} />
          <h4>{data?.price} ₽</h4>
          <Link to="/">
            <button className="button button--outline button--add">
              <span>Назад</span>
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default FullPizza
