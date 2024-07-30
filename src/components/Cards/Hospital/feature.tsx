import { JSXElement } from "solid-js";
import { FeatureContent } from "@/types";

export const FeatureCard = ({ heading, info }: FeatureContent): JSXElement => {
  return (
    <>
      <div class="flex w-full gap-8 justify-around xl:justify-center bg-[#F9FBFE] p-5 rounded-3xl">
        <div class="w-[30%] xl:w-[40%] bg-gray-50">
          <img src="" alt="image" class="w-full h-full" />
        </div>
        <div class="w-[50%] xl:w-[40%] h-[300px] flex flex-col justify-around">
          <h2 class="text-3xl font-semibold">{heading}</h2>
          <p class="text-xl">{info}</p>
          <div class="w-40 h-14 bg-[#6833FB] text-white rounded-xl p-3 hover:bg-white hover:text-[#6833FB] border-[#6833FB] border-2">
            <a href="">Get started now</a>
          </div>
        </div>
      </div>
    </>
  );
};

export const FeatureCardRev = ({
  heading,
  info,
}: FeatureContent): JSXElement => {
  return (
    <>
      <div class="flex w-full gap-8 justify-around xl:justify-center bg-[#F9FBFE] p-5 rounded-3xl">
        <div class="w-[50%] xl:w-[40%] flex flex-col justify-around">
          <h2 class="text-3xl font-semibold">{heading}</h2>
          <p class="text-xl">{info}</p>
          <div class="w-40 h-14 btn-primary p-3">
            <a href="">Get started now</a>
          </div>
        </div>
        <div class="w-[30%] xl:w-[40%] h-[300px] bg-gray-50">
          <img src="" alt="image" class="w-full h-full" />
        </div>
      </div>
    </>
  );
};
