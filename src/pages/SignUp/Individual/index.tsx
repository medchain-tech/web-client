import { For, type JSXElement } from "solid-js";
import { SignUpTitle } from "@components/SignUp/Title";
import CustomInput, { type CustomInputProps } from "@/components/CustomInput";

export const Individual = (): JSXElement => {
    const pageOneInputs: CustomInputProps[] = [
        {
            type: "text",
            id: "individual-name",
            label: "Name",
            required: true,
            placeholder: "Adeola Osho"
        },

        {
            type: "email",
            id: "individual-email",
            label: "Email",
            required: true,
            placeholder: "adeolaosho@gmail.com"
        },


        {
            type: "number",
            id: "individual-phone",
            label: "Phone Number",
            required: true,
            placeholder: "09044449940"
        },

        {
            type: "select",
            id: "individual-country",
            label: "Country",
            options: ['Nigeria'],
            required: true,
        },

        {
            type: "password",
            id: "individual-password",
            label: "Password",
            required: true,
            placeholder: "Create a password",
            revealPassword: false
        },

        {
            type: "password",
            id: "individual-confirm-password",
            label: "Confirm Password",
            required: true,
            placeholder: "Confirm Password",
            revealPassword: true
        },


    ]



    return (
        <SignUpTitle>
            <section class="signup-form-section page-individual">
                <h3 class="signup-form-heading">Tell us about yourself</h3>

                <p class="signup-form-subheading">Please fill in the details below to create your account and access personalized health services</p>

                <form class="signup-form">
                    <For each={pageOneInputs}>
                        {(customInputProps) => <CustomInput {...customInputProps} />}
                    </For>

                </form>
            </section>

        </SignUpTitle>
    )
}
