import { Component, For, mergeProps } from "solid-js";
import "./index.scss";

interface ButtonProps {
	text: string,
	iconSize?: number,
	iconLink: string
}

const data = {
	buttons: [
		{ text: "Message", iconLink: "message-dots" },
		{ text: "Notifications", iconLink: "bell" }
	]

} as const


const Button: Component<ButtonProps> = (props) => {
	const userProps = mergeProps(props, {
		iconSize: 24
	})

	return <button class="dheader-pbutton" title={userProps.text}>
		<svg viewBox={`0 0 ${userProps.iconSize} ${userProps.iconSize}`}>
			<use href={`#${userProps.iconLink}`}></use>
		</svg>
	</button>
}


const SearchForm: Component = () => {
	return <form class="dheader-search">
		<label class="dheader-slabel" for="dheader-search">
			<svg viewBox="0 0 24 24"><use href="#search"></use></svg>
		</label>
		<input class="dheader-sinput" id="dheader-search" name="dheader-search" type="search" placeholder="Search for anything..." />
	</form>
}

const User: Component = () => {
	return <details class="dheader-puser">
		<summary class="dheader-psummary">
			<img src="/user.png" alt="User Name" class="dheader-pimg" />

			<div class="dheader-pcontent">
				<strong class="dheader-pname">Wasiu Maleek</strong>
				<p class="dheader-ptype">Admin</p>
			</div>

			<svg role="presentation" class="dheader-pdown-arrow" viewBox="0 0 24 24"><use href="#down"></use></svg>
		</summary>

	</details>
}

export const Header: Component = () => {
	return <header class="dheader">
		<strong class="dheader-title">Dashboard</strong>

		<SearchForm />

		<div class="dheader-profile">
			<For each={data.buttons}>
				{(button, index) => <Button {...button} data-index={index()} />}
			</For>

			<User />
		</div>
	</header>




}
