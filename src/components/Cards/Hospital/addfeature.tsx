import { FeatureContent } from "@/types";
import { JSXElement } from "solid-js";

const AdditionalFeaturesCard = ({
  heading,
  info,
}: FeatureContent): JSXElement => {
  return (
    <div class="w-[36rem] h-[15rem] relative bg-white rounded-3xl flex flex-col justify-center gap-3 px-9">
      {/* Image tag */}
      <div class="w-24 h-24 flex justify-center items-center absolute left-7 -top-12 bg-slate-200 rounded-full">
        <img src="" alt="img" />
      </div>
      {/* Contents */}
      <h3 class="text-lg text-blue-600 font-semibold">{heading}</h3>
      <p class="font-normal">{info}</p>
    </div>
  );
};

export default AdditionalFeaturesCard;
