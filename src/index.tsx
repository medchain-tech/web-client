/* @refresh reload */
import { render } from "solid-js/web";

import { Router } from "@solidjs/router";
import "./index.scss";
import routes from "./routes";

const root = document.getElementById("root");

render(
  () => (
    // <Router>
    //   <Route path="/" component={AppLayout}>
    //     {/* <Route path="/home" component={Home} /> */}
    //     {/* <Route path="/user" component={UserLayout}>
    //       <Route path="/dashboard" component={Dashboard}>
    //         <Route path="/hospital" component={HospitalHome} />
    //       </Route>

    //       <Route path="/records" component={DoctorPage} />
    //     </Route> */}
    //     <Route path="/hospital" component={HospitalLandingPage} />
    //   </Route>
    // </Router>
    <Router>{routes}</Router>
  ),

  root!
);
