import { type JSXElement } from "solid-js";

const HospitalHero = (): JSXElement => {
  /**
   * HospitalHero - Hero section 
   */
  return (
    <section class="section1">
      <div class="poppins-regular relative flex flex-row items-center justify-center pb-8">
        <div class=" flex flex-col mt-28 w-[80%]">
          <span class="pl-24">
            <h3 class="font-bold text-2xl mb-3 text-[#FB6833]">
              For Healthcare Providers
            </h3>
            <h2>
              Optimize Your Healthcare Services And Operations with{" "}
              <span class="text-[#6833FB]">Advanced EHR Solutions</span>
            </h2>

            <span class="flex flex-row gap-8 mt-12">
              <a href="#" class="buttonSignUp">
                Get started now
              </a>
              <a
                href="#"
                class="flex text-[#6F7177] flex-row items-center gap-2 hover:gap-4 duration-300"
              >
                Book a demo
              </a>
            </span>
          </span>
        </div>
        <div class="HomeScreen1 relative">
          <img class="w-full h-full" src="/img2.svg" />
        </div>
      </div>
    </section>
  );
};

export default HospitalHero;
