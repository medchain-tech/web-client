import StatisticsInfoBox from "@/components/StatisticsInfoBox";
import { JSXElement } from "solid-js";
import "./index.scss";
import { DiseaseChart } from "@/components/DiseaseChart";

const HospitalHome = (): JSXElement => {







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

			</div>


		</div>
	</>

}

export default HospitalHome
