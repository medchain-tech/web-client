import { Assets } from "@/components/Assets"
import type { JSXElement, ParentProps } from "solid-js"

export const SignUpLayout = (props: ParentProps): JSXElement => {

  return (
    <>
      {props.children}
      <Assets />
    </>
  )

}
