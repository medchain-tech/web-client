import { AddFeatureContent } from "@/types";
import { JSXElement } from "solid-js";

const AdditionalFeaturesCard = ({
  heading,
  info,
  image,
}: AddFeatureContent): JSXElement => {
  const colors = [
    "text-blue-400",
    "text-green-500",
    "text-red-600",
    "text-orange-600",
    "text-yellow-500",
    "text-lime-500",
    "text-purple-500",
    "text-pink-500",
    "text-rose-600",
    "text-fuchsia-500",
    "text-violet-600",
  ];
  // Random color selector
  const index = Math.floor(Math.random() * colors.length);
  return (
    <div class="w-[36rem] h-[15rem] relative bg-white rounded-3xl flex flex-col justify-center gap-3 px-9">
      {/* Image tag */}
      <div class="w-24 h-24 flex justify-center items-center absolute left-7 -top-12 bg-slate-200 rounded-full">
        <img src={image} alt="img" />
      </div>
      {/* Contents */}
      <h3 class={`text-lg font-semibold ${colors[index]}`}>{heading}</h3>
      <p class="font-normal">{info}</p>
    </div>
  );
};

export default AdditionalFeaturesCard;
