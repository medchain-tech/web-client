import { For, JSXElement, mergeProps } from "solid-js";
import "./index.scss";

interface SidebarLinkProps {
	link: string
	iconSize?: number
	iconLink: string
	text: string
}


const links = {
	header: { text: "Overview", iconLink: "nav-home", link: "/" },

	medicalCenter: [
		{ text: "Appointments", iconLink: "nav-calendar", link: "/" },
		{ text: "Patients", iconLink: "nav-user", link: "/" },
		{ text: "Staff List", iconLink: "nav-users", link: "/" }
	],

	report: [
		{ text: "Disease Outbreak", iconLink: "nav-chart-line", link: "/" },
		{ text: "Outbreak Record", iconLink: "nav-virus", link: "/" },
	],

	footer: [
		{ text: "Support", iconLink: "nav-chat", link: "/" },
		{ text: "Settings", iconLink: "nav-settings", link: "/" },
	]
} as const




const SidebarLink = (props: SidebarLinkProps): JSXElement => {
	const userProps = mergeProps(props, {
		iconSize: 24,
		iconLink: "nav-home",
		text: "Overview",
		link: "/"
	})


	return <a href={userProps.link} data-slink="wrapper">
		<svg data-slink="icon"
			viewBox={`0 0 ${userProps.iconSize} ${userProps.iconSize}`}>
			<use href={`#${userProps.iconLink}`}></use>
		</svg>
		<p data-slink="text">{userProps.text}</p>
	</a>
}





export const Sidebar = (): JSXElement => {
	return <nav class="dsidebar">
		<img class="dsidebar-logo" src="/logo.svg" />

		<div class="dsidebar-hospital">
			<svg viewBox="0 0 24 24" class="dsidebar-hospital-logo">
				<use href="#nav-hospital"></use>
			</svg>
			<div class="dsidebar-hospital-content">
				<strong class="dsidebar-hospital-name">UCH Ibadan</strong>
				<p class="dsidebar-hospital-location">Queen Elizabeth Road II, 2...</p>
			</div>
		</div>

		<div class="dsidebar-linksection">
			<SidebarLink {...links["header"]} />

			<div class="dsidebar-linkgroup">
				<strong class="dsidebar-linkgroup-heading">Medical Center</strong>

				<ul class="dsidebar-link-list">
					<For each={links["medicalCenter"]}>
						{(link, index) => <li data-index={index()} class="dsidebar-link-li">
							<SidebarLink {...link} />
						</li>}
					</For>
				</ul>
			</div>

			<div id="dsidebar-linkgroup-report" class="dsidebar-linkgroup">
				<strong class="dsidebar-linkgroup-heading">Report</strong>

				<ul class="dsidebar-link-list">
					<For each={links["report"]}>
						{(link, index) => <li data-index={index()} class="dsidebar-link-li">
							<SidebarLink {...link} />
						</li>}
					</For>
				</ul>

			</div>

			<div id="dsidebar-linkgroup-settings" class="dsidebar-linkgroup">
				<ul class="dsidebar-link-list">
					<For each={links["footer"]}>
						{(link, index) => <li data-index={index()} class="dsidebar-link-li">
							<SidebarLink {...link} />
						</li>}
					</For>
				</ul>
			</div>


		</div>

	</nav>


}
