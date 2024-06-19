import { type JSXElement } from "solid-js";
import "./index.scss";
import DataTable from "@/components/DataTable";
import { Portal } from "solid-js/web";
import AddStaffDetail from "@/components/AddStaffDetail";
import ViewDetail from "@/components/ViewDetail";

const Doctor = (): JSXElement => {

	return <section class="pdoctor">
		<div class="pdoctor-header">
			<h2 class="pdoctor-header-message">Welcome, Adeola</h2>
			<form class="pdoctor-header-form">
				<label for="pdoctor-header-search" class="pdoctor-header-label">
					<svg viewBox="0 0 24 24">
						<title>Search!</title>
						<use href="#search"></use>
					</svg>
				</label>
				<input id="pdoctor-header-search" type="search" class="pdoctor-header-search" placeholder="Search" />
			</form>
		</div>


		<section class="pdoctor-main">

			<DataTable />
			<Portal>
				<AddStaffDetail />
				<ViewDetail />
			</Portal>

		</section>

	</section>

}

export default Doctor
