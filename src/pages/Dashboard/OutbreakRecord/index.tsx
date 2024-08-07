import { Component, For, Show, mergeProps } from "solid-js";
import "./index.scss";

interface ButtonProps {
	iconLink?: string
	iconSize?: number
	onClick?: (e: MouseEvent) => void
	text: string
}

interface RowProps {
	name: string
	caseNumber: number
	date: string // Find another format for this
	symptoms: string[]
	outcome: {
		recovered: number,
		deceased: number
	}
}

const headerButtons: ButtonProps[] = [
	{ text: "Filters", iconLink: "filter" },
	{ text: "Add New Case", iconLink: "add" }
]

const rowData: RowProps[] = [
	{ name: "COVID-19", caseNumber: 20, date: "July 5, 2024", symptoms: ["Cough", "Fever"], outcome: { recovered: 2, deceased: 2 } },
	{ name: "Cholera", caseNumber: 50, date: "July 2, 2024", symptoms: ["Stooling"], outcome: { recovered: 40, deceased: 10 } },
	{ name: "MERS", caseNumber: 10, date: "June 5, 2024", symptoms: ["Cough", "Fever"], outcome: { recovered: 2, deceased: 8 } },
	{ name: "SARS", caseNumber: 20, date: "July 2, 2024", symptoms: ["Cough", "Fever"], outcome: { recovered: 2, deceased: 4 } }
]

const Button: Component<ButtonProps> = (props_) => {
	const props = mergeProps(props_, { iconSize: 24 })

	return <button class="comp-btn" data-button onClick={props.onClick}>
		<Show when={props.iconLink && props.iconLink > ""}>
			<svg
				class="comp-btn-icon"
				viewBox={`0 0 ${props.iconSize} ${props.iconSize}`}>
				<use href={`#${props.iconLink}`}></use>
			</svg>
		</Show>
		<span class="comp-btn-text">{props.text}</span>
	</button>
}

const Header: Component = () => {
	return <div class="outbreak-h">
		<h2 class="outbreak-h-title">Your hospital disease outbreak record</h2>
		<div class="outbreak-h-btnbar">
			<For each={headerButtons}>
				{(button) => <Button {...button} />}
			</For>
		</div>
	</div>
}

const Row: Component<RowProps> = (props) => {
	return <tr class="outbreak-t-row">
		<td>{props.name}</td>
		<td>{props.caseNumber}</td>
		<td>{props.date}</td>
		<td>{props.symptoms.join(', ')}</td>
		<td>{`Recovered (${props.outcome.recovered}), Deceased (${props.outcome.deceased})`}</td>
		<td><Button text="Details" /></td>
	</tr>
}

const HeaderRow = <thead class="outbreak-t-thead">
	<tr class="outbreak-t-row">
		<td>Disease Name</td>
		<td>Number of Cases</td>
		<td>Date</td>
		<td>Symptoms</td>
		<td>Outcome</td>
		<td>Action</td>
	</tr>
</thead>

const Table: Component = () => {
	return <div class="outbreak-t-wrapper">
		<table class="outbreak-t">
			{HeaderRow}
			<tbody>
				<For each={rowData}>{(row) => <Row {...row} />}</For>
			</tbody>
		</table>
	</div>
}


export const OutbreakRecord: Component = () => {
	return <>
		<Header />
		<Table />

	</>
}


