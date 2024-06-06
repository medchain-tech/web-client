import type { JSXElement, ParentProps } from "solid-js"
import { BaseNavigation } from "./components/BaseNavigation"
import { Assets } from "./components/Assets"

function App(props: ParentProps): JSXElement {

  return (
    <>
      <BaseNavigation />
      <main>{props.children}</main>
      <Assets />
    </>
  ) 
}

export default App
