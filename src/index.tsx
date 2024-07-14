/* @refresh reload */
import { render } from 'solid-js/web'

import { Router, Route } from '@solidjs/router'
import './index.scss'
/* import { lazy } from 'solid-js'
import { SignUpLayout } from './layouts/SignUp'
import { Individual } from './pages/SignUp/Individual'
import { Doctor } from './pages/SignUp/Doctor'
*/
import App from './App'
import { Setup } from './pages/SignUp/Setup'
import { AccountType } from './types'
import { Start } from './pages/SignUp/Start'
import Verification from './pages/SignUp/Verification'
import Profile from './pages/SignUp/Profile'
import Hospital from './pages/SignUp/Hospital'

const root = document.getElementById('root')
/* const Home = lazy(() => import("./pages/Home/index"))
const DoctorPage = lazy(() => import("./pages/Doctor/index"))
const Dashboard = lazy(() => import("./layouts/Dashboard/index"))
const UserLayout = lazy(() => import("./layouts/UserPage/index"))

const HospitalHome = lazy(() => import("./pages/HospitalHome/index"))
 */

const accountTypeFilters = {
  accountType: ["personal", "professional", "hospital"] as AccountType[]
}
const profileSetupFilters = {
  accountType: ["personal", "professional"] as AccountType[]
}
render(() =>
  <Router>

    <Route path="/signup">
      <Route path="/" component={Setup} />
      <Route path="/:accountType/start" matchFilters={accountTypeFilters} component={Start} />
      <Route path="/:accountType/verify" matchFilters={accountTypeFilters} component={Verification} />
      <Route path="/:accountType/profile" matchFilters={profileSetupFilters} component={Profile} />
      <Route path="/hospital/needs" component={Hospital} />
    </Route>

    <Route path="/" component={App}>
      {/** <Route path="/" component={Home} />
      <Route path="/user" component={UserLayout}>
        <Route path="/dashboard" component={Dashboard}>
          <Route path="/hospital" component={HospitalHome} />
        </Route>

        <Route path="/records" component={DoctorPage} />
      </Route> **/}
    </Route>

  </Router>,

  root!)
