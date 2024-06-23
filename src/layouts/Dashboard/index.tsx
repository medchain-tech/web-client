import { type JSXElement } from "solid-js"
import "./index.scss"
import Notification, { NotificationProps } from "@/components/Notification"

const demoNotification: NotificationProps = {
  "type": "trends",
  "date": "2mins ago",
  "description": "Lorem ipsum intel"
}

const Dashboard = (): JSXElement => {

  return <div class="dboard">

    <div class="dboard-main"></div>
    <div class="dboard-sidebar">
      <div class="dboard-notifications">
        <div class="dboard-notifications-header">
          <svg viewBox="0 0 256 256"><use href="#bell"></use></svg>

          <h3>Notifications</h3>
        </div>

        <ul class="dboard-notifications-list">
          <li class="dboard-notifications-li">
            <Notification {...demoNotification} />
          </li>
          <li class="dboard-notifications-li">
            <Notification {...demoNotification} />
          </li>
          <li class="dboard-notifications-li">
            <Notification {...demoNotification} />
          </li>
          <li class="dboard-notifications-li">
            <Notification {...demoNotification} />
          </li>
        </ul>



      </div>

    </div>


  </div>





}


export default Dashboard
