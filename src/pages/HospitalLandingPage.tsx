import HospitalHero from "@/components/Sections/Hero/hospital";
import { JSXElement, Show, For } from "solid-js";
import {
  FeatureCard,
  FeatureCardRev,
} from "@/components/Cards/Hospital/feature";

const HospitalLandingPage = (): JSXElement => {
  // Dummy dynamic content: content structure is subjected to change
  const content: { heading: string; info: string }[] = [
    {
      heading: "Comprehensive Health Recording Management",
      info: `Manage patient health records with precision, ensuring accurate and
            up-to-date information is always accessible. Utilize advanced tools
            for inputting and monitoring disease incidence, aiding in effective
            outbreak and trend management.`,
    },
    {
      heading: "Streamlined Staff and Patient Monitoring",
      info: `Track staff performance, schedules, and duties efficiently. Get a comprehensive overview of patient statuses, treatment progress, and healthcare needs to ensure optimal care delivery.`,
    },
    {
      heading: "Efficient Department Management",
      info: `Organize and display hospital departments clearly, making it easy for users to find relevant departments and their services. Enhance operational efficiency and patient navigation within the hospital.`,
    },
    {
      heading: "Insightful Doctors and Patient Statistics",
      info: `Empower doctors to enter patient information, treatment details, and outcomes efficiently. Access an overview of patient statistics, including the number of patients treated, ongoing treatments, discharge rates, and monitor patient mortality rates to enhance healthcare quality.`,
    },
  ];
  return (
    <>
      <HospitalHero />

      <div class="container mt-3 mx-auto w-[90%] poppins mb-6">
        <div class="flex flex-col gap-12 items-center py-4">
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
    </>
  );
};

export default HospitalLandingPage;
