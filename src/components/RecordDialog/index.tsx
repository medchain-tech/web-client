import { type ParentProps, type JSXElement } from "solid-js";
import "./index.scss";
import { $openModal, ModalKey, closeModals } from "@/stores/modals";
import { useStore } from "@nanostores/solid"

interface Props extends ParentProps {
  title: string,
  modalKey: ModalKey
}

const RecordDialog = (props: Props): JSXElement => {

  const close = () => closeModals()
  const openModal = useStore($openModal)
  const clickOutside = (e: MouseEvent) => {
    if (e.target === e.currentTarget) close()
  }

  return <div id={props.modalKey} class="rdialog-wrapper" role="presentation" data-open={openModal() === props.modalKey} onClick={clickOutside}>
    <div role="dialog" class="rdialog">

      <div class="rdialog-title-bar">
        <h2 class="rdialog-title">Add Staff Detail</h2>

        <button class="rdialog-close" onClick={close}>
          <svg viewBox="0 0 24 24">
            <title>Close</title>
            <use href="#close"></use>
          </svg>
        </button>
      </div>

      <div class="rdialog-main">
        {props.children}
      </div>

    </div>
  </div>


}


export default RecordDialog
