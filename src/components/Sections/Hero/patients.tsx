import { type JSXElement } from "solid-js";

const PatientHero = (): JSXElement => {
  /**
   * PatientHero - Hero section
   */
  return (
    <section class="section1">
      <div class="poppins-regular relative flex flex-row items-center justify-center pb-8">
        <div class=" flex flex-col mt-28 w-[80%]">
          <span class="pl-24">
            <h3 class="font-bold text-2xl mb-3 text-[#FB6833]">
              For Individuals
            </h3>
            <h2>
              Healthcare Services, <br />
              <span class="text-[#6833FB]">Your Health Records,</span> <br />
              Anytime, Anywhere.
            </h2>

            <span class="flex flex-row gap-8 mt-12">
              <a href="#" class="buttonSignUp">
                Get started now
              </a>
              <a
                href="#"
                class="flex text-[#6F7177] flex-row items-center gap-2 hover:gap-4 duration-300"
              >
                Download app
              </a>
            </span>
          </span>
        </div>
        <div class="HomeScreen1 relative">
          <img class="w-full h-full" src="/image9.svg" />
        </div>
      </div>
    </section>
  );
};

export default PatientHero;
