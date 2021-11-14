import { Link, useHistory } from 'react-router-dom'
import { SearchIcon } from '@heroicons/react/solid'
import { Props } from 'react'

type HomeProps = {
  headerStyle?: string
}
export function Header({ headerStyle }: HomeProps) {
  const history = useHistory()
  let isHome = true
  if (headerStyle != 'home') isHome = false

  const handleKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      e.preventDefault()
      handleSearchAndGo()
    }
  }

  const handleSearchAndGo = () => {
    const textValue = (document.getElementById('searchInput') as HTMLInputElement).value
    history.push(`/2021-F2E-Week1/scenicSpot/?city=allCity&text=${textValue}`)
  }

  return (
    <>
      {isHome && (
        <header className="flex flex-col justify-center px-4 items-center min-h-[330px] md:min-h-[590px] home-top-image">
          <h1 className="text-white text-3xl md:text-4xl mb-5">台灣旅遊景點導覽</h1>
          <h4 className="text-white text-base md:text-3xl mb-5">全台灣觀光景點報你知，交通餐飲旅宿通通有!</h4>
          <div className="flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black">
            <SearchIcon className="h-10 w-10" />
            <input id="searchInput" className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市" onKeyPress={handleKeyEnter}></input>
          </div>
          <button className="btn-green w-[170px]" type="button" onClick={handleSearchAndGo}>
            搜尋
          </button>
        </header>
      )}

      {!isHome && (
        <header className="bg-green-light p-3">
          <Link to="/2021-F2E-Week1/home">
            <div className="mx-auto container px-5 md:px-10 font-bold">
              <h1 className="text-2xl mb-2">台灣旅遊景點導覽</h1>
              <h4 className="text-sm md:text-md ">全台灣觀光景點報你知，交通餐飲旅宿通通有!</h4>
            </div>
          </Link>
        </header>
      )}
    </>
  )
}
