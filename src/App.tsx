import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home, List, Detail } from '@/pages'

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />
        <main className="container p-5 md:p-10 m-auto">
          <Route>
            <Route path="/">
              <Home />
            </Route>
            <Route path="/list">
              <Route path=":cityName">
                <List />
              </Route>
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
          </Route>
        </main>

        <footer className="text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm">台灣旅遊導覽</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
