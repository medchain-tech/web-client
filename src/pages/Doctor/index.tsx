import { type JSXElement } from "solid-js";
import "./index.scss";
import DataTable from "@/components/DataTable";
import { Portal } from "solid-js/web";
import AddStaffDetail from "@/components/AddStaffDetail";
import ViewDetail from "@/components/ViewDetail";

const Doctor = (): JSXElement => {

	return <>
		<DataTable />
		<Portal>
			<AddStaffDetail />
			<ViewDetail />
		</Portal>
	</>

}

export default Doctor
