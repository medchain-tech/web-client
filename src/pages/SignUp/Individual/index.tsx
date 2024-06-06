import { type JSXElement } from "solid-js";
import { SignUpTitle } from "@components/SignUp/Title";

export const Individual = (): JSXElement => {
    return (
        <SignUpTitle>
            <section class="signup-form-section page-individual">
                <h3 class="signup-form-heading">Tell us about yourself</h3>

                <p class="signup-form-subheading">Please fill in the details below to create your account and access personalized health services</p>

                <form class="signup-form">
                    <div class="signup-form-input-field">
                        <label class="signup-form-label">Name</label>
                        <input type="text" class="signup-form-input" />
                    </div>
                    <div class="signup-form-input-field">
                        <label class="signup-form-label">Email</label>
                        <input type="email" class="signup-form-input" />
                    </div>
                    <div class="signup-form-select-field">
                        <label class="signup-form-label">Country</label>
                        <div class="signup-form-select-wrapper">
                            <svg class="signup-form-select-arrow" aria-hidden={true} viewBox="0 0 24 24"><use href="#down"></use></svg>
                            <select class="signup-form-select">
                                <option value="Nigeria">Nigeria</option>
                            </select>
                        </div>
                    </div>
                    <div class="signup-form-select-field">
                        <label class="signup-form-label">State</label>
                        <div class="signup-form-select-wrapper">
                            <svg class="signup-form-select-arrow" aria-hidden={true} viewBox="0 0 24 24"><use href="#down"></use></svg>
                            <select class="signup-form-select">
                                <option value="Kwara">Kwara</option>
                            </select>
                        </div>
                    </div>
                    <div class="signup-form-input-field">
                        <label class="signup-form-label">Password</label>
                        <input type="password" class="signup-form-input" />
                    </div>
                    <div class="signup-form-input-field">
                        <label class="signup-form-label">Confirm Password</label>
                        <input type="password" class="signup-form-input" />
                    </div>

                    <button class="signup-form-submit button">Sign Up</button>
                </form>



            </section>

        </SignUpTitle>
    )
}
