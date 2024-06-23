import { JSXElement } from "solid-js"
import "./index.scss"


const Timeline = (): JSXElement => {

  return <div class="tline">

    <div class="tline-event">
      <div class="tline-cell" aria-hidden="true"></div>
      <span class="tline-text">Personal Info</span>
    </div>


    <div class="tline-event">
      <div class="tline-cell" aria-hidden="true"></div>
      <span class="tline-text">Medical Info</span>
    </div>

  </div>

}


export default Timeline
