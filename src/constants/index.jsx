import { UserRoundPen } from "lucide-react";
import { MapPinned } from "lucide-react";
import { Clock } from "lucide-react";
import { ContactRound } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Speech } from "lucide-react";




export const navItems = [
    { label: "Why Us", href: "#whyus" },
    { label: "Our Process", href: "#ourprocess" },
    { label: "Pricing", href: "#pricing" },
    { label: "Testimonials", href: "#testimonials" },
  ];


  export const features = [
    {
      icon: <UserRoundPen />,
      text: "Personalized Service",
      description:
        "As a local company, we offer tailored solutions and personalized customer support to ensure your unique needs and preferences are met.",
    },
    {
      icon: <MapPinned />,
      text: "Expert Local Knowledge",
      description:
        " We have a deep understanding of local regulations, weather conditions, and incentives, providing optimized solutions specifically for your area.",
    },
    {
      icon: <Clock />,
      text: "Faster Response Times",
      description:
        "As a local company, we ensure quicker response times and more efficient service for installations and maintenance.",
    },
    {
      icon: <ContactRound />,
      text: "Dedicated to Your Community",
      description:
        "Our commitment is to serve our neighbors with the utmost care and dedication, reflecting our pride in our local community.",
    },
    {
      icon: <ShieldCheck />,
      text: "Quality Assurance",
      description:
        "We take pride in our work and reputation, leading to higher quality installations and exceptional customer care.",
    },
    {
      icon: <Speech />,
      text: "Easier Communication",
      description:
        "With us, you have direct access to decision-makers, making it easier to communicate and resolve any issues effectively.",
    },
];
  
export const checklistItems = [
  {
    title: "Schedule a Consultation",
    description:
      "Let’s discuss your energy goals and design a solar plan tailored to your needs.",
  },
  {
    title: "Get a Site Survey",
    description:
      "Our experts will assess your property to ensure the best system placement and efficiency.",
  },
  {
    title: "Installation",
    description:
      "Our professional team installs your solar panels with precision and care.",
  },
  {
    title: "Produce Power",
    description:
      "Start generating clean, renewable energy and enjoy the benefits of solar power.",
  },
];
