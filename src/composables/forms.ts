import { type CustomInputProps } from "@/components/CustomInput";

export const readForm = (formId: string, inputs: CustomInputProps[]) => {
	try {
		const domLoaded = !!globalThis?.window
		if (!domLoaded) throw Error("not in the client enviroment, window object not present.")

		const form = document.querySelector(`form#${formId}`) as HTMLFormElement
		if (!form) throw Error("form is not present")

		const data = inputs.map(input => {
			const inputElement = form.querySelector(`#${input.id}`) as HTMLInputElement
			if (!inputElement) throw Error(`input element for "${input.id}" is not present`)

			const outputObject = {
				label: input.label,
				value: inputElement.value.trim(),
				id: input.id,
			}

			if ("checkInput" in input) {
				const inputIsValid = input.checkInput && input.checkInput(outputObject.value)
				if (!inputIsValid) throw Error(`the ${input.label} field is invalid`)
			}

			return outputObject
		})


		return { data, ok: true }
	}

	catch (e) {
		console.error(e)
		return { data: [], ok: false }
	}
}
