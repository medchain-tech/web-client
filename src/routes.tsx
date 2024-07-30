import AppLayout from "./layouts/AppLayout";
import HospitalLandingPage from "./pages/HospitalLandingPage";
import App from "./App";
import { Setup } from "./pages/SignUp/Setup";
import { Start } from "./pages/SignUp/Start";
import { AccountType } from "./types";
import Verification from "./pages/SignUp/Verification";
import Profile from "./pages/SignUp/Profile";
import Hospital from "./pages/SignUp/Hospital";
import Home from "./pages/Home";
import PatientsLandingPage from "./pages/PatientsLandingPage";

// Custom types
const accountTypeFilters = {
  accountType: ["personal", "professional", "hospital"] as AccountType[],
};
const profileSetupFilters = {
  accountType: ["personal", "professional"] as AccountType[],
};

/**
 * Routes Configuration
 *
 */
const routes = {
  path: "",
  children: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/hospital",
          component: HospitalLandingPage,
        },
        {
          path: "/patients",
          component: PatientsLandingPage,
        },
        {
          path: "",
          component: App,
        },
      ],
    },
    {
      // Authentication Routes
      path: "/signup",
      children: [
        {
          path: "/",
          component: Setup,
        },
        {
          path: "/:accountType/start",
          matchFilters: accountTypeFilters,
          component: Start,
        },
        {
          path: "/:accountType/verify",
          matchFilters: accountTypeFilters,
          component: Verification,
        },
        {
          path: "/:accountType/profile",
          matchFilters: profileSetupFilters,
          component: Profile,
        },
        {
          path: "/hospital/needs",
          component: Hospital,
        },
      ],
    },
    {
      // Filtered Routes
      path: ":accountType/dashboard",
      matchFilters: accountTypeFilters,
      component: Home,
    },
  ],
};

export default routes;
