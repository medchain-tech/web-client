import { type ParentProps, type JSXElement } from "solid-js";
import "./index.scss";

interface Props extends ParentProps {
  title: string
}

const RecordDialog = (props: Props): JSXElement => {

  return <div class="rdialog-wrapper" role="presentation" aria-hidden="false">
    <div role="dialog" class="rdialog">

      <div class="rdialog-title-bar">
        <h2 class="rdialog-title">Add Staff Detail</h2>

        <button class="rdialog-close">
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
