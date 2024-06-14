/* @refresh reload */
import { render } from 'solid-js/web'

import { Router, Route } from '@solidjs/router'
import './index.scss'
import { lazy } from 'solid-js'
import { SignUpLayout } from './layouts/SignUp'
import { Individual } from './pages/SignUp/Individual'
import { Doctor } from './pages/SignUp/Doctor'
import App from './App'

const root = document.getElementById('root')
const Home = lazy(() => import("./pages/Home/index"))
const DoctorPage = lazy(() => import("./pages/Doctor/index"))

render(() =>
  <Router>

    <Route path="/signup" component={SignUpLayout}>
      <Route path="/" component={Individual}></Route>
      <Route path="/doctor" component={Doctor}></Route>
    </Route>

    <Route path="/" component={App}>
      <Route path="/" component={Home} />
      <Route path="/records" component={DoctorPage} />
    </Route>

  </Router>,
  root!)
