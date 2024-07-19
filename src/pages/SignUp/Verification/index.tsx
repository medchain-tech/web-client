import { SignUpLayout } from "@/layouts/SignUp";
import { SidebarTimeline } from "@/layouts/SignUpSidebar";
import { JSXElement } from "solid-js";
import "./index.scss"
import VerificationCode from "@/components/VerificationCode";
import { useNavigate, useParams } from "@solidjs/router";
import { AccountType } from "@/types";

const Verification = (): JSXElement => {
	const params = useParams();
	const navigate = useNavigate()
	const accountType = params.accountType as AccountType;

	const submitVerificationCode = (code: string) => {
		// TODO: verifying that the number is correct

		const number = Number(code)
		if (Number.isNaN(code)) {
			return;
		}

		let nextPage = "";
		switch (accountType) {
			case "hospital":
				nextPage = `/signup/${accountType}/needs`
				break;
			case "personal":
			case "professional":
			default:
				nextPage = `/signup/${accountType}/profile`;
				break;
		}


		navigate(nextPage)



	}


	return <SignUpLayout sidebar={SidebarTimeline}>
		<h2 class="sverification-heading">Verification</h2>
		<p class="sverification-p">Enter the verification code sent to <span class="sverification-email">wasiumaleeka@gmail.com</span></p>


		<form class="sverification-form">
			<VerificationCode onComplete={submitVerificationCode} id="verification-code" />
		</form>

		<div class="sverification-time-bar">
			<span class="sverification-time">00:30</span>
			<a href="#" data-link>Resend</a>
		</div>
		<p class="sverification-msg">Already have an account? <a data-link href="#">Sign In</a></p>
	</SignUpLayout>
}

export default Verification;
