import { FC, Suspense } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaCard from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import { Pizza } from '../Types/Pizza'
import { useQuery } from '@tanstack/react-query'
import { getPizza } from '../Api/GetPizza'

const Home: FC = () => {
  const { data, error, isLoading } = useQuery<Pizza[]>(['pizza'], getPizza)
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          {/* <Skeleton /> */}
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading ? (
              <>
                <Skeleton />
                <Skeleton />
                <Skeleton />
                <Skeleton />
              </>
            ) : error ? (
              'Error'
            ) : (
              data?.map((obj) => <PizzaCard pizza={obj} key={obj.id} />)
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
