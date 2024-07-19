import { For, JSXElement } from "solid-js";
import "./index.scss";
import RecordDialog from "@/components/RecordDialog";
import CustomInput, { CustomInputProps } from "@/components/CustomInput";
import { MEDICAL_SPECIALTIES, MEDICAL_UNITS } from "@/composables/data";

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
    label: "Occupation",
    id: "add-staff-occupation",
    placeholder: "e.g. Microbiologist",
    required: true
  },

  {
    type: "text",
    label: "Hospital Name and Location",
    id: "add-staff-hospital-name",
    placeholder: "e.g. City Hospital, Ogba, Lagos",
    required: true
  },

  {
    type: "textarea",
    label: "Acheivements and Professional Experience",
    id: "add-staff-acheivements",
    placeholder: "Provide a brief overview of the staff's background, experience and expertise. Highlight any significant acheivements, contributions to the field and other notable milestones",
    required: true,
  },

  {
    type: "text",
    label: "Specialty",
    id: "add-staff-specialty",
    placeholder: "e.g. Cardiology",
    required: true,
    options: MEDICAL_SPECIALTIES
  },

  {
    type: "text",
    label: "Unit",
    id: "add-staff-unit",
    placeholder: "e.g. Intensive Care Unit (ICU)",
    required: true,
    options: MEDICAL_UNITS
  },

  {
    type: "text",
    label: "Recent Publications",
    id: "add-staff-publications",
    placeholder: "e.g. link.publication.com, another-link.publication.com"
  }

]

const AddStaffDetail = (): JSXElement => {

  return <RecordDialog modalKey="add-staff" title="Add Staff Detail">

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


      <button type="submit" class="astaff-save">Save</button>
    </form>


  </RecordDialog>
}

export default AddStaffDetail
