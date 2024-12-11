import { UserRoundPen } from "lucide-react";
import { MapPinned } from "lucide-react";
import { Clock } from "lucide-react";
import { ContactRound } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Speech } from "lucide-react";


import profilepic from "../assets/profile-pictures/profile_icon.png";





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

export const testimonials = [
  {
    user: "Tita Garcia",
    image: profilepic,
    text: "My solar consultant was very helpful, he has been stopping by at least once every other year to make sure we are happy. Our system has been working great for the past 5 years. He’s very friendly and helpful, we recommend this company to anyone looking for solar energy.",
  },
  {
    user: "Daniela Gallegos",
    image: profilepic,
    text: "Our solar consultant was very easy to work with, he stops by our home every once in a while to make sure everything is ok. We got a $1000 check from Avetec to pay for our first several months plus our electric company cancellation fees. We also got most of our federal tax credit of $10,000+ during our first tax season of having our panels.",
  },
  {
    user: "Joshua Kennedy",
    image: profilepic,
    text: "I have had 43 solar panels now for about two years. My average bill is usually a credit of $60. And in the summer it’s usually around $30. I received a check for $1,300 when I first signed up for solar panels. My consultant was very helpful and knowledgeable on helping me deciding the amount of solar panels to efficiently cover my light bill cost. It exceeded my expectations. I will highly recommend.",
  },
  {
    user: "Caramelo Simental",
    image: profilepic,
    text: "I bought my solar panels two years ago and have been extremely happy with avetecsolar service. They help me with every step from beginning to end. In two years we haven’t paid anything to Reliant Energy.",
  },
  {
    user: "Andrea T",
    image: profilepic,
    text: "My sales representative was great! He had good communication, very friendly, had a smooth service, and most of all the referral money that I received for referring my sister. Thank you again Avetec Solar",
  },
  {
    user: "Patricia Austin",
    image: profilepic,
    text: "Getting solar is the best thing to do, belive me! It will save you lots and lots of money. Is very easy working with this company, we compared other companies and avetec  gave us the best price and service!!",
  },
];