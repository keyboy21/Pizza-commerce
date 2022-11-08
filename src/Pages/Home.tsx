import { FC, useState, useEffect } from 'react'
import { Pizza } from '../Types/Pizza'
import { useQuery } from '@tanstack/react-query'
import { getPizzas } from '../Api/GetPizza'
import Skeleton from '../components/PizzaBlock/Skeleton'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaCard from '../components/PizzaBlock'
import Pagination from 'rc-pagination'

const Home: FC = () => {
  const [page, setPage] = useState<number>(1)
  const [category, setCategory] = useState<number>(0)

  const onChange = (pages: number) => {
    setPage(pages)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { data, error, isLoading, isFetching } = useQuery<Pizza[]>(['pizza', page, category], () => getPizzas(page, category), { keepPreviousData: true })

  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories setCategory={setCategory} />
            <Sort />
          </div>
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

        {isFetching ? <span> Loading...</span> : null}
        <Pagination onChange={onChange} current={page} total={45} />
      </div>
    </>
  )
}

export default Home
