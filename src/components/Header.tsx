import { useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()
  let currentPath = location.pathname

  let isHome = true
  if (currentPath != '/') isHome = false

  console.log('[Header] isHome:', isHome)

  return (
    <>
      {isHome && (
        <header className="flex flex-col justify-center items-center h-[200px] home-top-image">
          <h1 className="text-white text-xl mb-5 md:text-4xl ">台灣旅遊景點導覽</h1>
          <h4 className="text-white text-base mb-5 md:text-2xl ">全台灣觀光景點報你知，交通餐飲旅宿通通有!</h4>
          <div>
            <input placeholder="地點...博物館...旅遊城市"></input>
            <button className="bg-green-light">搜尋</button>
          </div>
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
