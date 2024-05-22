import { JSXElement, Show } from "solid-js";
import "./index.scss"

export const BaseNavigation = (): JSXElement => {

    return (
        <Show when={true}>
            <header class="basenav-header">
                <div class="basenav-logo">
                    <h1 class="basenav-logo-text">logo</h1>
                </div>

                <nav class="basenav-nav">
                    <ul class="basenav-nav-ul">
                        <li class="basenav-nav-li">
                            <a href="#" class="basenav-nav-a">
                                <svg class="basenav-nav-icon" viewBox="0 0 512 512"><use href="#home"></use></svg>
                                <span class="basenav-nav-text">Home</span>
                            </a>
                        </li>

                        <li class="basenav-nav-li">
                            <a href="#" class="basenav-nav-a">
                                <svg class="basenav-nav-icon" viewBox="0 0 512 512"><use href="#home"></use></svg>
                                <span class="basenav-nav-text">Home</span>
                            </a>
                        </li>

                        <li class="basenav-nav-li">
                            <details class="basenav-nav-details">
                                <summary class="basenav-nav-summary">
                                    <svg class="basenav-nav-icon" viewBox="0 0 512 512"> <use href="#home"></use></svg>
                                    <span class="basenav-nav-summary-text">Find</span>

                                    <svg class="basenav-nav-summary-arrow" viewBox="0 0 24 24"><use href="#down"></use></svg>
                                </summary>
                                <ul class="basenav-nav-details-list">
                                    <li class="basenav-nav-details-li">
                                        <a href="#" class="basenav-nav-details-link">Specialist</a>
                                    </li>

                                    <li class="basenav-nav-details-li">
                                        <a href="#" class="basenav-nav-details-link">Hospital</a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li class="basenav-nav-li">
                            <details class="basenav-nav-details">
                                <summary class="basenav-nav-summary">
                                    <svg class="basenav-nav-icon" viewBox="0 0 512 512"> <use href="#home"></use></svg>
                                    <span class="basenav-nav-summary-text">Find</span>

                                    <svg class="basenav-nav-summary-arrow" viewBox="0 0 24 24"><use href="#down"></use></svg>
                                </summary>
                                <ul class="basenav-nav-details-list">
                                    <li class="basenav-nav-details-li">
                                        <a href="#" class="basenav-nav-details-link">Specialist</a>
                                    </li>

                                    <li class="basenav-nav-details-li">
                                        <a href="#" class="basenav-nav-details-link">Hospital</a>
                                    </li>
                                </ul>
                            </details>
                        </li>

                        <li class="basenav-nav-li">
                            <a href="#" class="basenav-nav-a lowered-link">
                                <svg class="basenav-nav-icon" viewBox="0 0 512 512"><use href="#home"></use></svg>
                                <span class="basenav-nav-text">Home</span>
                            </a>
                        </li>

                        <li class="basenav-nav-li">
                            <a href="#" class="basenav-nav-a">
                                <svg class="basenav-nav-icon" viewBox="0 0 512 512"><use href="#home"></use></svg>
                                <span class="basenav-nav-text">Home</span>
                            </a>
                        </li>




                    </ul>
                </nav>


                <div class="basenav-user">
                    <img src="" alt="User" class="basenav-user-image" />
                        <div class="basenav-user-content">
                            <strong class="basenav-user-name">Osho Adeola</strong>
                            <span class="basenav-user-email">adeolaosho@medchain.com</span>
                        </div>

                        <a href="#" class="basenav-user-logout">
                            <svg class="basenav-nav-icon" viewBox="0 0 512 512">
                                <title>Logout</title>
                                <use href="#home"></use>
                            </svg>
                        </a>
                </div>
            </header>

        </Show>

    )


}
