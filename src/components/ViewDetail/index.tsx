import { type JSXElement } from "solid-js"
import RecordDialog from "../RecordDialog"
import "./index.scss"

const ViewDetail = (): JSXElement => {
  return <RecordDialog modalKey="view-more" title="More..">
    <section class="vdetail">

      <div class="vdetail-user">
        <img src="" alt="John Sawyer" class="vdetail-user-image" />
        <strong class="vdetail-user-name">John Sawyer</strong>
        <p class="vdetail-user-location">Lagos, Nigeria</p>
      </div>


      <dl class="vdetail-detail-list">
        <dt class="vdetail-detail-title">Medical History</dt>
        <dd class="vdetail-detail-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, eum, officiis facere dolorum quaerat repellat harum temporibus nam modi optio cumque facilis numquam possimus minus voluptas? Similique ad vero dignissimos.</dd>

        <dt class="vdetail-detail-title">Medical History</dt>
        <dd class="vdetail-detail-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, eum, officiis facere dolorum quaerat repellat harum temporibus nam modi optio cumque facilis numquam possimus minus voluptas? Similique ad vero dignissimos.</dd>
      </dl>





      <dl class="vdetail-stats">
        <div class="vdetail-stat">
          <dt class="vdetail-stat-title">Disease</dt>
          <dd class="vdetail-stat-value">Hypertenstion</dd>
        </div>

        <div class="vdetail-stat">
          <dt class="vdetail-stat-title">Disease</dt>
          <dd class="vdetail-stat-value">Hypertenstion</dd>
        </div>


        <div class="vdetail-stat">
          <dt class="vdetail-stat-title">Disease</dt>
          <dd class="vdetail-stat-value">Hypertenstion</dd>
        </div>

        <div class="vdetail-stat">
          <dt class="vdetail-stat-title">Disease</dt>
          <dd class="vdetail-stat-value">Hypertenstion</dd>
        </div>

        <div class="vdetail-stat">
          <dt class="vdetail-stat-title">Disease</dt>
          <dd class="vdetail-stat-value">Hypertenstion</dd>
        </div>

        <div class="vdetail-stat">
          <dt class="vdetail-stat-title">Disease</dt>
          <dd class="vdetail-stat-value">Hypertenstion</dd>
        </div>
      </dl>



    </section>
  </RecordDialog>
}


export default ViewDetail
