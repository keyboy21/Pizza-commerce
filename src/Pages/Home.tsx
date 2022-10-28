import { FC, useState } from 'react'
import Categories from '../components/Categories'
import Sort from '../components/Sort'
import PizzaCard from '../components/PizzaBlock'
import Skeleton from '../components/PizzaBlock/Skeleton'
import { Pizza } from '../Types/Pizza'
import { useQuery } from '@tanstack/react-query'
import { getPizza } from '../Api/GetPizza'

const Home: FC = () => {
  const [page, setPage] = useState(1)

  const { data, error, isLoading, isPreviousData, isFetching } = useQuery<Pizza[]>(['pizza', page], () => getPizza(page), { keepPreviousData: true })
  return (
    <>
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
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
      </div>
      <span>Current Page: {page}</span>
      <button onClick={() => setPage((old) => Math.max(old - 1, 0))} disabled={page === 1}>
        Previous Page
      </button>
      <button
        onClick={() => {
          if (!isPreviousData && data?.length) {
            setPage((old) => old + 1)
          }
        }}
        // Disable the Next Page button until we know a next page is available
        disabled={isPreviousData || !data?.length}
      >
        Next Page
      </button>
      {isFetching ? <span> Loading...</span> : null}
    </>
  )
}

export default Home
