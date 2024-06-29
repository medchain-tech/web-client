import { ParentProps, type JSXElement } from "solid-js";
import "./index.scss";



const UserPage = (props: ParentProps): JSXElement => {

	return <section class="upage">
		<div class="upage-header">
			<h2 class="upage-header-message">Welcome, Adeola</h2>
			<form class="upage-header-form">
				<label for="upage-header-search" class="upage-header-label">
					<svg viewBox="0 0 24 24">
						<title>Search!</title>
						<use href="#search"></use>
					</svg>
				</label>
				<input id="upage-header-search" type="search" class="upage-header-search" placeholder="Search" />
			</form>
		</div>


		<section class="upage-body">
			<div class="upage-main">

				{props.children}
			</div>


			<aside class="upage-sidebar">


			</aside>
		</section>

	</section>

}

export default UserPage


/**
 *
 *				<div class="upage-header-mobile">
					<h2 class="upage-header-mobile-text">Dashboard</h2>
					<button class="upage-header-mobile-notifications">
						<svg viewBox="0 0 256 256"><use href="#bell"></use></svg>
					</button>
				</div>


 */
