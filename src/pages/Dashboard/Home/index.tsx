import { For, JSXElement, onCleanup, onMount } from "solid-js";
import "./index.scss"
import { Assets } from "@/components/Assets";
import CustomInput, { CustomInputProps } from "@/components/CustomInput";
import { setupTabs } from "@/composables/tabs";
import { ArcElement, BarController, BarElement, CategoryScale, Chart, DoughnutController, Legend, LineController, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { getDiseaseIncidence, getDiseaseTrend } from "@/composables/charts";


const adminDiseaseChartFilters: CustomInputProps[] = [
	{
		type: "select",
		id: "admin-disease-trend",
		label: "Disease Trend",
		options: ["Diabetes", "Malaria", "Hypertension"]
	},

	{

		type: "select",
		id: "admin-disease-year",
		label: "Year",
		options: ["2024", "2023"]
	}

]

const adminIncidenceInput: CustomInputProps = {
	type: "select",
	id: "admin-incidence-month",
	label: "Year",
	options: ["June 1-30", "July 1-30"]
}


const Home = (): JSXElement => {
	let controller: AbortController;
	// eslint-disable-next-line prefer-const
	let diseaseTrend = null as unknown as HTMLCanvasElement;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let diseaseTrendChart = null as unknown as Chart;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	// eslint-disable-next-line prefer-const
	let incidenceEl = null as unknown as HTMLCanvasElement;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let incidenceChart = null as unknown as Chart;

	onMount(() => {
		controller = setupTabs("padmin-highs-tabpanels", "padmin-highs-tabs").controller
		Chart.register(
			Title,
			Tooltip,
			Legend,
			LineController,
			CategoryScale,
			LinearScale,
			PointElement,
			BarElement,
			BarController,
			LineElement,
			DoughnutController,
			ArcElement
		);

		Chart.defaults.font.family = "Poppins, sans serif"

		const chartData = getDiseaseTrend()
		diseaseTrendChart = new Chart(diseaseTrend, chartData)

		const incidenceData = getDiseaseIncidence()
		incidenceChart = new Chart(incidenceEl, incidenceData)


	})

	onCleanup(() => {
		controller?.abort()
		diseaseTrendChart.destroy()
		incidenceChart.destroy()
	})

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
							<h3 class="padmin-over-greeting">Hi UCH Admin 👋</h3>
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


						<section class="padmin-dchart" data-span="2">

							<div class="padmin-dchart-header">
								<h3 class="padmin-dchart-title">Disease trend</h3>

								<form id="dchart-filters" class="padmin-dchart-filters">
									<For each={adminDiseaseChartFilters}>
										{(input) => <CustomInput {...input} />}
									</For>
								</form>
							</div>

							{/* TODO: put line chart here with chart.js */}
							<div class="padmin-dchart-chart">
								<canvas ref={diseaseTrend}></canvas>
							</div>
						</section>


						<section class="padmin-highs" data-span="2">
							<h3 title="padmin-highs-title" class="sr-only">Highlights</h3>
							<ul id="padmin-highs-tabs" class="padmin-highs-tabs" data-tabs="tabs-list" aria-labelledby="padmin-highlights-title">
								<li class="padmin-highs-tabli"><a role="tab" href="#padmin-highs-insights">Insights</a></li>
								<li class="padmin-highs-tabli"><a role="tab" href="#padmin-highs-visits">Weekly Visits</a></li>
							</ul>


							<div class="padmin-highs-tabpanels" id="padmin-highs-tabpanels">
								<div class="padmin-highs-tabpanel" role="tabpanel" id="padmin-highs-insights">
									<ul class="padmin-highs-insights">
										<li class="padmin-highs-insight">43% of patients with diabetes have not had a blood sugar test in the last 6 months</li>
										<li class="padmin-highs-insight">25% of patients with hypertension have not had a blood pressure check in the last 3 months</li>
										<li class="padmin-highs-insight">The top 3 most common diagnoses are hypertension, diabetes, and asthma</li>
										<li class="padmin-highs-insight">The most frequently prescribed medications are Lisinopril, Metformin, and Albuterol</li>
									</ul>

									<button data-link class="padmin-highs-button">See All
										<svg viewBox="0 0 24 24"><use href="#right"></use></svg>
									</button>

								</div>
								<div class="padmin-highs-tabpanel" role="tabpanel" id="padmin-highs-visits">
									<h4>Weekly Visits Tabs</h4>
								</div>
							</div>

						</section>
						<section class="padmin-apps" data-span="1">
							<div class="padmin-apps-header">
								<h3 class="padmin-apps-title">Appointments</h3>
								<button data-link class="padmin-apps-view-all">
									View All
									<svg viewBox="0 0 24 24"><use href="#right"></use></svg>
								</button>
							</div>

							<table class="padmin-apps-calendar">
								<thead>
									<tr>
										<th>M</th>
										<th>T</th>
										<th>W</th>
										<th>T</th>
										<th>F</th>
										<th>S</th>
										<th>S</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>1</td>
										<td>2</td>
										<td>3</td>
										<td data-active="true">4</td>
										<td>5</td>
										<td>6</td>
										<td>7</td>
									</tr>
								</tbody>
							</table>

							<ul class="padmin-apps-list">

								<li class="appointment-item">
									<div class="appointment-info">
										<p class="appointment-title"><strong>Alexandra David</strong> - Medical checkup</p>
										<div class="appointment-timebar">
											<time class="appointment-time">9:00am - 10.00am</time>
											<p class="appointment-doc">Dr Mark Henry</p>
										</div>
										<div class="appointment-statbar">
											<button class="appointment-button">Click To Approve</button>
											<button class="appointment-button">Health Record</button>
										</div>
									</div>

								</li>
							</ul>

						</section>

						<section class="padmin-incidence" data-span="1">
							<div class="padmin-incidence-header">
								<h3 class="padmin-incidence-title">Incidence</h3>

								<form class="padmin-incidence-form" id="padmn-incidence-form">
									<CustomInput {...adminIncidenceInput} />
								</form>
							</div>
							<div class="padmin-incidence-chart">
								{/* TODO: put the pie-chart for incidence here... */}
								<canvas ref={incidenceEl}></canvas>
							</div>
						</section>

						<section class="padmin-pdepts" data-span="2">
							<h3 class="padmin-pdepts-title">Patients by Department</h3>

							<ul class="padmin-pdepts-stats">
								<li class="padmin-pdepts-statli">
									<div class="cadmin-stat">
										<dt class="cadmin-stat-title">Neurology</dt>
										<dd class="cadmin-stat-content">30%</dd>
									</div>
								</li>
								<li class="padmin-pdepts-statli">
									<div class="cadmin-stat">
										<dt class="cadmin-stat-title">Neurology</dt>
										<dd class="cadmin-stat-content">30%</dd>
									</div>
								</li>
								<li class="padmin-pdepts-statli">
									<div class="cadmin-stat">
										<dt class="cadmin-stat-title">Neurology</dt>
										<dd class="cadmin-stat-content">30%</dd>
									</div>
								</li>
								<li class="padmin-pdepts-statli">
									<div class="cadmin-stat">
										<dt class="cadmin-stat-title">Neurology</dt>
										<dd class="cadmin-stat-content">30%</dd>
									</div>
								</li>
								<li class="padmin-pdepts-statli">
									<div class="cadmin-stat">
										<dt class="cadmin-stat-title">Neurology</dt>
										<dd class="cadmin-stat-content">30%</dd>
									</div>
								</li>

							</ul>


							<div class="padmin-pseverities">
								<h4 class="padmin-pseverities-title">Patient Severity</h4>

								<ul class="padmin-pseverities-list">
									<li class="padmin-pseverities-li">
										<div class="cadmin-severity">
											<p class="cadmin-severity-name">Emergency Cases</p>
											<span class="cadmin-severity-number">200/400</span>
											<div title="Emergency: 50% of all patients" class="cadmin-severity-progress" role="progressbar"
												style="--percent:50;" aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
											</div>
										</div>
									</li>

									<li class="padmin-pseverities-li">
										<div class="cadmin-severity">
											<p class="cadmin-severity-name">Recovered Cases</p>
											<span class="cadmin-severity-number">100/400</span>
											<div title="Recovered: 25% of all patients" class="cadmin-severity-progress" role="progressbar"
												style="--percent:25;" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
											</div>
										</div>
									</li>

									<li class="padmin-pseverities-li">
										<div class="cadmin-severity">
											<p class="cadmin-severity-name">Other Outcomes</p>
											<span class="cadmin-severity-number">100/400</span>
											<div title="Other Outcomes: 25% of all patients" class="cadmin-severity-progress" role="progressbar"
												style="--percent:25;" aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
											</div>
										</div>
									</li>


								</ul>
							</div>

						</section>


					</div>
				</div>
			</div>
		</div>

		<Assets />
	</>
}

export default Home
