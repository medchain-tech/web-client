import { SignUpLayout } from "@/layouts/SignUp/index"
import { SidebarTimeline } from "@/layouts/SignUpSidebar"
import { For, JSXElement, Match, Switch } from "solid-js"
import "./index.scss"
import CustomInput, { CustomInputProps } from "@/components/CustomInput"
import { useNavigate, useParams } from "@solidjs/router"
import { AccountType } from "@/types"


const personalInputs: CustomInputProps[] = [
	{
		type: "email",
		id: "start-personal-email",
		label: "Email",
		placeholder: "Personal Email",
		required: true
	},


	{
		type: "password",
		required: true,
		revealPassword: true,
		id: "start-personal-password",
		label: "Password",
		errorMessage: "Min of 6 characters including a letter and number",
		placeholder: "Enter Password"
	}
]


const professionalInputs: CustomInputProps[] = [

	{
		type: "email",
		id: "sstart-pro-email",
		label: "Email",
		placeholder: "Hospital Email",
		required: true
	},

	{
		type: "password",
		id: "sstart-pro-password",
		label: "Password",
		placeholder: "Password",
		revealPassword: true
	}

]




export const Start = (): JSXElement => {
	// eslint-disable-next-line prefer-const
	let termsInputRef = null as unknown as HTMLInputElement;
	const getCustomInputs = (account: AccountType) => {
		let output: CustomInputProps[];

		switch (account) {
			case "personal":
				output = personalInputs;
				break;
			case "professional":
				output = professionalInputs;
				break;
			case "hospital":
				output = personalInputs;
				break;
		}

		return output
	}



	const params = useParams()
	const navigate = useNavigate()
	const accountType: AccountType = params.accountType as unknown as AccountType
	const customInputs = getCustomInputs(accountType)



	const startSignUp = (e: SubmitEvent) => {
		e.preventDefault();
		// TODO: Some Extra verification logic 
		return navigate(`/signup/${accountType}/verify`);

	}


	return <SignUpLayout sidebar={SidebarTimeline}>
		<h2 class="sstart-heading" data-slayout="heading">Sign Up</h2>

		<Switch>
			<Match when={accountType === "personal"}>
				<p class="sstart-subheading">Patient Account</p>
			</Match>

			<Match when={accountType === "professional"}>
				<p class="sstart-subheading">Health Professional Account</p>
			</Match>
			<Match when={accountType === "hospital"}>
				<p class="sstart-subheading">Hospital Admin Account</p>
			</Match>

		</Switch>

		<p class="sstart-signin-text">Already have an account? <a class="sstart-signin-link" data-link href="#">Sign in</a></p>

		<button class="sstart-signup-google" data-button>
			<svg class="sstart-signin-google-icon" viewBox="0 0 256 262"><use href="#google"></use></svg>
			<span>Signup for free</span>
		</button>


		<span class="sstart-or">Or</span>


		<form onSubmit={startSignUp} class="sstart-form" id={`sstart-form-${accountType}`}>

			<For each={customInputs}>
				{(customInputProps) => <CustomInput {...customInputProps} />}
			</For>

			<div class="sstart-terms-field">
				<input required={true} ref={termsInputRef} class="sstart-terms-input" id="sstart-terms" type="checkbox" />
				<label class="sstart-terms-label" for="sstart-terms">By continuing, you're agreeing to Medchain's <a data-link href="#" class="sstart-terms-link">Terms & Conditions</a> and <a data-link href="#" class="ssterms-terms-link">Privacy Policy</a> </label>
			</div>

			<button data-button class="sstart-submit">Create an Account</button>
		</form>



		<p class="sstart-account-types">
			<Switch>
				<Match when={accountType === "personal"}>
					Signup as <a data-link href="#">Hospital Administrator</a> or <a data-link href="#">Healthcare professional</a>
				</Match>
				<Match when={accountType === "professional"}>
					Signup as <a data-link href="#">Hospital Administrator</a> or <a data-link href="#">Healthcare professional</a>
				</Match>
				<Match when={accountType === "hospital"}>
					Signup as <a data-link href="#">Hospital Administrator</a> or <a data-link href="#">Healthcare professional</a>
				</Match>
			</Switch>
		</p>
	</SignUpLayout>
}
