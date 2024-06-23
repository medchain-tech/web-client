import { JSXElement, ParentProps, mergeProps } from "solid-js";
import "./index.scss";

interface Props extends ParentProps {
  type: HTMLButtonElement["type"],
}

const DEFAULT_BUTTON_PROPS: Props = {
  type: "button",
}

const CustomButton = (props: Props): JSXElement => {
  const buttonProps = mergeProps(DEFAULT_BUTTON_PROPS, props)

  return <button class="custom-button" type={buttonProps.type}>
    {buttonProps.children}
  </button>

}


export default CustomButton
