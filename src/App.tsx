import { onCleanup, onMount, type JSXElement } from "solid-js"
import { Route, Router } from "@solidjs/router"
import HospitalLandingPage from "./pages/HospitalLandingPage"
import PatientsLandingPage from "./pages/PatientsLandingPage"
import HomeScreen1 from "./components/HomeScreen1"
import Navigation from "./components/Navigation"

const USER_BODY_NAV_CLASS = "user-nav"

function App(): JSXElement {
  onMount(() => document.body.classList.add(USER_BODY_NAV_CLASS))
  onCleanup(() => document.body.classList.remove(USER_BODY_NAV_CLASS))


  return (
    <>
      <header>
        <Navigation />
      </header>

      <HomeScreen1 />



      <Router>
        {/* <Route path="/" component={App} /> */}
        <Route path="/HospitalLandingPage" component={HospitalLandingPage} />
        <Route path="/PatientsLandingPage" component={PatientsLandingPage} />
      </Router>
      {/* <BaseNavigation />
      <main>{props.children}</main>
      <Assets /> */}
    </>
  )
}

export default App
