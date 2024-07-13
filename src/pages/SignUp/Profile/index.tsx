import CustomInput, { CustomInputProps } from "@/components/CustomInput"
import { SignUpLayout } from "@/layouts/SignUp"
import { SidebarTimeline } from "@/layouts/SignUpSidebar"
import { For, JSXElement } from "solid-js"
import "./index.scss"

const profileInputs: CustomInputProps[] = [
	{ type: "text", id: "first-name", label: "First Name" },
	{ type: "text", id: "last-name", label: "Last Name" },
	{ type: "date", id: "dob", label: "Date of Birth" },
	{ type: "select", id: "gender", options: ["Male", "Female", "Non-binary"], label: "Gender" },
	{ type: "select", id: "country", options: ["Nigeria"], label: "Country" },
	{ type: "tel", id: "phone-number", label: "Phone Number" },



]


const Profile = (): JSXElement => {
	const setupProfile = (e: SubmitEvent) => {
		e.preventDefault()
	}



	return <SignUpLayout sidebar={SidebarTimeline}>
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

	</SignUpLayout>

}


export default Profile
