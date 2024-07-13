import { JSXElement } from "solid-js";
import "./index.scss"
import CustomRadio, { CustomRadioProps } from "@/components/CustomRadio";
import { AccountType } from "@/types";
import { useNavigate } from "@solidjs/router";

interface RadioProps extends CustomRadioProps {
	options: {
		title: string
		description?: string
		value: AccountType
	}[]
}

const customRadioProps: RadioProps = {
	name: "account-type",
	labelId: "account-type",
	options: [
		{ title: "Patient", description: "Create patient/personal account", value: "personal" },
		{ title: "Healthcare Professional", description: "Create healthcare professional account", value: "professional" },
		{ title: "Hospital Administrator", description: "Create hospital account", value: "hospital" },
	]
}


const ChooseAccountType = (): JSXElement => {
	const navigate = useNavigate()


	const navigateToSignUpPage = (e: SubmitEvent) => {
		e.preventDefault()
		const form = e.target as unknown as HTMLFormElement;
		const radioElement = form.querySelector(`input[name=${customRadioProps.labelId}][type=radio]:checked`) as unknown as HTMLInputElement;
		if (!radioElement) return
		const value = radioElement.value as AccountType
		navigate(`/signup/${value}/start`)
	}

	return <>

		<h2 class="catype-heading" data-slayout="heading">Choose an account</h2>
		<p class="catype-desc" id="catype-options">Choose user type and get started with Medchain</p>

		<form class="catype-form" onSubmit={navigateToSignUpPage}>
			<CustomRadio {...customRadioProps} />
			<button type="submit" class="catype-button">Next</button>
		</form>


	</>

}

export default ChooseAccountType;
