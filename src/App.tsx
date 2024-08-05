import { type JSXElement } from "solid-js";
import HomeScreen1 from "@components/HomeScreen1";
import { ChainTag, Tag, ImageTag } from "@components/Tags";
import {
  tagContent,
  imageTagContent,
  chainTagContent,
  impactContent,
  carouselContents,
} from "./data/Application";
import ImpactCard from "@components/Cards/Home/impact";
import CarouselCard from "@components/Cards/Home/carousel";
import { For } from "solid-js";
import {
  RiArrowsArrowDropLeftLine,
  RiArrowsArrowDropRightLine,
} from "solid-icons/ri";

function App(): JSXElement {
  return (
    <div class="bg-[var(--clr-bg-secondary-low)]">
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

          {/* WHY MEDCHAIN  */}
          <h2 class="font-semibold text-3xl">
            Why <span class="text-[var(--clr-btn-primary)]">Medchain? </span>
          </h2>
          <div class="flex flex-col xl:flex-row w-full gap-14 justify-around xl:justify-center p-5 rounded-3xl">
            <div class="xl:w-[35%] flex flex-col gap-2">
              <ChainTag
                content={chainTagContent[0].content}
                index={chainTagContent[0].index}
                active={chainTagContent[0].active}
              />
              <ChainTag
                content={chainTagContent[1].content}
                index={chainTagContent[1].index}
                active={chainTagContent[1].active}
              />
              <ChainTag
                content={chainTagContent[2].content}
                index={chainTagContent[2].index}
                active={chainTagContent[2].active}
              />
              <ChainTag
                content={chainTagContent[3].content}
                index={chainTagContent[3].index}
                active={chainTagContent[3].active}
              />
              <ChainTag
                content={chainTagContent[4].content}
                index={chainTagContent[4].index}
                active={chainTagContent[4].active}
              />
              <ChainTag
                content={chainTagContent[5].content}
                index={chainTagContent[5].index}
                active={chainTagContent[5].active}
              />
            </div>
            <div class="xl:w-[60%] h-[300px] bg-[var(--clr-bg-cmp)] flex flex-col gap-3 p-5 rounded-2xl">
              <h2 class="text-3xl font-semibold">
                {chainTagContent[0].index}
                {". "}
                {chainTagContent[0].content}
              </h2>
              <p class="text-[var(--clr-content-6)] text-xl font-normal">
                {chainTagContent[0].info}
              </p>
            </div>
          </div>

          {/* Features End*/}
        </div>

        {/* Impact 1  */}
        <div class="flex flex-col h-fit gap-12 items-center py-4 my-4">
          <button class="btn w-40 h-14 border-slate-50 border-2 rounded-xl">
            Impact
          </button>
          <h2 class="font-semibold text-3xl">
            Impact of{" "}
            <span class="text-[var(--clr-btn-primary)]">Medchain </span> on
            African Medical Centres
          </h2>

          {/* Features Start  */}
          <div class="flex flex-col xl:flex-row xl:flex-wrap w-full gap-14 justify-around xl:justify-center p-5 rounded-3xl relative">
            {/* Background  */}
            {/* <div class="w-[80%] h-[80%] rounded-full border-dashed border-[0.37rem] border-[var(--clr-bg-secondary)] center p-24 absolute -z-[1]">
              <div class="w-full h-full border-dashed border-[0.27rem] border-[var(--clr-bg-secondary)] rounded-full center"></div>
            </div> */}
            {/* Background End  */}
            <For each={impactContent}>
              {(item) => (
                <ImpactCard
                  heading={item.heading}
                  content={item.content}
                  image={item.image}
                />
              )}
            </For>
          </div>
          {/* Features End*/}
        </div>
        {/* Impact 1 End  */}

        {/* Impact 2  */}
        <div class="flex flex-col h-fit gap-12 items-center py-4 my-4">
          <button class="btn w-40 h-14 border-slate-50 border-2 rounded-xl">
            Impact
          </button>
          <h2 class="font-semibold text-3xl">
            What <span class="text-[var(--clr-btn-primary)]">People </span> say
            About us
          </h2>

          {/* Carousel  */}
          <CarouselCard
            name={carouselContents[0].name}
            comment={carouselContents[0].comment}
            image={carouselContents[0].image}
          />
          {/* Carousel End*/}

          {/* Navigator */}
          <div class="flex gap-10">
            <div
              class={`size-14 center bg-slate-200 hover:bg-[var(--clr-btn-primary)] hover:text-[var(--clr-bg-primary)] rounded-full`}
            >
              <RiArrowsArrowDropLeftLine class="size-28" />
            </div>
            <div
              class={`size-14 center bg-slate-200 hover:bg-[var(--clr-btn-primary)] hover:text-[var(--clr-bg-primary)] rounded-full`}
            >
              <RiArrowsArrowDropRightLine class="size-28" />
            </div>
          </div>
        </div>
        {/* Impact 2 End  */}
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
              <a href="#" class="btn-primary">
                Get started now
              </a>
              <a
                href="#"
                class="flex btn-secondary flex-row items-center gap-2 duration-300"
              >
                Download app
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* CTA 2 End */}
    </div>
  );
}

export default App;
