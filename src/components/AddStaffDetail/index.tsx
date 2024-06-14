import { For, JSXElement } from "solid-js";
import "./index.scss";
import RecordDialog from "@/components/RecordDialog";
import CustomInput, { CustomInputProps } from "@/components/CustomInput";

const personalDetailsInputs: CustomInputProps[] = [

  {
    type: "text",
    label: "Name",
    id: "add-staff-name",
    placeholder: "e.g. Adeola Osho",
    required: true
  },

  {
    type: "number",
    label: "Age",
    id: "add-staff-age",
    placeholder: "e.g. 54",
    required: true,
    max: 70,
    min: 20,
  },

  {
    type: "select",
    label: "State",
    id: "add-staff-state",
    required: true,
    options: ["Lagos", "Port-Harcourt", "Kwara"]
  },

  {
    type: "select",
    label: "Country",
    id: "add-staff-country",
    required: true,
    options: ["Nigeria"]
  },

  {
    type: "text",
    label: "Contact Information",
    id: "add-staff-contact-information",
    placeholder: "e.g. Onyiyoza Mark",
    required: true
  },

  {
    type: "text",
    label: "Language Spoken",
    id: "add-staff-name",
    placeholder: "e.g. English/Pidgin",
    required: true
  }








]

const AddStaffDetail = (): JSXElement => {

  return <RecordDialog title="Add Staff Detail">

    <form class="astaff-form">
      <div class="astaff-picture-field">
        <p>Patient Photo</p>

        <div class="astaff-picture-wrapper">
          <svg viewBox="0 0 36 36"><use href="#avatar"></use></svg>
        </div>
      </div>



      <h3 class="astaff-heading">Personal Headings</h3>

      <For each={personalDetailsInputs}>
        {(inputData) => <CustomInput {...inputData} />}
      </For>
    </form>


  </RecordDialog>
}

export default AddStaffDetail
