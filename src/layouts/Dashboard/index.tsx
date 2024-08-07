import "./index.scss"
import { Component, ParentProps } from "solid-js"
import { Sidebar } from "@/components/(dashboard)/sidebar"
import { Header } from "@/components/(dashboard)/header"
import { Assets } from "@/components/Assets"



const Dashboard: Component<ParentProps> = (props) => {

  return <section class="dashboard">
    <Sidebar />
    <div class="dcontent">
      <Header />
      <div class="dbody">
        {props.children}
      </div>

      <Assets />
    </div>
  </section>




}


export default Dashboard
