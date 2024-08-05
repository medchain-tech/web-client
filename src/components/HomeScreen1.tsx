import { FaRegularCirclePlay } from "solid-icons/fa";
import { JSXElement } from "solid-js";

const HomeScreen1 = (): JSXElement => {
  return (
    <section class="section1">
      <div class="poppins-regular w-full relative h-[80svh] lg:max-xl:h-[55svh]">
        <div class="w-full lg:max-xl:w-[70%] xl:w-[60%] h-full flex flex-col pt-12 xl:pt-28 border-none items-center absolute left-0 z-10">
          <span class="px-10 xl:pl-40">
            <h3 class="font-bold text-2xl mb-3 text-[#FB6833]">MedChain</h3>
            <h2>
              Transforming Healthcare with{" "}
              <span class="text-[#6833FB]">Secure EHR Solutions</span>
            </h2>
            <p class=" text-[20px] mt-3 text-[#6F7177]">
              A transformative approach to managing healthcare records and
              monitor diseases enhancing healthcare delivery in Africa.
            </p>

            <span class="flex flex-row gap-8 mt-12">
              <a href="#" class="buttonSignUp">
                Get started now
              </a>
              <a
                href="#"
                class="flex text-[#6F7177] flex-row items-center gap-2 hover:gap-4 duration-300"
              >
                <FaRegularCirclePlay size={27} /> How it works
              </a>
            </span>
          </span>
        </div>
        <div class="w-[60%] h-full absolute right-0 mask-image-gradient invisible lg:visible">
          <img class="w-full xl:h-full shadow-left" src="/HomeScreen1.svg" />
        </div>
      </div>

      <div class="w-full bg-[var(--clr-bg-cmp)]">
        <div class=" w-[63%] m-auto flex flex-row justify-between py-8">
          <span class="flex flex-row w-[26%] gap-4 items-center">
            <h2>1M+</h2>
            <p>Customers visit every months.</p>
          </span>
          <span class="flex flex-row w-[26%] gap-4 items-center">
            <h2>93%</h2>
            <p>Satisfaction rate from our Customers.</p>
          </span>
          <span class="flex flex-row w-[26%] gap-4 items-center">
            <h2>4.9</h2>
            <p>Average customer ratings out of 5.00!</p>
          </span>
        </div>
      </div>
    </section>
  );
};

export default HomeScreen1;
