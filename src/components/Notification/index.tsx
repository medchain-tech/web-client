import { JSXElement, Show } from "solid-js";
import "./index.scss"

type NotificationType = "trends" | "health" | "disease"

const NOTIFICATION_IMAGES: Record<NotificationType, string> = {
  trends: "#notification-hash",
  health: "#notification-heart",
  disease: "#notification-virus"
}

export interface NotificationProps {
  type: NotificationType
  description?: string,
  date: string
}

const Notification = (props: NotificationProps): JSXElement => {
  const propsImage = () => NOTIFICATION_IMAGES[props.type]

  return <div class="notification" data-type={props.type}>
    <svg viewBox="0 0 256 256" class="notification-image">
      <use href={propsImage()}></use>
    </svg>
    <div class="notification-content">
      <strong class="notification-type">{props.type}</strong>
      <Show when={props.description && props.description > ""}>
        <p class="notification-description">{props.description}</p>
      </Show>
      <time datetime={props.date} class="notification-time">{props.date}</time>
    </div>
  </div>

}

export default Notification
