export interface PackageType {
    id: number;
    title: string;
    duration: string;
    price: string;
    description: string;
  }
  
  export const packages: PackageType[] = [
    {
      id: 1,
      title: "Full Char Dham Yatra",
      duration: "10 Days / 9 Nights",
      price: "₹50,000",
      description:
        "Complete spiritual journey covering Kedarnath, Badrinath, Gangotri & Yamunotri.",
    },
    {
      id: 2,
      title: "Do Dham Package",
      duration: "6 Days / 5 Nights",
      price: "₹30,000",
      description:
        "Visit Kedarnath & Badrinath with comfortable travel and local support.",
    },
    {
      id: 3,
      title: "Kedarnath Special",
      duration: "3 Days / 2 Nights",
      price: "₹15,000",
      description:
        "Quick and budget-friendly Kedarnath yatra package.",
    },
    {
      id: 4,
      title: "Tungnath & Chopta",
      duration: "2 Days / 1 Nights",
      price: "₹12,000",
      description:
        "Quick and budget-friendly Tungnath & Chopta package.",
    },
  ];
  