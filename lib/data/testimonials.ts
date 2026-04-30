export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  role: string;
  audience: "learner" | "maker";
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "I shipped my first SaaS in nine days. Sandhai gave me my first hundred customers in the next nine.",
    name: "Vikram A.",
    role: "Indie maker · ex-product manager",
    audience: "maker",
  },
  {
    id: "t2",
    quote:
      "The course made me dangerous with Claude. The marketplace made me profitable.",
    name: "Lakshmi P.",
    role: "Designer turned founder",
    audience: "learner",
  },
  {
    id: "t3",
    quote:
      "Stopped paying for ads. Started getting featured. My MRR 4x'd in a quarter.",
    name: "Rohan K.",
    role: "Solopreneur",
    audience: "maker",
  },
  {
    id: "t4",
    quote:
      "I came in not knowing what an API was. I left with a SaaS doing $3k a month.",
    name: "Sneha R.",
    role: "Career switcher",
    audience: "learner",
  },
  {
    id: "t5",
    quote:
      "Best community I've been a part of. Honest feedback, zero ego, real revenue.",
    name: "Amit J.",
    role: "Founder, two products on Sandhai",
    audience: "maker",
  },
  {
    id: "t6",
    quote:
      "Every lesson ends with you shipping. By week six I had three things in production.",
    name: "Mehul S.",
    role: "Frontend dev → AI builder",
    audience: "learner",
  },
];
