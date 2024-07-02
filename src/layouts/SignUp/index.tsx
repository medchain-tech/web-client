import { Assets } from "@/components/Assets"
import type { JSXElement, ParentProps } from "solid-js"
import "./index.scss"


export const SignUpLayout = (props: ParentProps): JSXElement => {

  return (
    <>


      <div class="slayout">
        <section class="slayout-header">
          <img class="slayout-header-image" src="/logo.svg" alt="Logo" />
        </section>
        <section class="slayout-main">
          <strong class="slayout-main-strong">MedChain</strong>
          <h1 class="slayout-main-heading">Transforming Healthcare with <span class="slayout-main-heading-span">Secure EHR Solutions</span></h1>
          <p class="slayout-main-p">A transformative approach to managing healthcare records and monitor diseases enhancing healthcare delivery in Africa.</p>
          <img class="slayout-main-image" />
        </section>
        <section class="slayout-children">
          {props.children}
        </section>
      </div>


      <Assets />
    </>
  )

}
