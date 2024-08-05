import { JSXElement } from "solid-js";
import { ImpactCardContent } from "@/types";
import { colors } from "@/data/Application";

const ImpactCard = ({
  heading,
  content,
  image,
}: ImpactCardContent): JSXElement => {
  // Random color selector
  const index = Math.floor(Math.random() * colors.length);
  return (
    <div class="w-[80%] xl:w-[45%] h-[23.3rem] flex gap-3 rounded-3xl bg-white p-4">
      <div class="size-12 center bg-slate-200 rounded-full mt-1">
        <img src={image} alt="" />
      </div>
      <div class="w-[80%] flex flex-col gap-3 pt-5">
        <h2 class={`font-semibold text-3xl ${colors[index]}`}>{heading}</h2>
        <p class="font-medium text-xl text-[var(--clr-content-6)]">{content}</p>
      </div>
    </div>
  );
};

export default ImpactCard;
