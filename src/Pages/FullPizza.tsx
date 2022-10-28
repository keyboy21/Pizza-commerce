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
    <div className="container" style={{textAlign:"center",paddingTop:"40px" }}>
      {isLoading ? (
        <Skeleton />
      ) : error ? (
        'Error'
      ) : (
        <>
          <h2 style={{marginBottom:"40px"}}>{data?.title}</h2>
          <img src={data?.imageUrl} />
          <h4>{data?.price} ₽</h4>
          <Link to="/">
            <button className="button button--outline button--add" style={{marginBottom:"40px"}}>
              <span>Назад</span>
            </button>
          </Link>
        </>
      )}
    </div>
  )
}

export default FullPizza
