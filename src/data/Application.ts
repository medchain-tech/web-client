import { TagContent, ImageTagContent, ChainTagContent } from "@/types";

export const tagContent: TagContent[] = [
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

export const imageTagContent: ImageTagContent[] = [
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

export const chainTagContent: ChainTagContent[] = [
    {
        content: "On-demand Subscription Model",
        index: 1,
        active: true,
        info: `MedChain allows hospitals to subscribe to EHR resources on demand and pay onlyfor what they use. This model offers cost-effectiveness, especially for hospitals that cannot afford to invest heavily in expensive infrastructure and maintenance costs.`
    },
    {
        content: "Large Database Computing System",
        index: 2,
        active: false
    },
    {
        content: "Disease Incidence Monitoring",
        index: 3,
        active: false
    },
    {
        content: "Data Security and Privacy",
        index: 4,
        active: false
    },
    {
        content: "Interoperability and Standardization",
        index: 5,
        active: false
    },
    {
        content: "Integration with Healthcare Infrastructure",
        index: 6,
        active: false
    }
]