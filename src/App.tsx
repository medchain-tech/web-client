import { ComponentProps } from "solid-js"
import { BaseNavigation } from "./components/BaseNavigation"
import { Assets } from "./components/Assets"

function App(props:ComponentProps<any>) {

  return (
    <>
      <BaseNavigation />
      <main>{props.children}</main>
      <Assets />
    </>
  ) 
}

export default App
