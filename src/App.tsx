import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home, List, Detail } from '@/pages'
function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Switch>
          <Route exact path="/">
            <Header headerStyle="home" />
          </Route>
          <Route>
            <Header headerStyle="pages" />
          </Route>
        </Switch>

        <main className="container p-5 md:p-10 m-auto">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/scenicSpot" component={List} />
            <Route exact path="/scenicSpot/:spotsId" component={Detail} />
            <Redirect to="/" />
          </Switch>
        </main>

        <footer className="text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm">台灣旅遊導覽</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
