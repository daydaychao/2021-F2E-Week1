import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home, List, Detail } from '@/pages'

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Header />

        <Route>
          <main className="container p-4 mx-auto">
            <Route path="/">
              <Home />
            </Route>
            <Route path="/list">
              <List />
            </Route>
            <Route path="/detail">
              <Detail />
            </Route>
          </main>
        </Route>

        <footer className="text-center flex justify-center items-center bg-black text-white sm:h-[40px] md:h-[60px]">台灣旅遊導覽</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
