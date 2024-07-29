import { onCleanup, onMount, ParentComponent } from "solid-js";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const USER_BODY_NAV_CLASS = "user-nav";

const AppLayout: ParentComponent = (props) => {
  /**
   * AppLayout - Render application subroutes with persistent header and footer
   *
   * @props: Object with nested routes content as children property(props.children)
   * Return: JSX component
   */
  onMount(() => document.body.classList.add(USER_BODY_NAV_CLASS));
  onCleanup(() => document.body.classList.remove(USER_BODY_NAV_CLASS));

  return (
    <>
      <header>
        <Navigation />
      </header>
      {/* Sub routes will be render here */}
      {props.children}
      <Footer />
    </>
  );
};

export default AppLayout;
