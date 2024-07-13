import { Assets } from "@/components/Assets"
import { Show, mergeProps, type JSXElement, type ParentProps } from "solid-js"
import { SidebarInfo } from "../SignUpSidebar"
import "./index.scss"


export interface SignUpLayoutProps extends ParentProps {
  sidebar: JSXElement
  backButton?: {
    show: boolean
    onClick: () => void
  }
}

export const SignUpLayout = (props: SignUpLayoutProps): JSXElement => {


  const mergedProps = mergeProps({
    sidebar: SidebarInfo,
    backButton: {
      show: true,
    }
  }, props)


  const clickBackButton = () => {
    const buttonHasClick = Object.keys(mergedProps.backButton).includes("onClick")
    if (!buttonHasClick) return

    //@ts-expect-error Too much type-gymnastics
    const onClick = mergedProps.backButton.onClick as unknown as (() => void)
    onClick()
  }

  return (
    <>


      <div class="slayout">
        <section class="slayout-header">
          <img class="slayout-header-image" src="/logo.svg" alt="Logo" />
        </section>
        <section class="slayout-main">
          {mergedProps.sidebar}
        </section>
        <section class="slayout-children">


          <Show when={mergedProps.backButton.show}>
            <div class="slayout-back-bar">
              <button class="slayout-back-button" onClick={clickBackButton}>
                <svg class="slayout-back-icon" viewBox="0 0 24 24"><use href="#left"></use></svg>
              </button>
            </div>
          </Show>

          <div class="slayout-content">
            {props.children}
          </div>
        </section>
      </div>


      <Assets />
    </>
  )

}
