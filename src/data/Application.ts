import {
  TagContent,
  ImageTagContent,
  ChainTagContent,
  ImpactCardContent,
  CarouselCardContent,
} from "@/types";

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
    info: `MedChain allows hospitals to subscribe to EHR resources on demand and pay onlyfor what they use. This model offers cost-effectiveness, especially for hospitals that cannot afford to invest heavily in expensive infrastructure and maintenance costs.`,
  },
  {
    content: "Large Database Computing System",
    index: 2,
    active: false,
  },
  {
    content: "Disease Incidence Monitoring",
    index: 3,
    active: false,
  },
  {
    content: "Data Security and Privacy",
    index: 4,
    active: false,
  },
  {
    content: "Interoperability and Standardization",
    index: 5,
    active: false,
  },
  {
    content: "Integration with Healthcare Infrastructure",
    index: 6,
    active: false,
  },
];

export const impactContent: ImpactCardContent[] = [
  {
    heading: "Research and Analytics",
    content: `The consolidated database provides a rich source for research
                  and analytics. Researchers can analyze anonymized patient data
                  to identify patterns, trends, and insights that can lead to
                  advancements in medical treatments and healthcare practices
                  specific to the African context.`,
    image: "",
  },
  {
    heading: "Disease Management",
    content: `Comprehensive EHR resources enable effective disease surveillance and outbreak
management. Medical centers can monitor the prevalence and spread of diseases,
identify at-risk populations, and implement timely interventions.`,
    image: "",
  },
  {
    heading: "Telemedicine Healthcare",
    content: `MedChain enhances telemedicine capabilities, allowing healthcare providers to remotely access patient records and provide consultations. This is particularly
beneficial in remote areas with limited access to specialized healthcare.`,
    image: "",
  },
  {
    heading: "Continuity of Care",
    content: `The system promotes continuity of care by enabling seamless sharing of patient
information across different healthcare facilities. This ensures that healthcare
providers have access to complete and up-to-date medical histories, leading to
better-informed diagnoses and treatment decisions.`,
    image: "",
  },
  {
    heading: "Quality Improvement",
    content: `MedChain facilitates data-driven quality improvement initiatives. Hospitals can
analyze aggregated data to identify areas for improvement, implement evidence
based practices, and enhance patient safety protocols.`,
    image: "",
  },
  {
    heading: "Resource Efficiency",
    content: `By subscribing to EHR resources on-demand and paying-as-they-use, hospitals can
optimize resource utilization and reduce costs associated with maintaining
individual databases. This allows them to allocate resources more efficiently and
focus on delivering quality healthcare services.`,
    image: "",
  },
];

export const colors = [
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

export const carouselContents: CarouselCardContent[] = [
  {
    name: "Dr. Merch",
    comment: `MedChain integrates with existing healthcare infrastructure,
                  allowing healthcare providers to use information from all
                  points along the care continuum. This integration enables
                  efficient and timely decision-making in patient care.`,
    image: "/HomeScreen1.svg",
  },
  {
    name: "Dr. Merch",
    comment: `MedChain integrates with existing healthcare infrastructure,
                  allowing healthcare providers to use information from all
                  points along the care continuum. This integration enables
                  efficient and timely decision-making in patient care.`,
    image: "/HomeScreen1.svg",
  },
  {
    name: "Dr. Merch",
    comment: `MedChain integrates with existing healthcare infrastructure,
                  allowing healthcare providers to use information from all
                  points along the care continuum. This integration enables
                  efficient and timely decision-making in patient care.`,
    image: "/HomeScreen1.svg",
  },
];
