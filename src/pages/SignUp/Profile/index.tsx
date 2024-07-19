import CustomInput, { CustomInputProps } from "@/components/CustomInput"
import { SignUpLayout } from "@/layouts/SignUp"
import { SidebarTimeline } from "@/layouts/SignUpSidebar"
import { For, JSXElement, Match, Switch, createSignal } from "solid-js"
import "./index.scss"
import { MEDICAL_SPECIALTIES } from "@/composables/data"
import { useParams } from "@solidjs/router"
import { AccountType } from "@/types"

type ProfileFormType = "professional" | "profile"

const profileInputs: CustomInputProps[] = [
	{ type: "text", id: "first-name", label: "First Name" },
	{ type: "text", id: "last-name", label: "Last Name" },
	{ type: "date", id: "dob", label: "Date of Birth" },
	{ type: "select", id: "gender", options: ["Male", "Female", "Non-binary"], label: "Gender" },
	{ type: "select", id: "country", options: ["Nigeria"], label: "Country" },
	{ type: "tel", id: "phone-number", label: "Phone Number" }
]


const professionalInputs: CustomInputProps[] = [
	{ type: "text", id: "professional-name", label: "Professional Name" },
	{ type: "text", id: "medical-licence-number", label: "Medical Licence Number" },
	{ type: "select", options: MEDICAL_SPECIALTIES, id: "specialty", label: "Specialty" },
	{ type: "number", id: "years-of-experience", label: "Years of experience", min: 1, max: 100 },
	{ type: "select", options: ["University Of Ilorin Teaching Hospital"], id: "hospital", label: "Hospital (where you practice)", required: false }
]


const Profile = (): JSXElement => {
	const [currentForm, setCurrentForm] = createSignal("profile" as ProfileFormType)
	const params = useParams();
	const accountType = params.accountType as AccountType;

	const setupProfile = (e: SubmitEvent) => {
		e.preventDefault()
		// TODO: some verification logic

		if (accountType === "professional") {
			return setCurrentForm("professional")
		}
	}

	const setupProfessional = (e: SubmitEvent) => {
		e.preventDefault()

		// TODO: some verification logic
	}

	return <SignUpLayout sidebar={SidebarTimeline}>



		<Switch>
			<Match when={currentForm() === "profile"}>
				<h2 data-slayout="heading" class="sprofile-heading">Set up your profile</h2>
				<p class="sprofile-desc">Fill in the information to complete your profile</p>

				<form class="sprofile-form" id="setup-profile" onSubmit={setupProfile}>
					<For each={profileInputs}>
						{(profileInput) => < CustomInput {...profileInput} />}
					</For>


					<div class="sprofile-button-bar">
						<button class="sprofile-button" type="submit" data-button>Next</button>
						<button class="sprofile-button" type="button" data-link>Skip</button>
					</div>
				</form>
			</Match >

			<Match when={currentForm() === "professional"}>
				<h2 data-slayout="heading" class="sprofile-heading">Professional Information</h2>
				<p class="sprofile-desc">Fill in the information to complete your profile</p>

				<form class="sprofile-form" id="setup-professional" onSubmit={setupProfessional}>
					<For each={professionalInputs}>
						{(professionalInput) => < CustomInput {...professionalInput} />}
					</For>


					<div class="sprofile-button-bar">
						<button class="sprofile-button" type="submit" data-button>Next</button>
						<button class="sprofile-button" type="button" data-link>Skip</button>
					</div>
				</form>

			</ Match >

		</ Switch>


	</SignUpLayout>

}


export default Profile
