import StatisticsInfoBox from "@/components/StatisticsInfoBox";
import { JSXElement, onMount } from "solid-js";
import "./index.scss";
import { DiseaseChart } from "@/components/DiseaseChart";
import { ArcElement, BarController, BarElement, CategoryScale, Chart, DoughnutController, Legend, LineController, LineElement, LinearScale, PointElement, Title, Tooltip } from "chart.js";
import { getMedicationEfficacy, getPatientsHomeInfo } from "@/composables/charts";

const HospitalHome = (): JSXElement => {
	// eslint-disable-next-line prefer-const
	let chartPatientsByLocationElement: HTMLCanvasElement = null as unknown as HTMLCanvasElement;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let chartPatientsByLocation: Chart = null as unknown as Chart;

	// eslint-disable-next-line prefer-const
	let medicationEfficacyElement: HTMLCanvasElement = null as unknown as HTMLCanvasElement;
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	let medicationEfficacy: Chart = null as unknown as Chart;


	onMount(() => {
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

		Chart.defaults.font.family = "'DM Sans', Poppins, sans serif"

		const chartPatientsData = getPatientsHomeInfo()
		chartPatientsByLocation = new Chart(chartPatientsByLocationElement, chartPatientsData)


		const medicationEfficacyData = getMedicationEfficacy()
		medicationEfficacy = new Chart(medicationEfficacyElement, medicationEfficacyData)
	})




	return <>
		<div class="hhome-header">

			<ul class="hhome-header-stats">
				<li class="hhome-header-stat"><StatisticsInfoBox /></li>
				<li class="hhome-header-stat"><StatisticsInfoBox /></li>
				<li class="hhome-header-stat"><StatisticsInfoBox /></li>
			</ul>
		</div>


		<div class="hhome-main">

			<div class="hhome-charts">
				<DiseaseChart />

				<article class="hhome-charts-location">
					<h3 class="hhome-charts-location-heading">Patients By Location</h3>
					<div class="hhome-charts-location-wrapper">
						<canvas ref={chartPatientsByLocationElement}>
							<p>A bar chart showing the distribution of patients across countries</p>
						</canvas>
					</div>
				</article>



				<article class="hhome-charts-medication">
					<h3 class="hhome-charts-medication-heading">Hypertension</h3>
					<div class="hhome-charts-medication-wrapper">
						<canvas ref={medicationEfficacyElement}>
							<p>A doughnut chart showing the distribution of drug efficacies for different medications</p>
						</canvas>
					</div>
				</article>

			</div>


		</div>
	</>

}

export default HospitalHome
