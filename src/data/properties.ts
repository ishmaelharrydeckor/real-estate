export interface Property {
  id: string;
  title: string;
  status: "For Sale" | "For Rent";
  price: number;
  beds: number;
  baths: number;
  landSize: string;
  garage: number;
  location: string;
  images: string[];
  description: string;
  featured: boolean;
  yearBuilt: number;
}

export const mockProperties: Property[] = [
  {
    id: "prop-1",
    title: "The Pavilion: Ultra-Modern Cantonments Villa",
    status: "For Sale",
    price: 850000,
    beds: 5,
    baths: 6,
    landSize: "0.28 Acres",
    garage: 3,
    location: "Cantonments, Accra",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Located in the heart of Cantonments, this architectural masterpiece features an open-concept layout, fully integrated smart home controls, a private infinity pool, a professional-grade kitchen, and top-tier security systems. Perfect for diplomatic families or executives looking for luxury living in Accra.",
    featured: true,
    yearBuilt: 2024
  },
  {
    id: "prop-2",
    title: "Emerald Heights: 3-Bedroom Penthouse",
    status: "For Rent",
    price: 4500, // Monthly rent in USD
    beds: 3,
    baths: 3.5,
    landSize: "280 sqm",
    garage: 2,
    location: "Airport Residential, Accra",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "This executive penthouse overlooks Accra's most prestigious skyline. It features floor-to-ceiling windows, premium Spanish porcelain tiles, a wrapping terrace, a modern European kitchen, concierge service, and access to a shared rooftop wellness gym and pool.",
    featured: true,
    yearBuilt: 2023
  },
  {
    id: "prop-3",
    title: "Aura Residence: Contemporary East Legon Townhouse",
    status: "For Sale",
    price: 520000,
    beds: 4,
    baths: 4.5,
    landSize: "0.15 Acres",
    garage: 2,
    location: "East Legon, Accra",
    images: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Nestled in a quiet enclave of East Legon, this stylish townhouse balances security with modern charm. It offers spacious bedrooms, a private landscaped yard, a dynamic media room, and fits the lifestyle of growing modern Ghanaian families.",
    featured: true,
    yearBuilt: 2024
  },
  {
    id: "prop-4",
    title: "The Sanctuary: Tropical Oasis Villa",
    status: "For Sale",
    price: 1200000,
    beds: 6,
    baths: 7,
    landSize: "0.55 Acres",
    garage: 4,
    location: "Ridge, Accra",
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An exceptional luxury estate situated in the high-end diplomatic district of Ridge. The property boasts mature landscaped gardens, detailed hardwood paneling, a pool house with a summer kitchen, solar water heating systems, and fully integrated backup generators.",
    featured: true,
    yearBuilt: 2022
  },
  {
    id: "prop-5",
    title: "Heritage Manor: Ahodwo Luxury Estate",
    status: "For Sale",
    price: 680000,
    beds: 5,
    baths: 5.5,
    landSize: "0.45 Acres",
    garage: 3,
    location: "Ahodwo, Kumasi",
    images: [
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Bringing world-class design to Kumasi, this premium estate in Ahodwo features dynamic architectural high ceilings, wrap-around balconies, private staff quarters, a high-tech home cinema, and high-security smart perimeter control systems.",
    featured: false,
    yearBuilt: 2023
  },
  {
    id: "prop-6",
    title: "The Oasis: Labone Mid-Century Modern Apartment",
    status: "For Rent",
    price: 3200,
    beds: 2,
    baths: 2.5,
    landSize: "165 sqm",
    garage: 1,
    location: "Labone, Accra",
    images: [
      "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1502005229762-fc1b2b812ca5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An elegant mid-century apartment in Labone. Combining retro wooden features with contemporary minimalist fixtures, this residence is walking distance to Accra's finest eateries, offering urban luxury and high accessibility.",
    featured: false,
    yearBuilt: 2021
  },
  {
    id: "prop-7",
    title: "Vantage View: Airport Hills Mansion",
    status: "For Sale",
    price: 1800000,
    beds: 7,
    baths: 8,
    landSize: "0.75 Acres",
    garage: 5,
    location: "Airport Hills, Accra",
    images: [
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527030280862-64139fbe04ca?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1599809275671-b5941cabc7a5?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "Set in Accra's most secure and elite gated community, this palatial residence includes a personal lift, a full-sized tennis court, separate guest house, double-height receiving parlor, and panoramic views of the surrounding Airport Hills area.",
    featured: false,
    yearBuilt: 2024
  },
  {
    id: "prop-8",
    title: "Lakeside Retreat: Modernist Kumasi Villa",
    status: "For Sale",
    price: 750000,
    beds: 5,
    baths: 5.5,
    landSize: "0.48 Acres",
    garage: 3,
    location: "Ridge, Kumasi",
    images: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=80"
    ],
    description: "An elegant modernist retreat situated on a lush plot in Ridge, Kumasi. Featuring organic stone masonry, floating cedar wood staircases, wrap-around pool, backup water filtration, and full generator systems, it represents the absolute peak of modern Ashanti Region luxury.",
    featured: false,
    yearBuilt: 2023
  }
];
