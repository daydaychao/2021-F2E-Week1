import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Home, List, Detail } from '@/pages'
import { QueryParamProvider } from 'use-query-params'

function App() {
  const stringifyOptions = { encode: false }
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

        <main className="container p-5 md:p-10 mx-auto">
          <Switch>
            <QueryParamProvider ReactRouterRoute={Route} stringifyOptions={stringifyOptions}>
              <Route exact path="/" component={Home} />
              <Route exact path="/scenicSpot" component={List} />
              <Route exact path="/scenicSpot/:spotsId" component={Detail} />
              <Redirect to="/" />
            </QueryParamProvider>
          </Switch>
        </main>

        <footer className="text-center flex justify-center items-center bg-black text-white min-h-[40px] md:h-[60px] text-sm">台灣旅遊導覽 2021-11-05 08:59</footer>
      </div>
    </BrowserRouter>
  )
}

export default App
