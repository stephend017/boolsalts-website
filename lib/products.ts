export type Product = {
  name: string;
  slug: string;
  type: string;
  tagline: string;
  shortDesc: string;
  longDesc: string;
  price: number;
  currency: string;
  color: string;
  bgColor: string;
  tag: string;
  image: string;
  bgImage: string;
  badges: string[];
  useCases: { icon: string; label: string; desc: string }[];
  ingredients: { name: string; amount: string; purpose: string }[];
  nutritionFacts: { label: string; per100ml: string; perServing: string }[];
  reviews: { name: string; role: string; text: string; avatar: string }[];
  faqs: { q: string; a: string }[];
};

export const products: Product[] = [
  {
    name: "Elderflower Lime",
    slug: "elderflower-lime",
    type: "Energy | Glucose-powered",
    tagline: "2PM Slump Breaker & Focus Booster",
    shortDesc:
      "A sharp, botanical lift that hits faster than water alone. No caffeine jitters — just pure, clean flow state.",
    longDesc:
      "Hydration is speed. We use glucose to force-feed electrolytes directly into your cells via the sodium-glucose co-transport mechanism. The result? Faster absorption than plain water or sugar-free alternatives. Paired with L-Theanine for calm, sustained focus and a floral elderflower & lime flavour that actually tastes good.",
    price: 4.5,
    currency: "€",
    color: "#7FD16E",
    bgColor: "#0d1a0d",
    tag: "WORKDAYS / WORKOUTS",
    image:
      "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579f_ElderflowerLime.png",
    bgImage:
      "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698f2ffad913bbf267d20985_product%20hover%20bg%20-%20lime.png",
    badges: ["Rapid Uptake", "45 Cals", "Laser Focus"],
    useCases: [
      {
        icon: "laptop",
        label: "Workdays",
        desc: "Beat the 2PM slump without the 4PM crash",
      },
      {
        icon: "dumbbell",
        label: "Workouts",
        desc: "Glucose-powered hydration for peak performance",
      },
      {
        icon: "plane",
        label: "Travel",
        desc: "Combat dehydration from flights and long commutes",
      },
    ],
    ingredients: [
      { name: "Sodium (Na)", amount: "450mg", purpose: "Primary electrolyte for fluid balance & nerve function" },
      { name: "Potassium (K)", amount: "150mg", purpose: "Muscle contraction & blood pressure regulation" },
      { name: "Calcium (Ca)", amount: "80mg", purpose: "Bone health & muscle signalling" },
      { name: "Magnesium (Mg)", amount: "60mg", purpose: "Energy metabolism & muscle recovery" },
      { name: "Phosphorus (P)", amount: "40mg", purpose: "ATP energy production" },
      { name: "L-Theanine", amount: "100mg", purpose: "Calm focus, reduces stress without sedation" },
      { name: "Glucose", amount: "11g", purpose: "Co-transports sodium for rapid cellular uptake" },
      { name: "Vitamin C", amount: "60mg", purpose: "Immune support & antioxidant protection" },
      { name: "Vitamin B6", amount: "1.4mg", purpose: "Energy metabolism & cognitive function" },
    ],
    nutritionFacts: [
      { label: "Energy", per100ml: "19 kcal", perServing: "45 kcal" },
      { label: "Carbohydrates", per100ml: "4.7g", perServing: "11g" },
      { label: "of which sugars", per100ml: "4.7g", perServing: "11g" },
      { label: "Protein", per100ml: "0g", perServing: "0g" },
      { label: "Fat", per100ml: "0g", perServing: "0g" },
      { label: "Sodium", per100ml: "193mg", perServing: "450mg" },
    ],
    reviews: [
      {
        name: "William Laast",
        role: "PM @ Zillow",
        text: "Swapped my afternoon cold brew for bool. The brain fog lifts quickly without the caffeine jitters. Game changer and pure flow state.",
        avatar:
          "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfc90282b5a88939f9d1_William%20Laast.jpg",
      },
      {
        name: "Kiyon Hahm",
        role: "Big Law Associate @ Cravath",
        text: "80-hr weeks require a calm and steady energy source, not just caffeine. bool's nootropic blend helps me ride out the tough weeks (yes, even at 2AM...)",
        avatar:
          "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bf369d0ddd3bb7458d15_Kiyon%20Hahm.jpg",
      },
      {
        name: "Mady Quek",
        role: "Fitness Geek",
        text: "Half Marathons in Singapore humidity are brutal. This is the only electrolyte that keeps me hitting PBs without that heavy, sugary stomach feeling.",
        avatar:
          "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfda90f7627055fae5fb_Mady%20Quek.jpg",
      },
    ],
    faqs: [
      {
        q: "When should I drink Elderflower Lime?",
        a: "Best before or during physical activity, or whenever you need a focus boost — the 2PM slump is prime time. The glucose in this formula helps transport electrolytes faster, so it works best when your body needs quick energy.",
      },
      {
        q: "Why does this one have calories?",
        a: "The glucose (11g) is intentional — not filler. It activates the sodium-glucose co-transport mechanism, which allows electrolytes to enter your cells up to 3x faster than sugar-free alternatives. Think of it as the key that unlocks the door.",
      },
      {
        q: "Can I drink it every day?",
        a: "Yes. It's lightly carbonated, clean, and designed for daily use. Many of our customers replace their afternoon coffee with it.",
      },
    ],
  },
  {
    name: "Passionfruit Mango",
    slug: "passionfruit-mango",
    type: "Recovery | Sugar-free",
    tagline: "No More Hangovers & Brain Fog",
    shortDesc:
      "A clinical stack of electrolytes, liver-aiding DHM and nootropics to combat hangovers, silence hangxiety and rehydrate instantly.",
    longDesc:
      "Don't let last night ruin today. Passionfruit Mango is built around DHM (Dihydromyricetin) — a clinically-studied compound shown to accelerate alcohol metabolism — combined with a full 5-salt electrolyte spectrum and our nootropic blend of L-Theanine & Glycine. Zero sugar, zero regret. Rehydrate before you sleep, wake up dangerous.",
    price: 4.5,
    currency: "€",
    color: "#FF7B2C",
    bgColor: "#1a0d00",
    tag: "WEEKENDS / RECOVERY",
    image:
      "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698e9f26dfba73c60d95579a_PassionfruitMango.png",
    bgImage:
      "https://cdn.prod.website-files.com/68cce2a5535cef7be0a64950/698f2fc4331ff3b1bd484467_product%20bg%20hover-mango.png",
    badges: ["Nootropics", "0 Cal", "Hangover Support"],
    useCases: [
      {
        icon: "bottle",
        label: "Weekends",
        desc: "Take before bed after a big night out",
      },
      {
        icon: "brain",
        label: "Brain Fog",
        desc: "Nootropics clear the mental haze fast",
      },
      {
        icon: "muscle",
        label: "Recovery",
        desc: "Replenish electrolytes lost through alcohol",
      },
    ],
    ingredients: [
      { name: "Sodium (Na)", amount: "450mg", purpose: "Primary electrolyte for fluid balance & nerve function" },
      { name: "Potassium (K)", amount: "150mg", purpose: "Muscle contraction & blood pressure regulation" },
      { name: "Calcium (Ca)", amount: "80mg", purpose: "Bone health & muscle signalling" },
      { name: "Magnesium (Mg)", amount: "60mg", purpose: "Energy metabolism & muscle recovery" },
      { name: "Phosphorus (P)", amount: "40mg", purpose: "ATP energy production" },
      { name: "L-Theanine", amount: "100mg", purpose: "Calm focus, reduces hangxiety" },
      { name: "Glycine", amount: "500mg", purpose: "Sleep quality & liver detox support" },
      { name: "DHM (Dihydromyricetin)", amount: "300mg", purpose: "Accelerates alcohol metabolism, reduces hangover severity" },
      { name: "Vitamin B Complex", amount: "—", purpose: "Replenishes B vitamins depleted by alcohol" },
      { name: "Vitamin C", amount: "60mg", purpose: "Antioxidant & immune support" },
    ],
    nutritionFacts: [
      { label: "Energy", per100ml: "2 kcal", perServing: "0 kcal" },
      { label: "Carbohydrates", per100ml: "0g", perServing: "0g" },
      { label: "of which sugars", per100ml: "0g", perServing: "0g" },
      { label: "Protein", per100ml: "0.2g", perServing: "0.5g" },
      { label: "Fat", per100ml: "0g", perServing: "0g" },
      { label: "Sodium", per100ml: "193mg", perServing: "450mg" },
    ],
    reviews: [
      {
        name: "Ethan Kovar",
        role: "Professional Party Animal",
        text: "Hangovers fear bool. Took one before passing out and woke up feeling dangerous. The only way to survive the weekend...",
        avatar:
          "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfa2211349d9896e791a_Ethan%20Kovar.jpg",
      },
      {
        name: "Zain Yousef",
        role: "Unemployed (made all his money on crypto)",
        text: "Finally, an electrolyte that doesn't taste like ass.",
        avatar:
          "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bfaf5f722932ed33c418_Zain%20Yousef.jpg",
      },
      {
        name: "Kiyon Hahm",
        role: "Big Law Associate @ Cravath",
        text: "I never go out without making sure I have a bool back at home. Absolutely love bool and it helps me feel 100% the next morning.",
        avatar:
          "https://cdn.prod.website-files.com/68cce1f7405e389390e50935/6960bf369d0ddd3bb7458d15_Kiyon%20Hahm.jpg",
      },
    ],
    faqs: [
      {
        q: "When should I drink Passionfruit Mango?",
        a: "Right before you go to sleep after drinking. Your body does its best recovery work while you sleep, so giving it DHM, electrolytes and nootropics before bed maximises the effect. You can also drink it the morning after if you forgot.",
      },
      {
        q: "What is DHM and does it actually work?",
        a: "Dihydromyricetin (DHM) is a flavonoid extracted from the Japanese Raisin Tree. Multiple peer-reviewed studies show it accelerates alcohol metabolism and reduces hangover severity. It's the most clinically-studied anti-hangover compound available.",
      },
      {
        q: "Is this really zero sugar?",
        a: "Yes. We use stevia and natural flavours. No aspartame, no sucralose, no sugar alcohols that bloat you. Just clean, tropical taste.",
      },
      {
        q: "Can I drink it if I'm not hungover?",
        a: "100%. The electrolyte and nootropic stack works great as a daily hydration drink, especially for anyone wanting zero-calorie hydration with cognitive support.",
      },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
