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
              <Route path="/2021-F2E-Week1/scenicSpot/:id" component={Detail} />
              {/* <Redirect to="/2021-F2E-Week1/home" /> */}
            </QueryParamProvider>
          </Switch>
        </main>

        <footer className="flex flex-col justify-center items-center bg-black text-white text-center text-sm p-4">
          <div>台灣旅遊導覽</div>
          <small className="flex flex-row items-center">
            <StarIcon className="h-2 w-2" />
            十萬塊的星之碎片製作出品 <StarIcon className="h-2 w-2" />
          </small>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
