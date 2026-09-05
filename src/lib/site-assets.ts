const img = (name: string) => `/images/${encodeURIComponent(name)}`;

export const IMAGES = {
  logo: img("ecomtik.png"),
  commandCenter: img("GLOBAL COMMERCE COMMAND CENTER.jpg"),
  logoDesign: img("LOGO DESIGN & BRAND ARCHITECTURE.jpg"),
  webDesign: img("HIGH-CONVERTING WEBSITE DESIGN.jpg"),
  packaging: img("PRODUCT PACKAGING DESIGN SERVICE.jpg"),
  marketing: img("DIGITAL MARKETING SERVICE.jpg"),
  uaeSetup: img("UAE COMPANY SETUP SERVICE.jpg"),
  brandPathway: img("THE BRAND BUILDING PATHWAY.jpg"),
  amazonPathway: img("THE AMAZON GROWTH PATHWAY.jpg"),
  globalNetwork: img("GLOBAL MARKETPLACE NETWORK.jpg"),
  dubai: img("DUBAI STRATEGY BRAIN TRUST.jpg"),
  factory: img("THE BRAND FACTORY PROCESS.jpg"),
  trajectory: img("COMMAND YOUR UPWARD TRAJECTORY.jpg"),
} as const;
