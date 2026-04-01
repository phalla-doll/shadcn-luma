export type Listing = {
    id: string
    type: string
    price: number
    beds: number | null
    baths: number | null
    sqft: number | null
    district: string
    address: string
    description: string
    coordinates: [number, number] // [lng, lat]
    agent: {
        name: string
        phone: string
        avatar?: string
    }
}

export const listings: Listing[] = [
    {
        id: "1",
        type: "Modern Condo",
        price: 89000,
        beds: 1,
        baths: 1,
        sqft: 450,
        district: "Boeung Keng Kang 1",
        address: "Street 278, BKK1",
        description:
            "Modern 1-bedroom condo near Aeon Mall 1. Features open plan living, modern kitchen, and building amenities including pool and gym.",
        coordinates: [104.92, 11.553],
        agent: { name: "Sophea Chan", phone: "+855 12 345 678" },
    },
    {
        id: "2",
        type: "Luxury Penthouse",
        price: 320000,
        beds: 3,
        baths: 2,
        sqft: 1800,
        district: "Chamkarmon",
        address: "Street 63, BKK1",
        description:
            "Stunning penthouse with panoramic river views. Private rooftop pool, floor-to-ceiling windows, and premium finishes throughout.",
        coordinates: [104.918, 11.551],
        agent: { name: "Dara Kim", phone: "+855 17 234 567" },
    },
    {
        id: "3",
        type: "Colonial Villa",
        price: 750000,
        beds: 5,
        baths: 4,
        sqft: 4500,
        district: "Daun Penh",
        address: "Sisowath Quay",
        description:
            "Beautifully restored colonial villa on the Riverside. Original architectural details, modern amenities, large garden, and Mekong views.",
        coordinates: [104.9225, 11.56],
        agent: { name: "Vannak Oum", phone: "+855 92 456 789" },
    },
    {
        id: "4",
        type: "Shophouse",
        price: 185000,
        beds: null,
        baths: 2,
        sqft: 1200,
        district: "Khan 7 Makara",
        address: "Monivong Boulevard",
        description:
            "Prime commercial shophouse on main road. Ideal for retail or restaurant. High foot traffic area with excellent visibility.",
        coordinates: [104.915, 11.565],
        agent: { name: "Chantrea Sok", phone: "+855 70 567 890" },
    },
    {
        id: "5",
        type: "Serviced Apartment",
        price: 125000,
        beds: 2,
        baths: 2,
        sqft: 900,
        district: "Tonle Bassac",
        address: "Olympia City, Street 271",
        description:
            "Furnished serviced apartment in Olympia City complex. Includes housekeeping, utilities, building amenities, and 24-hour security.",
        coordinates: [104.925, 11.548],
        agent: { name: "Piseth Mean", phone: "+855 88 678 901" },
    },
    {
        id: "6",
        type: "Studio Condo",
        price: 52000,
        beds: 0,
        baths: 1,
        sqft: 280,
        district: "Tuol Kork",
        address: "Street 380",
        description:
            "Brand new studio condo in upcoming development. Compact design with smart storage, modern finishes, and shared rooftop amenities.",
        coordinates: [104.91, 11.572],
        agent: { name: "Bopha Ly", phone: "+855 99 789 012" },
    },
    {
        id: "7",
        type: "Villa with Pool",
        price: 450000,
        beds: 4,
        baths: 3,
        sqft: 3200,
        district: "Tuol Kork",
        address: "Street 315",
        description:
            "Spacious villa in gated community with private pool. Modern design, landscaped garden, and close to international schools.",
        coordinates: [104.905, 11.575],
        agent: { name: "Sokha Keo", phone: "+855 12 890 123" },
    },
    {
        id: "8",
        type: "Borey Villa",
        price: 168000,
        beds: 4,
        baths: 2,
        sqft: 2400,
        district: "Sen Sok",
        address: "Borey Peng Huoth",
        description:
            "Modern borey villa with 4 bedrooms. Open plan living, covered parking, and access to borey amenities including park and convenience store.",
        coordinates: [104.88, 11.58],
        agent: { name: "Nary Ung", phone: "+855 17 901 234" },
    },
    {
        id: "9",
        type: "Apartment Building",
        price: 290000,
        beds: 8,
        baths: 8,
        sqft: 5600,
        district: "Meanchey",
        address: "Street 371",
        description:
            "8-unit apartment building with strong rental income. Each unit is 1-bedroom with separate utilities and parking.",
        coordinates: [104.93, 11.545],
        agent: { name: "Veasna Chea", phone: "+855 86 012 345" },
    },
    {
        id: "10",
        type: "Land Plot",
        price: 95000,
        beds: null,
        baths: null,
        sqft: 4300,
        district: "Sen Sok",
        address: "Near AEON Mall 3",
        description:
            "400sqm land plot on main road. Suitable for residential or commercial development. All utilities available at boundary.",
        coordinates: [104.875, 11.585],
        agent: { name: "Kimsan Heng", phone: "+855 95 123 456" },
    },
    {
        id: "11",
        type: "Condo",
        price: 135000,
        beds: 2,
        baths: 2,
        sqft: 750,
        district: "Diamond Island",
        address: "Koh Pich, Tower B",
        description:
            "Modern 2-bedroom condo on Diamond Island. Floor-to-ceiling windows, premium finishes, gym, pool, and river views.",
        coordinates: [104.9355, 11.55],
        agent: { name: "Sreypov Chhorn", phone: "+855 88 234 567" },
    },
    {
        id: "12",
        type: "Shophouse",
        price: 210000,
        beds: null,
        baths: 2,
        sqft: 1400,
        district: "Russian Market",
        address: "Street 450",
        description:
            "Corner shophouse near Russian Market. Excellent location for café or boutique. Popular tourist and expat area.",
        coordinates: [104.917, 11.5475],
        agent: { name: "Virak Boun", phone: "+855 17 345 678" },
    },
    {
        id: "13",
        type: "Modern Villa",
        price: 380000,
        beds: 5,
        baths: 4,
        sqft: 4000,
        district: "Chroy Changvar",
        address: "River Road",
        description:
            "Architect-designed modern villa with Mekong river views. 5 bedrooms, home office, wine cellar, and infinity pool.",
        coordinates: [104.935, 11.575],
        agent: { name: "Linda Yin", phone: "+855 92 456 789" },
    },
    {
        id: "14",
        type: "Condo",
        price: 72000,
        beds: 1,
        baths: 1,
        sqft: 400,
        district: "Sen Sok",
        address: "AEON Mall 2 area",
        description:
            "Affordable 1-bedroom condo walking distance to AEON Mall 2. Modern kitchen, building pool, and 24-hour security.",
        coordinates: [104.885, 11.578],
        agent: { name: "Phalla Tep", phone: "+855 70 567 890" },
    },
    {
        id: "15",
        type: "Renovated Apartment",
        price: 155000,
        beds: 2,
        baths: 2,
        sqft: 850,
        district: "Boeung Keng Kang 1",
        address: "Street 306",
        description:
            "Fully renovated apartment in prime BKK1. High ceilings, original wooden floors, modern bathrooms, and shared garden.",
        coordinates: [104.921, 11.552],
        agent: { name: "Rotha Nget", phone: "+855 99 678 901" },
    },
    {
        id: "16",
        type: "Land",
        price: 45000,
        beds: null,
        baths: null,
        sqft: 6500,
        district: "Pur Senchey",
        address: "National Road 4",
        description:
            "600sqm land plot in developing area. Road frontage, near new borey developments, suitable for residential construction.",
        coordinates: [104.86, 11.565],
        agent: { name: "Chanthou Roeun", phone: "+855 86 789 012" },
    },
    {
        id: "17",
        type: "Townhouse",
        price: 125000,
        beds: 3,
        baths: 2,
        sqft: 1100,
        district: "Toul Tum Poung",
        address: "Street 360",
        description:
            "3-bedroom townhouse near VIP area. Modern renovation, small garden, covered parking, and quiet neighborhood.",
        coordinates: [104.928, 11.549],
        agent: { name: "Kannika Prum", phone: "+855 95 890 123" },
    },
    {
        id: "18",
        type: "Luxury Condo",
        price: 198000,
        beds: 2,
        baths: 2,
        sqft: 950,
        district: "Diamond Island",
        address: "Koh Pich, Tower A",
        description:
            "High floor luxury condo with panoramic city and river views. Premium finishes, concierge service, and rooftop infinity pool.",
        coordinates: [104.936, 11.551],
        agent: { name: "Sothyra Om", phone: "+855 12 901 234" },
    },
    {
        id: "19",
        type: "Commercial Space",
        price: 420000,
        beds: null,
        baths: null,
        sqft: 2000,
        district: "Chamkarmon",
        address: "Monivong Boulevard",
        description:
            "Ground floor commercial space on major boulevard. High ceiling, street frontage, ideal for bank, restaurant, or retail flagship.",
        coordinates: [104.916, 11.556],
        agent: { name: "Borin Tim", phone: "+855 17 012 345" },
    },
    {
        id: "20",
        type: "Borey Townhome",
        price: 78000,
        beds: 3,
        baths: 2,
        sqft: 1300,
        district: "Dangkao",
        address: "Borey Piphop Thmey",
        description:
            "Affordable 3-bedroom townhome in new borey development. Modern design, small courtyard, and community facilities.",
        coordinates: [104.87, 11.555],
        agent: { name: "Vichea Kao", phone: "+855 88 123 456" },
    },
]
