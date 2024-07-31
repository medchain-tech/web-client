import { type JSXElement } from "solid-js";
import HomeScreen1 from "./components/HomeScreen1";
import { Tag, ImageTag } from "./components/Tags";
import { ImageTagContent, TagContent } from "./types";

function App(): JSXElement {
  const tagContent: TagContent[] = [
    {
      info: "Analytics System for hospitals",
      image: "",
      position: "-left-5 top-3",
    },
    {
      info: "Patient Database System",
      image: "",
      position: "-right-40 top-24",
    },
    {
      info: "Comparison System",
      image: "",
      position: "-right-40 bottom-24",
    },
    {
      info: "Disease Incidence Database System",
      image: "",
      position: "-left-2 bottom-3",
    },
  ];

  const imageTagContent: ImageTagContent[] = [
    {
      image: "",
      position: "right-8 top-3",
    },
    {
      image: "",
      position: "-left-7",
    },
    {
      image: "",
      position: "right-8 bottom-3",
    },
  ];
  return (
    <>
      <HomeScreen1 />
      <div class="w-[90%] mt-3 mx-auto poppins justify-between md:max-lg:gap-6">
        <div class="flex flex-col h-fit gap-12 items-center py-4 my-4">
          <button class="btn w-40 h-14 border-slate-50 border-2 rounded-xl">
            About
          </button>
          {/* Features Start  */}
          <div class="flex flex-col xl:flex-row w-full gap-14 justify-around xl:justify-center p-5 rounded-3xl">
            <div class="xl:w-[40%]">
              {/* Round Frame Start */}
              <div class="w-96 h-96 rounded-full border-dashed border-[0.37rem] border-blue-50 center p-8 relative">
                <div class="w-full h-full border-dashed border-[0.27rem] border-blue-50 rounded-full center">
                  <div class="w-56 h-56 flex-col center rounded-full bg-[var(--clr-bg-primary)] shadow-[0_2.53px_89.36px_0_#0000000A]">
                    <img src="/logoPlain.svg" alt="logo.svg" />
                    <img
                      src="/logoPlain2.svg"
                      alt="logo2.svg"
                      class="w-[70%]"
                    />
                  </div>
                </div>
                <Tag
                  info={tagContent[0].info}
                  image={tagContent[0].image}
                  position={tagContent[0].position}
                />
                <Tag
                  info={tagContent[1].info}
                  image={tagContent[1].image}
                  position={tagContent[1].position}
                />
                <Tag
                  info={tagContent[2].info}
                  image={tagContent[2].image}
                  position={tagContent[2].position}
                />
                <Tag
                  info={tagContent[3].info}
                  image={tagContent[3].image}
                  position={tagContent[3].position}
                />
                {/* Image Tag  */}
                <ImageTag
                  image={imageTagContent[0].image}
                  position={imageTagContent[0].position}
                />
                <ImageTag
                  image={imageTagContent[1].image}
                  position={imageTagContent[1].position}
                />
                <ImageTag
                  image={imageTagContent[2].image}
                  position={imageTagContent[2].position}
                />
                {/* Image Tag End */}
              </div>
              {/* Round Frame End */}
            </div>
            <div class="xl:w-[40%] h-[300px] flex flex-col justify-around">
              <h2 class="text-3xl font-semibold">
                <span class="text-[var(--clr-btn-primary)]">Health Record</span>{" "}
                Computing Database System
              </h2>
              <p class="text-xl">
                MedChain is a health record computing database system leveraging
                blockchain technology and a pay as-you-use model to improve
                healthcare delivery, enhance patient outcomes, and contribute to
                the advancement of healthcare in Africa.
              </p>
              <div class="w-40 h-14 bg-[#6833FB] text-white rounded-xl p-3 hover:bg-white hover:text-[#6833FB] border-[#6833FB] border-2">
                <a href="">Get started now</a>
              </div>
            </div>
          </div>
          {/* Features End*/}
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
}

export default App;
