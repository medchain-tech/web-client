import { JSXElement } from "solid-js";
import { For, Show } from "solid-js";
import {
  FeatureCard,
  FeatureCardRev,
} from "@/components/Cards/Hospital/feature";
import PatientHero from "@/components/Sections/Hero/patients";

const PatientsLandingPage = (): JSXElement => {
  // Dummy dynamic content: content structure is subjected to change
  const content: { heading: string; info: string }[] = [
    {
      heading: "Comprehensive Health Records at Your Fingertips",
      info: `Access and review your complete health records, including medical history, prescriptions, lab results, and visit summaries. Visualize your health data with intuitive graphs showing trends in blood pressure, glucose levels, and other vital statistics over time.`,
    },
    {
      heading: "Stay Connected with Your Hospital",
      info: `View specific information from your hospital visits. Track your treatment progress with detailed health graphs and access comprehensive information on diagnosed diseases, including descriptions, treatments, and care plans.`,
    },
    {
      heading: "Seamless Personal Information Management",
      info: `Easily enter and update your personal details, including name, date of birth, contact information, and emergency contacts. Our user-friendly registration process allows you to create an account quickly with options for email sign-up.`,
    },
    {
      heading: "Direct Communication with Your Doctors",
      info: `Schedule and make voice or video calls with your doctors directly through our platform. Stay connected and get timely consultations without leaving your home.`,
    },
  ];
  return (
    <>
      <PatientHero />
      <div class="w-[90%] mt-3 mx-auto poppins justify-between md:max-lg:gap-6">
        <div class="flex flex-col h-fit gap-12 items-center py-4 my-4">
          <button class="btn w-40 h-14 border-slate-50 border-2 rounded-xl">
            Features
          </button>
          {/* Features */}
          <For each={content}>
            {(item, index) => (
              // Alternate the display of image and content
              <Show
                when={index() % 2 == 0}
                fallback={
                  <FeatureCardRev heading={item.heading} info={item.info} />
                }
              >
                <FeatureCard heading={item.heading} info={item.info} />
              </Show>
            )}
          </For>
        </div>
      </div>
      {/* CTA 2 */}
      <div class="w-full h-96 bg-[var(--clr-stroke)] p-16 center">
        <div class="bg-[var(--clr-bg-primary)] w-full h-72 center rounded-2xl relative overflow-hidden">
          <img src="/Shape.svg" alt="" class="absolute left-0 -bottom-8" />
          <img src="/Shape2.svg" alt="" class="absolute right-0 top-0" />
          <div class="w-[48rem] h-[11.75rem] flex flex-col items-center">
            <h2 class="font-bold text-4xl text-[var(--clr-content-2)] text-center">
              Ready to take your healthcare experience to the next level?
            </h2>
            <span class="flex flex-row gap-8 mt-12">
              <a href="" class="w-44 h-20 object-cover">
                <img src="/image11.svg" alt="" class="w-full h-full" />
              </a>

              <a href="" class="w-44 h-20 object-cover">
                <img src="/image12.svg" alt="" class="w-full h-full" />
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* CTA 2 End */}
    </>
  );
};

export default PatientsLandingPage;
