import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home, List, Detail } from '@/pages'
import { QueryParamProvider } from 'use-query-params'
import { StarIcon } from '@heroicons/react/solid'

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen flex flex-col">
        <Switch>
          <Route exact path="/2021-F2E-Week1/home">
            <Header headerStyle="home" />
          </Route>
          <Route>
            <Header headerStyle="pages" />
          </Route>
        </Switch>

        <main className="container px-5 mb-20 mx-auto">
          <Switch>
            <QueryParamProvider ReactRouterRoute={Route}>
              <Route exact path="/2021-F2E-Week1/home" component={Home} />
              <Route exact path="/2021-F2E-Week1/scenicSpot" component={List} />
              <Route exact path="/2021-F2E-Week1/scenicSpot/:id" component={Detail} />
              <Redirect to="/2021-F2E-Week1/home" />
            </QueryParamProvider>
          </Switch>
        </main>

        <footer className="text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm">
          <div className="flex flex-row items-center mr-2">
            <StarIcon className="h-4 w-4" />
            台灣旅遊導覽
            <StarIcon className="h-4 w-4" />
          </div>
          <small>十萬塊的星之碎片製作出品</small>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
