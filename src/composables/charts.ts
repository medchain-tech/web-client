import { ChartData, ChartOptions } from "chart.js"

type GetChartData<T> = () => {
	type: "line" | "bar" | "pie" | "doughnut"
	data: T
	options: ChartOptions

}


const PATIENTS_BY_LOCATION = [
	{ name: "Nigeria", value: 40 },
	{ name: "Uganda", value: 35 },
	{ name: "Angola", value: 20 },
	{ name: "Congo", value: 30 },
	{ name: "Mosam", value: 15 },
	{ name: "Others", value: 10 },
]


const MEDICATION_EFFICACY = [
	{
		disease: "Hypertension", medications: [
			{ name: "Losartan", cured_patients: 20 },
			{ name: "Hydrochlorothiazide", cured_patients: 7 },
			{ name: "Lisinopril", cured_patients: 10 },
			{ name: "Amilodipine", cured_patients: 12 },
			{ name: "Others", cured_patients: 2 },
		]
	}



]

export const getPatientsHomeInfo: GetChartData<ChartData<"bar">> = () => {

	return {
		type: "bar",
		data: {
			labels: PATIENTS_BY_LOCATION.map(location => location.name),
			datasets: [
				{
					data: PATIENTS_BY_LOCATION.map(location => location.value),
					backgroundColor: "#9186FF",
					borderRadius: 50,

				}
			],


		},
		options: {
			animation: false,
			aspectRatio: 2,
			scales: {
				y: {
					display: false,
				},
				x: {
					grid: {
						display: false
					}
				}
			},

			plugins: {
				legend: {
					display: false
				},

			}
		}
	}

}



export const getMedicationEfficacy: GetChartData<ChartData<"doughnut">> = () => {

	return {
		type: "doughnut",
		data: {
			labels: MEDICATION_EFFICACY[0].medications.map(medication => medication.name),
			datasets: [
				{
					data: MEDICATION_EFFICACY[0].medications.map(medication => medication.cured_patients),
					backgroundColor: ["#9186FF", "#58D481", "#ABA8CC", "#EC5562", "#F8F7FF"],
					borderRadius: 10,
					animation: false
				}
			]
		},
		options: {
			plugins: {
				legend: {
					display: false
				}
			}
		}


	}


}
