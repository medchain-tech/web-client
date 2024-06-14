import "./index.scss"
import CustomInput from "@/components/CustomInput";
import { type JSXElement } from "solid-js";

const Home = (): JSXElement => {

  return (
    <>
      <h1>Home Page</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur exercitationem tempora delectus omnis placeat iste itaque blanditiis sed? Ad quaerat, dicta suscipit minima voluptatum beatae. Odio deserunt autem porro est?</p>
      <div class="home-form">
        <CustomInput />
      </div>
    </>
  )


}


export default Home
