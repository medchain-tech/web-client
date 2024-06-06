import { JSXElement, ParentProps } from "solid-js"
import "./index.scss"

export const SignUpTitle = (props: ParentProps):JSXElement => {

    return (
        <div class="signup">
            <div class="signup-sidebar">
                <h1 class="signup-title">
                    Let's set up Your <span class="signup-title-span">Medchain</span> account
                </h1>
            </div>


            {props.children}

            <svg viewBox="0 0 162 240" class="signup-decoration">
                <use href="#decoration"></use>
            </svg>
        </div>
    )

}
