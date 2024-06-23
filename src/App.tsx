import { onCleanup, onMount, type JSXElement, type ParentProps } from "solid-js"
import { BaseNavigation } from "./components/BaseNavigation"
import { Assets } from "./components/Assets"

const USER_BODY_NAV_CLASS = "user-nav"

function App(props: ParentProps): JSXElement {
  onMount(() => document.body.classList.add(USER_BODY_NAV_CLASS))
  onCleanup(() => document.body.classList.remove(USER_BODY_NAV_CLASS))


  return (
    <>
      <BaseNavigation />
      <main>{props.children}</main>
      <Assets />
    </>
  )
}

export default App
