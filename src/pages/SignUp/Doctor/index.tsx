import { SignUpTitle } from "@/components/SignUp/Title"
import { JSXElement } from "solid-js"

export const Doctor = (): JSXElement => {
    return (
        <SignUpTitle>
            <section class="signup-form-section page-doctor">

                <h3 class="signup-form-heading">Tell us about yourself</h3>

                <p class="signup-form-subheading">Join Medchain to streamline your practice</p>
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
                        <label class="signup-form-label">Phone Number</label>
                        <input inputmode="numeric" class="signup-form-input" placeholder="09044449940" />
                    </div>
                    <button class="signup-form-submit button">Next</button>
                    
                </form> 
            </section>

        </SignUpTitle>
    )
 


}
