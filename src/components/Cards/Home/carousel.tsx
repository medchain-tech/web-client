import { JSXElement } from "solid-js";
import { CarouselCardContent } from "@/types";

const CarouselCard = ({
  name,
  comment,
  image,
}: CarouselCardContent): JSXElement => {
  return (
    <div class="flex flex-col xl:flex-row xl:flex-wrap w-full gap-14 justify-around xl:justify-center items-center p-5 rounded-3xl">
      {/* Round Frame Start */}
      <div class="w-96 h-96 rounded-full border-dashed border-[0.37rem] border-blue-50 center p-2">
        <div class="w-full h-full bg-[#DEEFFE] rounded-full center">
          <div class="w-56 h-56 rounded-full">
            <img
              class="w-full h-full object-cover object-right rounded-full"
              src={image}
              alt="image.svg"
            />
          </div>
        </div>
      </div>
      {/* Round Frame End */}
      <div class="w-[80%] xl:w-[60%] h-[16rem] flex gap-3 rounded-3xl bg-white">
        <div class="flex flex-col justify-around p-8">
          <p class="font-medium text-xl text-[var(--clr-content-6)]">
            {comment}
          </p>
          <h4 class="text-[var(--clr-btn-primary)]">{name}</h4>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
