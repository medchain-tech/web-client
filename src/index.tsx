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
const Dashboard = lazy(() => import("./layouts/Dashboard/index"))
const UserLayout = lazy(() => import("./layouts/UserPage/index"))

const HospitalHome = lazy(() => import("./pages/HospitalHome/index"))

render(() =>
  <Router>

    <Route path="/signup" component={SignUpLayout}>
      <Route path="/" component={Individual}></Route>
      <Route path="/doctor" component={Doctor}></Route>
    </Route>

    <Route path="/" component={App}>
      <Route path="/" component={Home} />
      <Route path="/user" component={UserLayout}>
        <Route path="/dashboard" component={Dashboard}>
          <Route path="/hospital" component={HospitalHome} />
        </Route>

        <Route path="/records" component={DoctorPage} />
      </Route>
    </Route>

  </Router>,
  root!)
