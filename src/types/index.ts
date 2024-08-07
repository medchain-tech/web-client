export type AccountType = "personal" | "professional" | "hospital";
export type FeatureContent = { heading: string; info: string };
export type AddFeatureContent = {
  heading: string;
  info: string;
  image: string;
};
export type TagContent = { info: string; image: string; position: string };
export type ImageTagContent = { image: string; position: string };
export type ChainTagContent = {
  content: string;
  index: number;
  active: boolean;
  info?: string;
};
export type ImpactCardContent = {
  heading: string;
  content: string;
  image: string;
};
export type CarouselCardContent = {
  name: string;
  comment: string;
  image: string;
};
