import { useLocation } from 'react-router-dom'
import { SearchIcon } from '@heroicons/react/solid'
import { Props } from 'react'

type HomeProps = {
  headerStyle?: string
}
export function Header({ headerStyle }: HomeProps) {
  let isHome = true
  if (headerStyle != 'home') isHome = false

  console.log('[Header] useLocation:', useLocation())

  return (
    <>
      {isHome && (
        <header className="flex flex-col justify-center px-4 items-center min-h-[330px] md:min-h-[590px] home-top-image">
          <h1 className="text-white text-3xl md:text-4xl mb-5  ">台灣旅遊景點導覽</h1>
          <h4 className="text-white text-base md:text-3xl mb-5 ">全台灣觀光景點報你知，交通餐飲旅宿通通有!</h4>
          <div className="flex flex-row items-center bg-white px-2 h-[50px] md:h-[75px] w-3/4 rounded-lg mb-4 border-2 md:border-4 border-black">
            <SearchIcon className="h-10 w-10" />
            <input className="h-full w-full p-5" placeholder="地點...博物館...旅遊城市"></input>
          </div>
          <button className="rounded bg-green-light h-[40px] w-[170px] font-bold text-lg">搜尋</button>
        </header>
      )}

      {!isHome && (
        <header className="flex flex-col items-center h-[99px] bg-green-light">
          <h1>台灣旅遊景點導覽</h1>
          <h4>全台灣觀光景點報你知，交通餐飲旅宿通通有!</h4>
        </header>
      )}
    </>
  )
}
