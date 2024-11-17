import { UserRoundPen } from "lucide-react";
import { MapPinned } from "lucide-react";
import { Clock } from "lucide-react";
import { ContactRound } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Speech } from "lucide-react";


import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";




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

export const pricingOptions1 = [
  // 8 kw
  {
    title: "Cash",
    price: "$0",
    features: [
      "Energy Independence",
      "Zero Monthly Payments",
      "20 Tier 1 Panels",
      "20 microinverters",
      "30% Federal Tax Credit",
      "Full Ownership",
    ],
  },
  {
    title: "Financed",
    price: "$135",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
  {
    title: "Lease",
    price: "$165",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
];

export const pricingOptions2 = [
  // 10 kw
  {
    title: "Cash",
    price: "$0",
    features: [
      "Energy Independence",
      "Zero Monthly Payments",
      "25 Tier 1 Panels",
      "25 microinverters",
      "30% Federal Tax Credit",
      "Full Ownership",
    ],
  },
  {
    title: "Financed",
    price: "$10",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
  {
    title: "Lease",
    price: "$200",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
];

export const pricingOptions3 = [
  //12 kw
  {
    title: "Cash",
    price: "$0",
    features: [
      "Energy Independence",
      "Zero Monthly Payments",
      "30 Tier 1 Panels",
      "30 microinverters",
      "30% Federal Tax Credit",
      "Full Ownership",
    ],
  },
  {
    title: "Financed",
    price: "$10",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
  {
    title: "Lease",
    price: "$200",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
];

export const pricingOptions4 = [
  //14 kw
  {
    title: "Cash",
    price: "$0",
    features: [
      "Energy Independence",
      "Zero Monthly Payments",
      "35 Tier 1 Panels",
      "35 microinverters",
      "30% Federal Tax Credit",
      "Full Ownership",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "lorum ipsum dolor sit amet",
      "lorum ipsum dolor sit amet",
      "lorum ipsum",
      "lorum ipsum dolor sit amet",
    ],
  },
];

export const testimonials = [
  {
    user: "Lorem Ipsum",
    company: "Dolor Sit Amet Inc.",
    image: user1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum vestibulum justo, vel hendrerit nulla pretium eget.",
  },
  {
    user: "Consectetur Adipiscing",
    company: "Elit Solutions",
    image: user2,
    text: "Suspendisse potenti. Curabitur ac libero at purus viverra vehicula id at arcu. Integer scelerisque risus at velit dignissim.",
  },
  {
    user: "Vivamus Vehicula",
    company: "Malesuada Enterprises",
    image: user3,
    text: "Vivamus vehicula risus ut odio tincidunt, a cursus nunc mollis. Nullam sit amet eros non nisl consectetur dictum.",
  },
  {
    user: "Aliquam Tellus",
    company: "Orci Varius Corp.",
    image: user4,
    text: "Aliquam tellus nunc, gravida non ante in, scelerisque malesuada mauris. Donec eget elit ut ligula blandit ultrices.",
  },
  {
    user: "Curabitur Euismod",
    company: "Vestibulum Eget Co.",
    image: user5,
    text: "Curabitur euismod, arcu id ullamcorper fermentum, justo mi bibendum sem, a lacinia magna ex in sapien.",
  },
  {
    user: "Phasellus Volutpat",
    company: "Arcu Industries",
    image: user6,
    text: "Phasellus volutpat arcu nec eros luctus, vitae congue elit venenatis. Fusce et neque id lectus posuere condimentum.",
  },
];
