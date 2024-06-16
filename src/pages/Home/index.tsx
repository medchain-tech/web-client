import "./index.scss"
import CustomInput, { CustomInputProps } from "@/components/CustomInput";
import { MEDICAL_UNITS } from "@/composables/data";
import { type JSXElement } from "solid-js";

const inputProps: CustomInputProps = {
  type: "text",
  label: "Unit",
  id: "add-staff-unit",
  placeholder: "e.g. Intensive Care Unit (ICU)",
  required: true,
  options: MEDICAL_UNITS
}


const Home = (): JSXElement => {

  return (
    <>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem tempora delectus omnis placeat iste itaque blanditiis sed? Ad quaerat, dicta suscipit minima voluptatum beatae. Odio deserunt autem porro est?</p>
      <div class="home-form">
        <CustomInput {...inputProps} />
      </div>
    </>
  )


}


export default Home
