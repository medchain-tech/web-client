import { JSXElement } from "solid-js"
import "./index.scss"

const StatisticsInfoBox = (): JSXElement => {

  return <div class="sinfobox">
    <svg class="sinfobox-img" viewBox="0 0 24 24"><use href="#round-people"></use></svg>
    <div class="sinfobox-content">
      <dt class="sinfobox-name">Visiting Patients</dt>
      <dd class="sinfobox-number">3,000</dd>
    </div>
  </div>
}

export default StatisticsInfoBox
