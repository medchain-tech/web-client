import { JSXElement } from "solid-js";
import "./index.scss";

export const SidebarInfo: JSXElement = <>
	<strong class="slayout-main-strong">MedChain</strong>
	<h1 class="slayout-main-heading">Transforming Healthcare with <span class="slayout-main-heading-span">Secure EHR Solutions</span></h1>
	<p class="slayout-main-p">A transformative approach to managing healthcare records and monitor diseases enhancing healthcare delivery in Africa.</p>
	<img class="slayout-main-image" />
</>


const Timeline = (): JSXElement => {
	return <>
		<ol class="stimeline">
			<li class="stimeline-li" data-checked="true">
				<span class="stimeline-event" data-checked="true">Sign Up</span>
				<svg class="stimeline-next" viewBox="0 0 24 24"><use href="#right"></use></svg>
			</li>


			<li class="stimeline-li">
				<span class="stimeline-event">Verification</span>
				<svg class="stimeline-next" viewBox="0 0 24 24"><use href="#right"></use></svg>
			</li>
			<li class="stimeline-li">
				<span class="stimeline-event">Setup Profile</span>
				<svg class="stimeline-next" viewBox="0 0 24 24"><use href="#right"></use></svg>
			</li>

		</ol>
	</>
}


export const SidebarTimeline: JSXElement = <>
	<Timeline />
	<h1 class="slayout-main-heading" id="slayout-timeline-sidebar-heading">Healthcare Services, <span class="slayout-main-heading-span">Your Health Records,</span> Anytime, Anywhere</h1>

</>
