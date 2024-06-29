import { For, Match, Switch, type JSXElement } from "solid-js";
import { SignUpTitle } from "@components/SignUp/Title";
import CustomInput, { type CustomInputProps } from "@/components/CustomInput";
import "./index.scss";
import CustomButton from "@/components/CustomButton";
import { readForm } from "@/composables/forms";
import { useStore } from "@nanostores/solid";
import { $currentDoctorForm, FORM_CODES } from "@/stores/forms";
const pageOneInputs: CustomInputProps[] = [
    {
        type: "text",
        id: "individual-name",
        label: "Name",
        required: true,
        placeholder: "Adeola Osho",
        checkInput: (input) => input.length > 2
    },

    {
        type: "email",
        id: "individual-email",
        label: "Email",
        required: true,
        placeholder: "adeolaosho@gmail.com"
    },

    {
        type: "select",
        id: "individual-country",
        label: "Country",
        options: ['Nigeria'],
        required: true,
    },

    {
        type: "select",
        id: "individual-state",
        label: "State",
        options: ['Kwara', 'Lagos', 'Portharcourt'],
        required: true,
    },

    {
        type: "tel",
        id: "individual-phone",
        label: "Phone Number",
        required: true,
        placeholder: "07033882912",
        checkInput: (input) => input.length === 11
    }
]


const pageTwoInputs: CustomInputProps[] = [
    {
        type: "tel",
        id: "individual-phone-1",
        label: "Phone Number",
        required: true,
        placeholder: "07033882912",
        checkInput: (input) => input.length === 11
    },

    {
        type: "tel",
        id: "individual-phone-2",
        label: "Phone Number",
        required: true,
        placeholder: "07033882912",
        checkInput: (input) => input.length === 11
    },

    {
        type: "tel",
        id: "individual-phone-3",
        label: "Phone Number",
        required: true,
        placeholder: "07033882912",
        checkInput: (input) => input.length === 11
    },

    {
        type: "tel",
        id: "individual-phone-4",
        label: "Phone Number",
        required: true,
        placeholder: "07033882912",
        checkInput: (input) => input.length === 11
    }
]




export const Individual = (): JSXElement => {
    const currentDoctorForm = useStore($currentDoctorForm)
    const submitBasicInfo = (e: SubmitEvent) => {
        e.preventDefault()
        const { data, ok } = readForm("signup-form-individual", pageOneInputs)
        console.log(data)
        if (!ok) return
        $currentDoctorForm.set(FORM_CODES["DOCTOR_PRACTICE_DETAILS"])
    }



    return (
        <SignUpTitle>
            <section class="signup-form-section page-individual">
                <Switch>
                    <Match when={currentDoctorForm() === FORM_CODES["DOCTOR_BASICS"]}>
                        <h3 class="signup-form-heading">Personal Info</h3>
                        <form onSubmit={submitBasicInfo} id="signup-form-individual" class="signup-form">
                            <For each={pageOneInputs}>
                                {(customInputProps) => <CustomInput {...customInputProps} />}
                            </For>

                            <CustomButton type="submit">NEXT</CustomButton>
                        </form>
                    </Match>

                    <Match when={currentDoctorForm() === FORM_CODES["DOCTOR_PRACTICE_DETAILS"]}>
                        <h3 class="signup-form-heading">Medical Information</h3>
                        <form id="signup-form-individual-page-two" class="signup-form">
                            <For each={pageTwoInputs}>
                                {(customInputProps) => <CustomInput {...customInputProps} />}
                            </For>
                            <CustomButton type="submit">NEXT</CustomButton>
                        </form>
                    </Match>

                </Switch>

            </section>

        </SignUpTitle>
    )
}



//<p class="signup-form-subheading">Please fill in the details below to create your account and access personalized health services</p>

