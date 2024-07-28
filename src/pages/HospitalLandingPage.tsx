import HospitalHero from "@/components/Sections/Hero/hospital";
import { JSXElement, Show, For } from "solid-js";
import {
  FeatureCard,
  FeatureCardRev,
} from "@/components/Cards/Hospital/feature";
import AdditionalFeaturesCard from "@/components/Cards/Hospital/addfeature";

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

  const addContent = [
    {
      heading: "Monitor and Track Patient Health Effectively",
      info: `Gain access to your patients’ health records to monitor their health
        status and progress over time. Provide better care with comprehensive
        and up-to-date information.`,
    },
    {
      heading: "Efficient Appointment and Communication Management",
      info: `Manage your availability and easily schedule appointments or calls with patients. Increase your visibility to patients and hospitals by showcasing your profile and specialties.`,
    },
    {
      heading: "Advanced Search for Specialized Care",
      info: `Allow patients to search for doctors by specialty, field of expertise, or specific conditions. Enable them to find hospitals filtered by services, departments, and specialties related to specific diseases for tailored healthcare solutions.`,
    },
  ];

  return (
    <>
      <HospitalHero />

      <div class="container mt-3 mx-auto w-[90%] poppins">
        <div class="flex flex-col gap-12 items-center py-4 my-4">
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
        {/* Additional Features Start  */}
        <div class="flex flex-col w-full items-center my-8 pt-10 gap-4">
          <h2 class="text-3xl font-semibold">
            Healthcare Providers'{" "}
            <span class="text-[#6833FB]">Additional Features</span>
          </h2>
          {/* Round Frame Start */}
          <div class="w-96 h-96 rounded-full border-dashed border-[0.37rem] border-blue-50 center p-2">
            <div class="w-full h-full bg-[#DEEFFE] rounded-full center">
              <div class="w-56 h-56 rounded-full">
                <img
                  class="w-full h-full object-cover object-right rounded-full"
                  src="/HomeScreen1.svg"
                  alt="image.svg"
                />
              </div>
            </div>
          </div>
          {/* Round Frame End */}
          <div class="flex flex-wrap w-full gap-[4rem] justify-center mt-[-12rem]">
            <div class="w-full flex flex-wrap justify-between">
              <AdditionalFeaturesCard
                heading={addContent[0].heading}
                info={addContent[0].info}
              />
              <AdditionalFeaturesCard
                heading={addContent[1].heading}
                info={addContent[1].info}
              />
            </div>
            <AdditionalFeaturesCard
              heading={addContent[2].heading}
              info={addContent[2].info}
            />
          </div>
        </div>
        {/* Additional Features End  */}
        {/* CTA 2 */}
        <div class="w-full h-96 bg-[var(--clr-stroke)] p-16 center">
          <div class="bg-[var(--clr-bg-primary)] w-full h-72 center rounded-2xl relative overflow-hidden">
            // Designs
            <img src="/Shape.svg" alt="" class="absolute left-0 -bottom-8" />
            <img src="/Shape2.svg" alt="" class="absolute right-0 top-0" />
            // Content
            <div class="w-[48rem] h-[11.75rem] flex flex-col items-center">
              <h2 class="font-bold text-4xl text-[var(--clr-content-2)] text-center">
                Ready to take your healthcare experience to the next level?
              </h2>
              <span class="flex flex-row gap-8 mt-12">
                <a href="#" class="btn-primary">
                  Get started now
                </a>
                <a
                  href="#"
                  class="flex btn-secondary flex-row items-center gap-2 duration-300"
                >
                  Book a demo
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* CTA 2 End */}
      </div>
    </>
  );
};

export default HospitalLandingPage;
