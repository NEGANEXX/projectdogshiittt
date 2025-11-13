export interface Destination {
  id: string
  name: string
  description: string
  image: string
  location: string
  population: string
  bestTime: string
  highlights: string[]
  attractions: string[]
  culture: string
  cuisine: string
  images: string[]
}

export const destinationsData: Destination[] = [
  {
    id: 'marrakech',
    name: 'Marrakech',
    description: 'The Red City with vibrant souks and historic palaces',
    image: 'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    location: 'Central Morocco',
    population: '1.2 million',
    bestTime: 'March to May, September to November',
    highlights: [
      'Djemaa el-Fna square - UNESCO World Heritage site',
      'Bahia Palace - 19th century palace with stunning architecture',
      'Koutoubia Mosque - Iconic 12th century minaret',
      'Majorelle Garden - Beautiful botanical garden',
      'Saadian Tombs - 16th century royal necropolis',
    ],
    attractions: [
      'Jardin Majorelle',
      'Medina of Marrakech',
      'El Badi Palace',
      'Menara Gardens',
      'Atlas Mountains day trips',
    ],
    culture: 'Marrakech is a vibrant city known for its rich history, colorful souks, and lively atmosphere. The city combines traditional Moroccan culture with modern amenities.',
    cuisine: 'Famous for tagines, couscous, pastilla, and traditional mint tea. The food scene ranges from street food in Djemaa el-Fna to fine dining in riads.',
    images: [
      'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 'fes',
    name: 'Fes',
    description: 'Ancient medina and spiritual heart of Morocco',
    image: 'https://images.unsplash.com/photo-1559925523-10de9e23cf90?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    location: 'Northern Morocco',
    population: '1.1 million',
    bestTime: 'April to June, September to November',
    highlights: [
      'Fes el-Bali - One of the world\'s largest car-free urban areas',
      'Chouara Tannery - Ancient leather tanning facility',
      'Al-Attarine Madrasa - 14th century Islamic school',
      'Bou Inania Madrasa - Architectural masterpiece',
      'Royal Palace of Fes - Impressive 14th century palace',
    ],
    attractions: [
      'Medina of Fes (UNESCO World Heritage)',
      'Chouara Tannery',
      'Al-Attarine Madrasa',
      'Dar Batha Museum',
      'Mellah (Jewish Quarter)',
    ],
    culture: 'Fes is Morocco\'s spiritual and cultural capital, home to the world\'s oldest university. The medina is a maze of narrow streets, traditional crafts, and historic monuments.',
    cuisine: 'Known for its traditional Moroccan dishes, especially pastilla (sweet and savory pie), and the famous Fassi cuisine. The medina offers authentic street food experiences.',
    images: [
      'https://images.unsplash.com/photo-1559925523-10de9e23cf90?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 'chefchaouen',
    name: 'Chefchaouen',
    description: 'The Blue Pearl nestled in the Rif Mountains',
    image: 'https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    location: 'Rif Mountains, Northern Morocco',
    population: '43,000',
    bestTime: 'April to June, September to October',
    highlights: [
      'Blue-washed medina - Entire old town painted in shades of blue',
      'Kasbah Museum - 15th century fortress',
      'Ras El Maa waterfall - Natural spring at the edge of town',
      'Spanish Mosque - Scenic viewpoint',
      'Local handicrafts - Traditional wool products and leather goods',
    ],
    attractions: [
      'Blue Medina',
      'Kasbah Museum',
      'Ras El Maa Waterfall',
      'Spanish Mosque',
      'Rif Mountains hiking',
    ],
    culture: 'Chefchaouen is famous for its blue-painted buildings, creating a unique and photogenic atmosphere. The town has a relaxed, bohemian vibe and is known for its cannabis culture.',
    cuisine: 'Local specialties include goat cheese, honey, and traditional Rif mountain dishes. The medina has many small cafes and restaurants.',
    images: [
      'https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 'sahara-desert',
    name: 'Sahara Desert',
    description: 'Endless dunes and starlit nights in the desert',
    image: 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    location: 'Southeastern Morocco',
    population: 'Nomadic',
    bestTime: 'October to April (avoid summer heat)',
    highlights: [
      'Erg Chebbi dunes - Massive sand dunes up to 150m high',
      'Camel trekking - Traditional desert transportation',
      'Desert camps - Overnight stays under the stars',
      'Sunset and sunrise views - Breathtaking natural beauty',
      'Berber culture - Experience traditional nomadic lifestyle',
    ],
    attractions: [
      'Erg Chebbi Dunes',
      'Merzouga village',
      'Desert camps',
      'Camel trekking',
      'Sandboarding and quad biking',
    ],
    culture: 'The Sahara Desert offers a unique experience of Berber nomadic culture. Visitors can stay in traditional desert camps, enjoy Berber music, and experience the tranquility of the desert.',
    cuisine: 'Traditional Berber meals including tagines cooked in the sand, mint tea, and dates. Meals are often prepared over open fires in desert camps.',
    images: [
      'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 'essaouira',
    name: 'Essaouira',
    description: 'Coastal gem with blue boats and historic medina',
    image: 'https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
    location: 'Atlantic Coast, Western Morocco',
    population: '77,000',
    bestTime: 'April to October',
    highlights: [
      'Historic medina - UNESCO World Heritage site',
      'Fishing port - Colorful blue boats and fresh seafood',
      'Ramparts - 18th century fortifications',
      'Beaches - Long sandy beaches perfect for water sports',
      'Gnawa music - Traditional music festivals',
    ],
    attractions: [
      'Medina of Essaouira (UNESCO)',
      'Fishing Port',
      'Skala de la Ville (Ramparts)',
      'Essaouira Beach',
      'Mogador Island',
    ],
    culture: 'Essaouira is a laid-back coastal town with a rich history. It\'s known for its Portuguese and French colonial architecture, vibrant arts scene, and annual Gnawa music festival.',
    cuisine: 'Famous for fresh seafood, especially grilled fish at the port. The town is also known for its argan oil products and local pastries.',
    images: [
      'https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80',
    ],
  },
  {
    id: 'atlas-mountains',
    name: 'Atlas Mountains',
    description: 'Majestic peaks and traditional Berber villages',
    image: 'https://images.unsplash.com/photo-1560789590-ee4cc7125967?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    location: 'Central Morocco',
    population: 'Rural communities',
    bestTime: 'May to September',
    highlights: [
      'Toubkal National Park - Home to Mount Toubkal (4,167m)',
      'Berber villages - Traditional mountain communities',
      'Hiking trails - Scenic routes through valleys and peaks',
      'Traditional architecture - Stone and mud-brick buildings',
      'Local markets - Weekly souks in mountain towns',
    ],
    attractions: [
      'Mount Toubkal (highest peak)',
      'Imlil Valley',
      'Ourika Valley',
      'Ait Benhaddou (UNESCO)',
      'Traditional Berber villages',
    ],
    culture: 'The Atlas Mountains are home to traditional Berber communities who maintain their ancient customs and way of life. The region offers authentic cultural experiences and stunning natural beauty.',
    cuisine: 'Traditional Berber cuisine including tagines, couscous, and local bread. Meals are often prepared with fresh mountain ingredients and served in traditional settings.',
    images: [
      'https://images.unsplash.com/photo-1560789590-ee4cc7125967?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1539650116574-75c0c6d73a6e?w=1200&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&auto=format&fit=crop&q=80',
    ],
  },
]

export function getDestinationById(id: string): Destination | undefined {
  return destinationsData.find((dest) => dest.id === id)
}

