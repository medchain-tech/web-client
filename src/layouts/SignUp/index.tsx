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

          <div class="slayout-back-bar">
            <button class="slayout-back-button">
              <svg class="slayout-back-icon" viewBox="0 0 24 24"><use href="#left"></use></svg>
            </button>
          </div>

          <div class="catype">

            <h2 class="catype-heading" data-slayout="heading">Choose an account</h2>
            <p class="catype-desc" id="catype-options">Choose user type and get started with Medchain</p>


            <div aria-labelledby="catype-options" role="radiogroup" class="catype-options-list">
              <button class="catype-option" aria-checked="true" role="radio">
                <strong class="catype-option-strong">Patient</strong>
                <p class="catype-option-text">Create patient/personal account</p>
              </button>
              <button class="catype-option" aria-checked="false" role="radio">
                <strong class="catype-option-strong">Healthcare Professional</strong>
                <p class="catype-option-text">Create healthcare professional account</p>
              </button>
              <button class="catype-option" aria-checked="false" role="radio">
                <strong class="catype-option-strong">Hospital administrator</strong>
                <p class="catype-option-text">Create hospital account</p>
              </button>
            </div>

            <button class="catype-button">Next</button>
          </div>

        </section>
      </div>


      <Assets />
    </>
  )

}
