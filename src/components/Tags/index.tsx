import { JSXElement } from "solid-js";
import { TagContent, ImageTagContent } from "@/types";

export const Tag = ({ info, image, position }: TagContent): JSXElement => {
  return (
    <>
      {/* Tag  */}
      <div
        class={`w-60 h-12 center gap-2 bg-[var(--clr-bg-primary)] absolute ${position} rounded-3xl shadow-[0_3px_56px_0_#0000000A]`}
      >
        {/* Image Tag  */}
        <div class="size-7 center bg-slate-200 rounded-full">
          <img src={image} alt="" />
        </div>
        {/* Image Tag End */}
        <h3 class="text-xs font-semibold">{info}</h3>
      </div>
      {/* Tag End  */}
    </>
  );
};

export const ImageTag = ({ image, position }: ImageTagContent): JSXElement => {
  return (
    <div
      class={`size-14 center bg-slate-200 rounded-full absolute ${position}`}
    >
      <img src={image} alt="" />
    </div>
  );
};
