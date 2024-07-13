import { SignUpLayout } from "@/layouts/SignUp/index"
import { SidebarInfo } from "@/layouts/SignUpSidebar"
import { JSXElement } from "solid-js"
import "./index.scss"
import ChooseAccountType from "@/components/SignUp/ChooseAccountType"

export const Setup = (): JSXElement => {

	return <SignUpLayout sidebar={SidebarInfo}>
		<ChooseAccountType />
	</SignUpLayout>
}
