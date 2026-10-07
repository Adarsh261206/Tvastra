export interface Workshop {
  id: string;
  title: string;
  type: string;
  description: string;
  date: string;
  duration: string;
  ageGroup: string;
  image: string;
  status: 'upcoming' | 'completed';
  location: string;
  accent: string;
}

export const workshops: Workshop[] = [
  {
    id: 'w1',
    title: 'Weekend Art Workshop',
    type: 'Weekend Session',
    description: 'A focused creative session exploring a specific art technique in a single day. Perfect for trying something new.',
    date: '[Workshop Date]',
    duration: '2 Hours',
    ageGroup: 'All Ages',
    image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1400&h=1000&q=90',
    status: 'upcoming',
    location: 'TVASTRA STUDIO',
    accent: '#E2A91A',
  },
  {
    id: 'w2',
    title: 'Holiday Creative Camp',
    type: 'Holiday Program',
    description: 'An immersive creative experience during school holidays. Multiple art forms, projects, and creative activities.',
    date: '[Workshop Date]',
    duration: '3 Hours',
    ageGroup: 'Kids & Teens',
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1400&h=1000&q=90',
    status: 'upcoming',
    location: 'TVASTRA STUDIO',
    accent: '#D62D78',
  },
  {
    id: 'w3',
    title: 'Calligraphy Intensive',
    type: 'Special Workshop',
    description: 'A deep dive into the art of beautiful lettering. Learn stroke techniques, letterforms, and composition.',
    date: '[Workshop Date]',
    duration: '2.5 Hours',
    ageGroup: 'Teens & Adults',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=1400&h=1000&q=90',
    status: 'upcoming',
    location: 'TVASTRA STUDIO',
    accent: '#159F9B',
  },
  {
    id: 'w4',
    title: 'Traditional Art Exploration',
    type: 'Cultural Workshop',
    description: 'Discover the beauty and history of traditional Indian art forms in this hands-on workshop.',
    date: '[Workshop Date]',
    duration: '2 Hours',
    ageGroup: 'All Ages',
    image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?auto=format&fit=crop&w=1400&h=1000&q=90',
    status: 'completed',
    location: 'TVASTRA STUDIO',
    accent: '#E2A91A',
  },
  {
    id: 'w5',
    title: 'Contemporary Art Experiment',
    type: 'Creative Workshop',
    description: 'Push creative boundaries with abstract techniques, mixed media, and contemporary art approaches.',
    date: '[Workshop Date]',
    duration: '3 Hours',
    ageGroup: 'Teens & Adults',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=1400&h=1000&q=90',
    status: 'completed',
    location: 'TVASTRA STUDIO',
    accent: '#D62D78',
  },
  {
    id: 'w6',
    title: 'Parent & Child Art Session',
    type: 'Family Workshop',
    description: 'A special creative experience designed for parents and children to create art together.',
    date: '[Workshop Date]',
    duration: '2 Hours',
    ageGroup: 'Families',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&h=1000&q=90',
    status: 'completed',
    location: 'TVASTRA STUDIO',
    accent: '#159F9B',
  },
];
