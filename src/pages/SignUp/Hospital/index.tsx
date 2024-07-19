import CustomInput, { CustomInputProps } from "@components/CustomInput"
import CustomRadio, { CustomRadioProps } from "@/components/CustomRadio"
import { SignUpLayout } from "@/layouts/SignUp"
import { SidebarTimeline } from "@/layouts/SignUpSidebar"
import { For, JSXElement, Match, Switch, createSignal } from "solid-js"
import "./index.scss"



const peopleInputs: CustomInputProps[] = [
	{ type: "textarea", id: "other-admins", label: "Other Administrators" },
	{ type: "textarea", id: "healthcare-professionals", label: "Your hospital's healthcare professionals" },
	{ type: "textarea", id: "invite-note", label: "Add invite note" }
]

const customRadioProps: Record<string, CustomRadioProps> = {
	adminNumbers: {
		name: "admin-number",
		labelId: "admin-number",
		options: [
			{ value: "1 to 5", title: "1 to 5" },
			{ value: "6 to 10", title: "6 to 10" },
			{ value: "11 to 15", title: "11 to 15" },
			{ value: "16 to 20", title: "16 to 20" },
		]
	},

	needs: {
		name: "hospital-needs",
		labelId: "hospital-needs",
		options: [
			{ value: "guide", title: "New to Medchain", description: "We will guide you" },
			{ value: "email", title: "New to Medchain", description: "We will email you" },
			{ value: "none", title: "No need", description: "No need" },
		]
	}

}

type HospitalSetupForms = "needs" | "people"

const Hospital = (): JSXElement => {

	const [currentForm, setCurrentForm] = createSignal("needs" as HospitalSetupForms)
	const submitNeeds = (e: SubmitEvent) => {
		e.preventDefault()

		//  TODO: some more verification logic



		setCurrentForm("people")
	}
	const submitPeople = (e: SubmitEvent) => {
		e.preventDefault()
	}



	return <SignUpLayout sidebar={SidebarTimeline}>

		<Switch>
			<Match when={currentForm() === "needs"}>
				<h2 data-slayout="heading" class="shospital-heading">Set up your profile</h2>
				<p class="shospital-desc">Fill in the information to complete your profile</p>

				<form class="shospital-form" id="setup-hospital-needs" onSubmit={submitNeeds}>
					<div class="shospital-field">
						<label for="admin-number">Number of Administrators</label>
						<CustomRadio {...customRadioProps["adminNumbers"]} />
					</div>

					<div class="shospital-field">
						<label for="admin-number">Getting Started</label>
						<CustomRadio {...customRadioProps["needs"]} />
					</div>

					<button data-button class="shospital-button" type="submit">Next</button>
				</form>
			</Match>


			<Match when={currentForm() === "people"}>
				<h2 data-slayout="heading" class="shospital-heading">Add people</h2>
				<p class="shospital-desc">Add your hospital’s administrators and Healthcare professional. You can invite others to login later.</p>

				<form class="shospital-form" id="setup-hospital-people" onSubmit={submitPeople}>
					<For each={peopleInputs}>
						{(peopleInput) => <CustomInput {...peopleInput} />}
					</For>

					<button data-button class="shospital-button" type="submit">Next</button>
				</form>
			</Match>

		</Switch>

	</SignUpLayout>

}


export default Hospital
