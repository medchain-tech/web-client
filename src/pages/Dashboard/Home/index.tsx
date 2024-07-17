import { JSXElement } from "solid-js";
import "./index.scss"
import { Assets } from "@/components/Assets";

const Home = (): JSXElement => {
	return <>
		<div class="dashboard">
			<nav class="dsidebar">
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
					<a href="/signup" data-slink="wrapper">
						<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-home"></use></svg>
						<p data-slink="text">Overview</p>
					</a>


					<div class="dsidebar-linkgroup">
						<strong class="dsidebar-linkgroup-heading">Medical Center</strong>

						<ul class="dsidebar-link-list">
							<li class="dsidebar-link-li">
								<a href="/signup" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-calendar"></use></svg>
									<p data-slink="text">Appointments</p>
								</a>
							</li>


							<li class="dsidebar-link-li">
								<a href="/signup" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-user"></use></svg>
									<p data-slink="text">Patients</p>
								</a>
							</li>

							<li class="dsidebar-link-li">
								<a href="/signup" aria-current="page" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-users"></use></svg>
									<p data-slink="text">Staff List</p>
								</a>
							</li>
						</ul>
					</div>

					<div id="dsidebar-linkgroup-report" class="dsidebar-linkgroup">
						<strong class="dsidebar-linkgroup-heading">Report</strong>

						<ul class="dsidebar-link-list">
							<li class="dsidebar-link-li">
								<a href="/signup" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-chart-line"></use></svg>
									<p data-slink="text">Disease Overview</p>
								</a>
							</li>


							<li class="dsidebar-link-li">
								<a href="/signup" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-virus"></use></svg>
									<p data-slink="text">Outbreak Record</p>
								</a>
							</li>

						</ul>
					</div>

					<div id="dsidebar-linkgroup-settings" class="dsidebar-linkgroup">

						<ul class="dsidebar-link-list">

							<li class="dsidebar-link-li">
								<a href="/signup" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-chat"></use></svg>
									<p data-slink="text">Support</p>
								</a>
							</li>

							<li class="dsidebar-link-li">
								<a href="/signup" data-slink="wrapper">
									<svg data-slink="icon" viewBox="0 0 24 24"><use href="#nav-settings"></use></svg>
									<p data-slink="text">Settings</p>
								</a>
							</li>
						</ul>
					</div>


				</div>

			</nav>

			<div class="dcontent">
				<header class="dheader">
					<strong>Header</strong>
				</header>

				<div class="dbody">
					<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci placeat deserunt eius debitis quibusdam, iusto asperiores quae nisi sit quo perferendis praesentium sapiente. Perspiciatis totam dignissimos cupiditate tempora placeat sapiente tempore ducimus mollitia maxime! Iste doloribus vitae explicabo iusto quasi sapiente obcaecati, at corrupti. Error suscipit explicabo sed, a est maxime consequatur, quos quam repellat dolorem mollitia iure animi veniam, ratione quisquam id ad eveniet?</p>
				</div>
			</div>
		</div>

		<Assets />
	</>
}

export default Home
