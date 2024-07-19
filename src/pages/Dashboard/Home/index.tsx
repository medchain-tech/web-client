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
					<strong class="dheader-title">Dashboard</strong>
					<form class="dheader-search">
						<label class="dheader-slabel" for="dheader-search">
							<svg viewBox="0 0 24 24"><use href="#search"></use></svg>
						</label>
						<input class="dheader-sinput" id="dheader-search" name="dheader-search" type="search" placeholder="Search for anything..." />
					</form>

					<div class="dheader-profile">

						<button class="dheader-pbutton" title="Messages">
							<svg viewBox="0 0 24 24">
								<use href="#message-dots"></use>
							</svg>
						</button>


						<button class="dheader-pbutton" title="Notifications">
							<svg viewBox="0 0 24 24">
								<use href="#bell"></use>
							</svg>
						</button>


						<details class="dheader-puser">
							<summary class="dheader-psummary">
								<img src="/user.png" alt="User Name" class="dheader-pimg" />

								<div class="dheader-pcontent">
									<strong class="dheader-pname">Wasiu Maleek</strong>
									<p class="dheader-ptype">Admin</p>
								</div>

								<svg role="presentation" class="dheader-pdown-arrow" viewBox="0 0 24 24"><use href="#down"></use></svg>
							</summary>

						</details>

					</div>

				</header>

				<div class="dbody">

					<div class="padmin" id="dashboard-admin">
						<section data-span="1" class="padmin-over">
							<strong class="padmin-over-greeting">Hi UCH Admin 👋</strong>
							<p class="padmin-over-text">Here is today’s patient treatments overview</p>

							<dl class="padmin-over-list">
								<div class="padmin-over-field">
									<dt class="padmin-over-title">Ongoing</dt>
									<dd class="padmin-over-number">10</dd>
								</div>


								<div class="padmin-over-field">
									<dt class="padmin-over-title">Treated</dt>
									<dd class="padmin-over-number">316</dd>
								</div>
							</dl>


							<ul class="padmin-over-messages">
								<li class="padmin-over-li">7 new test result is available</li>
								<li class="padmin-over-li">7 new test result is available</li>
								<li class="padmin-over-li">7 new test result is available</li>
							</ul>
						</section>

					</div>
				</div>
			</div>
		</div>

		<Assets />
	</>
}

export default Home
