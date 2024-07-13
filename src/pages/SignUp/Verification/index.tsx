import { SignUpLayout } from "@/layouts/SignUp";
import { SidebarTimeline } from "@/layouts/SignUpSidebar";
import { JSXElement } from "solid-js";
import "./index.scss"

const Verification = (): JSXElement => {
	return <SignUpLayout sidebar={SidebarTimeline}>
		<h2 class="sverification-heading">Verification</h2>
		<p class="sverification-p">Enter the verification code sent to <span class="sverification-email">wasiumaleeka@gmail.com</span></p>

		<div class="sverification-time-bar">
			<span class="sverification-time">00:30</span>
			<a href="#" data-link>Resend</a>
		</div>
		<p class="sverification-msg">Already have an account? <a data-link href="#">Sign In</a></p>
	</SignUpLayout>
}

export default Verification;
