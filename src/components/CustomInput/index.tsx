import { For, Match, Show, Switch, mergeProps, type JSXElement } from "solid-js"
import "./index.scss"


interface BaseInputProps {
  id: string
  label: string
  errorMessage?: string
  placeholder?: string
  required?: boolean
}

interface TextProps extends BaseInputProps {
  pattern?: string
  type: 'text',
  options?: string[]
}

interface NumberProps extends BaseInputProps {
  min?: number
  max?: number
  type: 'number'
}

interface EmailProps extends BaseInputProps {
  type: 'email'
}

interface PasswordProps extends BaseInputProps {
  type: 'password'
  pattern?: string
  revealPassword: boolean
}

interface SelectProps extends BaseInputProps {
  type: 'select'
  options: string[]
}

interface TextAreaProps extends BaseInputProps {
  type: 'textarea'
  min: number
  max: number
}


export type CustomInputProps = TextProps | NumberProps | EmailProps | PasswordProps | SelectProps | TextAreaProps


const CustomInput = (props: CustomInputProps): JSXElement => {


  const defaultProps: CustomInputProps = {
    type: "textarea",
    id: "text-input",
    label: "Props",
    required: false,
    placeholder: "Enter great text",
    max: 50,
    min: 10
  }

  const inputProps = mergeProps(defaultProps, props)

  return <>

    <div class="form-textinput-field" data-inputid={inputProps.id}>
      <label for={inputProps.id} class="form-textinput-label">{inputProps.label}</label>

      <Switch>
        <Match when={inputProps.type === "text"}>
          <input
            id={inputProps.id}
            type="text"
            class="form-textinput-input"
            name={inputProps.id}
            placeholder={inputProps.placeholder}
            required={inputProps.required}
            pattern={inputProps.pattern}
            list={`list-${inputProps.id}`}
          />


          <Show when={inputProps.type === "text" && inputProps.options && inputProps.options?.length > 0}>
            <datalist id={`list-${inputProps.id}`}>
              <For each={(inputProps.type === "text" && inputProps.options && inputProps.options?.length > 0) ? inputProps.options : []}>
                {(option) => <option value={option}></option>}
              </For>
            </datalist>
          </Show>
        </Match>

        <Match when={inputProps.type === "number"}>
          <input
            id={inputProps.id}
            type="number"
            inputmode="numeric"
            class="form-textinput-input"
            name={inputProps.id}
            placeholder={inputProps.placeholder}
            required={inputProps.required}
          />
        </Match>

        <Match when={inputProps.type === "email"}>
          <input
            id={inputProps.id}
            type="email"
            class="form-textinput-input"
            name={inputProps.id}
            placeholder={inputProps.placeholder}
            required={inputProps.required} />
        </Match>

        <Match when={inputProps.type === "password"}>
          <input
            id={inputProps.id}
            type="password"
            class="form-textinput-input"
            name={inputProps.id}
            placeholder={inputProps.placeholder}
            required={inputProps.required}
            pattern={inputProps.pattern} />

          <Show when={inputProps.type === "password" && inputProps.revealPassword}>
            <button type="button" class="form-textinput-reveal">Reveal Password</button>
          </Show>
        </Match>

        <Match when={inputProps.type === "select"}>
          {
            inputProps.type === "select" &&
            (<select class="form-textinput-select" name={inputProps.id}>
              <For each={inputProps.options}>
                {(option) => <option class="form-textinput-option" value={option}>{option}</option>}
              </For>
            </select>)
          }
        </Match>

        <Match when={inputProps.type === "textarea"}>
          <textarea
            class="form-textinput-textarea"
            name={inputProps.id}
            id={inputProps.id}
            minLength={inputProps.min}
            maxlength={inputProps.max}
            placeholder={inputProps.placeholder}></textarea>
        </Match>
      </Switch>

      <Show when={inputProps?.errorMessage}>
        <small class="form-textinput-error">{inputProps.errorMessage ?? ""}</small>
      </Show>
    </div>

  </>

}


export default CustomInput
